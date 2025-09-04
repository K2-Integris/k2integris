/** @type {import('next').NextConfig} */
const nextConfig = {
    i18n: {
    locales: ['en', 'pl', 'sk', 'cs', 'de'],
    defaultLocale: 'en',
    localeDetection: true
  }
};

export default nextConfig;
