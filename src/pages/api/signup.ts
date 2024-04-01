import {db, lucia} from '../../auth';

import type { APIContext } from 'astro';
import { Argon2id } from 'oslo/password';
import { generateId } from 'lucia';
import { userTable } from '../../data/schema';

export async function POST(context: APIContext): Promise<Response> {
  const formData = await context.request.formData();
  const password = formData.get('password') as string;
  const email = formData.get('email') as string;
  const firstName = formData.get('first_name') as string;
  const lastName = formData.get('last_name') as string;

  // const validateUsername = (username: string) => {
  //   // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
  //   // keep in mind some database (e.g. mysql) are case insensitive
  //   if (
  //     typeof username !== 'string' ||
  //     username.length < 3 ||
  //     username.length > 31 ||
  //     !/^[a-z0-9_-]+$/.test(username)
  //   ) {
  //     return new Response('Invalid username', {
  //       status: 400,
  //     });
  //   }
  // };
  const validatePassword = (password: string) => {
    if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
      return new Response('Invalid password', {
        status: 400,
      });
    }
  }

  // validateUsername(username?.toString() || '');
  validatePassword(password?.toString() || '');

  const userId = generateId(15);
  const hashedPassword = await new Argon2id().hash(password);

  // TODO: check if username is already used
  await db.insert(userTable).values({
    id: userId,
    first_name: firstName,
    last_name: lastName,
    email: email,
    hashed_password: hashedPassword,
  });

  const session = await lucia.createSession(userId, {ip_country: 'US'});
  const sessionCookie = lucia.createSessionCookie(session.id);
  context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);

  return context.redirect('/dashboard');
}
