import {defineRouting} from 'next-intl/routing';
export const routing = defineRouting({
    locales: ['en', 'pl', 'sk', 'cs', 'de'],
    defaultLocale: 'en',
    localeDetection: true,
    domains: [
        { domain: 'k2integris.com', defaultLocale: 'en', locales: ['en'] },
        { domain: 'k2integris.pl',  defaultLocale: 'pl', locales: ['pl'] },
        { domain: 'k2integris.sk',  defaultLocale: 'sk', locales: ['sk'] },
        { domain: 'k2integris.cz',  defaultLocale: 'cs', locales: ['cs'] },
        { domain: 'k2integris.de',  defaultLocale: 'de', locales: ['de'] },
        { domain: 'k2integris.at',  defaultLocale: 'de', locales: ['de'] }
    ],
    pathnames: {
        "/": {
            de: "/",
            pl: "/",
            sk: "/",
            cs: "/",
        },
        "/about": {
            de: "/über-uns",
            pl: "/o-nas",
            sk: "/o-nas",
            cs: "/o-nas",
        },
        "/services": {
            de: "/dienstleistungen",
            pl: "/uslugi",
            sk: "/sluzby",
            cs: "/sluzby",
        },
        "/web-development": {
            de: "/webentwicklung",
            pl: "/tworzenie-stron",
            sk: "/webovy-vyvoj",
            cs: "/vyvoj-webu",
        },
        "/app-development": {
            de: "/app-entwicklung",
            pl: "/tworzenie-aplikacji",
            sk: "/vyvoj-aplikacii",
            cs: "/vyvoj-aplikaci",
        },
        "/e-commerce": {
            de: "/e-commerce",
            pl: "/handel-elektroniczny",
            sk: "/e-commerce",
            cs: "/e-commerce",
        },
        "/marketing-and-seo": {
            de: "/marketing-und-seo",
            pl: "/marketing-i-seo",
            sk: "/marketing-a-seo",
            cs: "/marketing-a-seo",
        },
        "/work": {
            de: "/arbeiten",
            pl: "/realizacje",
            sk: "/praca",
            cs: "/prace",
        },
        "/contact": {
            de: "/kontakt",
            pl: "/kontakt",
            sk: "/kontakt",
            cs: "/kontakt",
        },
        "/privacy-policy": {
            de: "/datenschutz",
            pl: "/polityka-prywatnosci",
            sk: "/zasady-ochrany-osobnych-udajov",
            cs: "/zasady-ochrany-osobnich-udaju",
        },
        "/imprint": {
            de: "/impressum",
            pl: "/stopka-redakcyjna",
            sk: "/impressum",
            cs: "/impressum",
        },
        "/terms-of-use": {
            de: "/nutzungsbedingungen",
            pl: "/regulamin",
            sk: "/podmienky-pouzivania",
            cs: "/podminky-pouzivani",
        },
        "/testimonials": {
            de: "/referenzen",
            pl: "/referencje",
            sk: "/referencie",
            cs: "/reference",
        },
    },

    localePrefix: 'never'
});
