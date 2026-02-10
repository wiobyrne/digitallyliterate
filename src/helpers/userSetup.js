function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}
function userEleventySetup(eleventyConfig) {
  // Reading time filter — strips HTML, counts words, returns "X min read"
  eleventyConfig.addFilter("readingTime", function (content) {
    if (!content) return "";
    var text = content.replace(/<[^>]*>/g, "").replace(/\s+/g, " ").trim();
    var words = text.split(" ").length;
    var minutes = Math.max(1, Math.round(words / 200));
    return minutes + " min read";
  });

  // Pre-filtered collections to avoid Nunjucks stack overflow on large collections.
  // Nunjucks iterates recursively — looping 1,300+ items blows the stack on Netlify.

  eleventyConfig.addCollection("books", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      return item.url && item.url.startsWith("/01-consume/books/") && item.url !== "/books-folder-note/";
    });
  });

  // Feed: latest 50 notes, pre-sliced so Nunjucks only iterates 50 items
  eleventyConfig.addCollection("feedEntries", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").sort(function (a, b) {
      return (b.date || 0) - (a.date || 0);
    }).slice(0, 50);
  });

  // Growth stage filter — derives stage from permalink path
  eleventyConfig.addFilter("growthStage", function (permalink) {
    if (!permalink) return "";
    var p = permalink.toLowerCase();
    if (p.indexOf("/seeds/") !== -1) return "seed";
    if (p.indexOf("/plants/") !== -1) return "plant";
    if (p.indexOf("/evergreens/") !== -1) return "evergreen";
    if (p.indexOf("/groves/") !== -1) return "grove";
    if (p.indexOf("/forests/") !== -1) return "forest";
    return "";
  });
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
