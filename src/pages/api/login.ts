import { db, lucia } from "~/auth"

import type { APIContext } from "astro"
import { Argon2id } from "oslo/password"
import { eq } from 'drizzle-orm'
import { userTable } from "~/data/schema"

export async function POST(context: APIContext): Promise<Response> {
	const formData = await context.request.formData()
	
  const username = formData.get("username")
	if (
		typeof username !== "string" ||
		username.length < 3 ||
		username.length > 31 ||
		!/^[a-z0-9_-]+$/.test(username)
	) {
		return new Response("Invalid username", {
			status: 400
		})
	}

	const password = formData.get("password")
	if (
    typeof password !== "string" ||
    password.length < 6 ||
    password.length > 255
  ) {
		return new Response("Invalid password", {
			status: 400
		})
	}

  const email = formData.get('email')
  if (
    typeof email !== "string" || 
    email.length < 6 ||
    email.length > 255
  ) {
    return new Response("Invalid email", {
      status: 400
    })
  }

const existingUser = await db
  .select()
  .from(userTable)
  .where(eq(userTable.email, email))
	if (!existingUser) {
		// NOTE:
		// Returning immediately allows malicious actors to figure out valid usernames from response times,
		// allowing them to only focus on guessing passwords in brute-force attacks.
		// As a preventive measure, you may want to hash passwords even for invalid usernames.
		// However, valid usernames can be already be revealed with the signup page among other methods.
		// It will also be much more resource intensive.
		// Since protecting against this is none-trivial,
		// it is crucial your implementation is protected against brute-force attacks with login throttling etc.
		// If usernames are public, you may outright tell the user that the username is invalid.
		return new Response("Incorrect username or password", {
			status: 400
		})
	}

	if (existingUser[0].hashed_password) {
    const validPassword = await new Argon2id().verify(existingUser[0].hashed_password, password);
    if (!validPassword) {
      return new Response("Incorrect username or password", {
        status: 400
      })
    }
  }

	const session = await lucia.createSession(existingUser[0].id, {})
	const sessionCookie = lucia.createSessionCookie(session.id)
	context.cookies.set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes)

  console.log("******************* cookies *******************", session)
  console.log("******************* session *******************", context.cookies.get(sessionCookie.name))
	return context.redirect("/dashboard")
}
