const { SitemapStream, streamToPromise } = require("sitemap");
const { resolve } = require("path");
const { writeFileSync } = require("fs");
const { Readable } = require("stream");

(async () => {
  const routes = [
    "/",
    "/about",
    "/services",
    "/web-development",
    "/app-development",
    "/e-commerce",
    "/marketing-and-seo",
    "/work",
    "/contact",
    "/privacy-policy",
    "/imprint",
    "/terms-of-use",
    "/testimonials",
  ];

  const stream = new SitemapStream({
    hostname: "https://k2integris.com",
    xmlns: {
      xhtml: true,
    },
  });

  routes.forEach((path) => {
    stream.write({
      url: path,
      changefreq:
        path === "/" ? "weekly" : path === "/contact" ? "yearly" : "monthly",
      priority: path === "/" ? 1.0 : undefined,
      links: [
        { lang: "en", url: `https://k2integris.com${path}` },
        { lang: "pl", url: `https://k2integris.pl${path}` },
      ],
    });
  });

  stream.end();

  const xml = await streamToPromise(stream);
  writeFileSync(resolve(__dirname, "../public/sitemap.xml"), xml.toString());
})();
