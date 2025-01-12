import { SitemapStream, streamToPromise } from "sitemap";
import { createGzip } from "zlib";
import fs from "fs";
import path from "path";

// List your routes here
const routes = [
  { url: "/", changefreq: "daily", priority: 1.0 },
  { url: "/about", changefreq: "weekly", priority: 0.8 },
  // Add other routes here
];

const generateSitemap = async () => {
  const sitemap = new SitemapStream({ hostname: "https://rajanmoliya.me" });
  const pipeline = sitemap.pipe(createGzip());

  routes.forEach((route) => {
    sitemap.write(route);
  });

  sitemap.end();

  const sitemapData = await streamToPromise(pipeline);
  fs.writeFileSync(
    path.join(
      path.dirname(new URL(import.meta.url).pathname),
      "public",
      "sitemap.xml.gz"
    ),
    sitemapData
  );

  console.log("Sitemap generated successfully!");
};

generateSitemap().catch(console.error);
