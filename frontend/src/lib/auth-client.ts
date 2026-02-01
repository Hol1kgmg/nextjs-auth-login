import { createAuthClient } from 'better-auth/react';

/**
 * Client-side auth client.
 *
 * NOTE: To maintain Static Rendering (SSG) for pages, use this client-side `authClient`
 * for session handling in Client Components via hooks like `useSession`.
 *
 * Using server-side auth (like `authFetchClient` with `headers()`) in Page components
 * will opt the page into Dynamic Rendering.
 */
export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL || 'http://localhost:4000', // the base url of your auth server
});
