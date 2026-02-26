/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://mundialchurrasqueiras.com.br",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "GPTBot", disallow: "/" },
      { userAgent: "ClaudeBot", disallow: "/" },
      { userAgent: "PerplexityBot", disallow: "/" },
    ],
  },
};
