import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
    locales: ['ru', 'en', 'ky'],
    defaultLocale: 'ky'
});

export const config = {
    matcher: ['/', '/(ru|en|ky)/:path*', '/((?!api|_next|_vercel|.*\\..*).*)']
};