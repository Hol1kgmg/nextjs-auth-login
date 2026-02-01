import { createAuthClient } from 'better-auth/client';

export const authFetchClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'http://localhost:4000',
});
