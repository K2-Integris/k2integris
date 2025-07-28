const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { resolve } = require("path");

(async () => {
  const sitemap = new SitemapStream({ hostname: "https://k2integris.com" });

  const baseUrls = [
    { lang: "en", domain: "https://k2integris.com" },
    { lang: "pl", domain: "https://k2integris.pl" },
  ];

  const pages = [
    { path: "/", changefreq: "weekly", priority: 1.0 },
    { path: "/about", changefreq: "monthly" },
    { path: "/services", changefreq: "monthly" },
    { path: "/web-development", changefreq: "monthly" },
    { path: "/app-development", changefreq: "monthly" },
    { path: "/e-commerce", changefreq: "monthly" },
    { path: "/marketing-and-seo", changefreq: "monthly" },
    { path: "/work", changefreq: "monthly" },
    { path: "/contact", changefreq: "yearly" },
    { path: "/privacy-policy", changefreq: "yearly" },
    { path: "/imprint", changefreq: "yearly" },
    { path: "/terms-of-use", changefreq: "yearly" },
    { path: "/testimonials", changefreq: "monthly" },
  ];

  pages.forEach(({ path, changefreq, priority }) => {
    sitemap.write({
      url: path,
      changefreq,
      priority,
      links: baseUrls.map(({ lang, domain }) => ({
        lang,
        url: domain + path,
      })),
    });
  });

  sitemap.end();

  const xml = await streamToPromise(sitemap);
  createWriteStream(resolve(__dirname, "../public/sitemap.xml")).end(xml);
})();
