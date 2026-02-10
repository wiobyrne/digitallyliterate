// JavaScript template for sitemap — avoids Nunjucks stack overflow on large collections
module.exports = class Sitemap {
  data() {
    return {
      permalink: "/sitemap.xml",
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    var baseUrl = data.meta.siteBaseUrl || "";
    var lines = ['<?xml version="1.0" encoding="utf-8"?>'];
    lines.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');
    for (var i = 0; i < data.collections.all.length; i++) {
      var page = data.collections.all[i];
      var date = page.date ? page.date.toISOString() : "";
      lines.push("  <url>");
      lines.push("    <loc>" + baseUrl + page.url + "</loc>");
      if (date) lines.push("    <lastmod>" + date + "</lastmod>");
      lines.push("  </url>");
    }
    lines.push("</urlset>");
    return lines.join("\n");
  }
};
