// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { routing } from './src/i18n/routing';

export default createMiddleware(routing);

export const config = {
  matcher: [
    // Match all paths except Next.js internals and assets:
    '/((?!api|_next|.*\\..*).*)'
  ]
};
