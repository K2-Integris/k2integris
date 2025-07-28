const { SitemapStream, streamToPromise } = require("sitemap");
const { createWriteStream } = require("fs");
const { resolve } = require("path");

(async () => {
  const sitemap = new SitemapStream({ hostname: "https://k2integris.com" });

  const links = [
    { url: "/", changefreq: "weekly", priority: 1.0 },
    { url: "/about", changefreq: "monthly" },
    { url: "/services", changefreq: "monthly" },
    { url: "/web-development", changefreq: "monthly" },
    { url: "/app-development", changefreq: "monthly" },
    { url: "/e-commerce", changefreq: "monthly" },
    { url: "/marketing-and-seo", changefreq: "monthly" },
    { url: "/work", changefreq: "monthly" },
    { url: "/contact", changefreq: "yearly" },
    { url: "/privacy-policy", changefreq: "yearly" },
    { url: "/imprint", changefreq: "yearly" },
    { url: "/terms-of-use", changefreq: "yearly" },
    { url: "/testimonials", changefreq: "monthly" },
  ];

  links.forEach((link) => sitemap.write(link));
  sitemap.end();

  const xml = await streamToPromise(sitemap);
  createWriteStream(resolve(__dirname, "../public/sitemap.xml")).end(xml);
})();
