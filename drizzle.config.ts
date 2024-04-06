import type { Config } from 'drizzle-kit';

import {env} from '~/env/server.ts'

console.log("ENV >>>>>>>> ", env)
export default {
  schema: './src/data/schema.ts',
  out: './src/data/drizzle',
  driver: 'turso',
  dbCredentials: {
    url: env.TURSO_DATABASE_URL || 'sqlite://:memory:',
    authToken: env.TURSO_AUTH_TOKEN
  }

} satisfies Config;
