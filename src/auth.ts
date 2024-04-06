import { Lucia, TimeSpan } from "lucia";
import { sessionTable, userTable } from "./data/schema";

import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { createClient } from "@libsql/client";
import { drizzle } from 'drizzle-orm/libsql';
import {env} from './env/server.ts'

const tursoClient = createClient({ 
  url: env.TURSO_DATABASE_URL, 
  authToken: env.TURSO_AUTH_TOKEN
})


export const db = drizzle(tursoClient)

const adapter = new DrizzleSQLiteAdapter(db, sessionTable, userTable);

export const lucia = new Lucia(adapter, {
  sessionExpiresIn: new TimeSpan(2, "w"),
  sessionCookie: {
    name: 'session',
    expires: true,
    attributes: {
      // set to `true` when using HTTPS
      secure: import.meta.env.PROD,
    },
  },
  getSessionAttributes: (attributes) => {
    return {
      ipCountry: attributes.ip_country,
    };
  },
  getUserAttributes: (attributes) => {
    return {
      // attributes has the type of DatabaseUserAttributes
      username: attributes.username,
    };
  },
});

// !MPORTANT!
declare module "lucia" {
	interface Register {
    Lucia: typeof lucia;
    DatabaseSessionAttributes: DatabaseSessionAttributes;
    User: User;
  }
  interface DatabaseSessionAttributes {
    ip_country: string;
  }
}

interface User {
  first_name: string;
  last_name: string;
  email: string;
  hashed_password?: string;
}
