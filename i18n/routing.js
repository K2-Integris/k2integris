// src/i18n/routing.ts
import {defineRouting} from 'next-intl/routing';
export const routing = defineRouting({
  locales: ['en', 'pl', 'sk', 'cs', 'de'],
  defaultLocale: 'en',
  localeDetection: true,
  // Domain mappings:
  domains: [
    { domain: 'k2integris.com', defaultLocale: 'en', locales: ['en'] },
    { domain: 'k2integris.pl',  defaultLocale: 'pl', locales: ['pl'] },
    { domain: 'k2integris.sk',  defaultLocale: 'sk', locales: ['sk'] },
    { domain: 'k2integris.cz',  defaultLocale: 'cs', locales: ['cs'] },
    { domain: 'k2integris.de',  defaultLocale: 'de', locales: ['de'] },
    { domain: 'k2integris.at',  defaultLocale: 'de', locales: ['de'] }
  ],
  // No locale prefix in URLs (domain handles locale):
  localePrefix: 'never'
});
