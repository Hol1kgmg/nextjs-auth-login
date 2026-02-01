import { createAuthClient } from 'better-auth/client';

/**
 * Server-side auth client.
 *
 * NOTE: Using this in Server Components (Page.tsx) usually requires passing `headers()`.
 * This will opt the page into Dynamic Rendering (SSR) and disable Static Rendering.
 * Use client-side `authClient` if you want to keep pages Static.
 */
export const authFetchClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'http://localhost:4000',
});
