import type { Config } from 'drizzle-kit';
//import * as dotenv from 'dotenv';
export default {
  schema: './schema.ts',
  out: './drizzle',
  driver: 'turso',
  dbCredentials: {
    url: import.meta.env.TURSO_DATABASE_URL,
    authToken: import.meta.env.TURSO_AUTH_TOKEN
  }

} satisfies Config;
