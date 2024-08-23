export const nextAuthMiddleware = `export { default } from 'next-auth/middleware';

export const config = {
  matcher: ['/', '/your-path', '/your-other-page/:id*', '...'],
};`;
