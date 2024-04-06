import { createEnv } from '@t3-oss/env-core';
import { z } from 'zod';

export const env = createEnv({
  clientPrefix: 'PUBLIC_', // All client env variables need 'PUBLIC_' prefix
  client: {
    PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1),
  },
  runtimeEnv: import.meta.env, //process.env,
  skipValidation: import.meta.env.SKIP_ENV_VALIDATION === "development"
});
