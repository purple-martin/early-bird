import { defineMiddleware } from 'astro:middleware';
import { lucia } from '~/auth';
import { verifyRequestOrigin } from 'lucia';

export const onRequest = defineMiddleware(async (context, next) => {
  if (context.request.method !== 'GET') {
    console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& POST', context);
    const originHeader = context.request.headers.get('Origin');
    const hostHeader = context.request.headers.get('Host');
    if (!originHeader || !hostHeader || !verifyRequestOrigin(originHeader, [hostHeader])) {
      return new Response(null, {
        status: 403,
      });
    }
  }

  
  const requestPath = context.url?.pathname;
  console.log('GET REQUEST: ', context.url.pathname);

  if (
    requestPath === '/' ||
    requestPath === '/_image' ||
    requestPath === '/accounts/login' ||
    requestPath === '/accounts/signup' ||
    requestPath === '/accounts/logout' ||
    requestPath === '/api/login' ||
    requestPath === '/api/signup' ||
    requestPath === '/api/logout' ||
    requestPath === '/api/user' ||
    requestPath === '/api/session' ||
    requestPath === '/api/refresh' ||
    requestPath === '/api/verify'
  ) {
    return next();
  }

  const sessionId = context.cookies.get(lucia.sessionCookieName)?.value ?? null;

  if (!sessionId) {
    context.locals.user = null;
    context.locals.session = null;
    console.log('NO SESSION ID, WHAT SHOULD WE DO?');
    //return next();
    return context.redirect('/accounts/login');
  }

  const { session, user } = await lucia.validateSession(sessionId);
  if (session && session.fresh) {
    const sessionCookie = lucia.createSessionCookie(session.id);
    console.log('SETTING SESSION COOKIE', sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }
  if (!session) {
    console.log('NO SESSION');
    const sessionCookie = lucia.createBlankSessionCookie();
    context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
  }
  context.locals.session = session;
  context.locals.user = user;
  return next();
});
