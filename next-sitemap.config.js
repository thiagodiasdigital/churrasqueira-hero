/** @type {import('next-sitemap').IConfig} */
const canonicalSiteUrl = "https://mundialchurrasqueiras.com.br";

const nonIndexablePaths = [
  "/404",
  "/sample-page",
  "/sample-page/*",
  "/feed",
  "/feed/*",
  "/wp-admin",
  "/wp-admin/*",
  "/wp-content",
  "/wp-content/*",
  "/wp-includes",
  "/wp-includes/*",
];

function isNonIndexablePath(path) {
  return (
    path === "/404" ||
    path === "/feed" ||
    path.startsWith("/feed/") ||
    path === "/sample-page" ||
    path.startsWith("/sample-page/") ||
    path.startsWith("/wp-admin") ||
    path.startsWith("/wp-content") ||
    path.startsWith("/wp-includes")
  );
}

module.exports = {
  siteUrl: canonicalSiteUrl,
  generateRobotsTxt: true,
  generateIndexSitemap: false,
  sitemapSize: 5000,
  exclude: nonIndexablePaths,
  transform: async (config, path) => {
    if (isNonIndexablePath(path)) {
      return null;
    }

    return {
      loc: path,
      changefreq: path === "/" ? "weekly" : "monthly",
      priority: path === "/" ? 1 : path.startsWith("/produto/") ? 0.8 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "PerplexityBot", disallow: "/" },
    ],
  },
};
