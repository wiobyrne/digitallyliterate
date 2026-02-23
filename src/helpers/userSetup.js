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

  // Feed: latest 100 notes by update date, pre-sliced for Nunjucks safety
  eleventyConfig.addCollection("feedEntries", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").sort(function (a, b) {
      var aDate = a.data.updated || a.data.last_updated || a.date || 0;
      var bDate = b.data.updated || b.data.last_updated || b.date || 0;
      if (typeof aDate === "string") aDate = new Date(aDate);
      if (typeof bDate === "string") bDate = new Date(bDate);
      return bDate - aDate;
    }).slice(0, 100);
  });

  // Evergreens: all notes in the Evergreens folder, alphabetical
  eleventyConfig.addCollection("evergreens", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      if (!item.inputPath) return false;
      return item.inputPath.indexOf("Evergreens/") !== -1 &&
             item.inputPath.indexOf("Evergreens.md") === -1;
    }).sort(function (a, b) {
      return (a.data.title || "").localeCompare(b.data.title || "");
    });
  });

  // Plants: all notes in the Plants folder, alphabetical
  eleventyConfig.addCollection("plants", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      if (!item.inputPath) return false;
      return item.inputPath.indexOf("Plants/") !== -1 &&
             item.inputPath.indexOf("Plants.md") === -1;
    }).sort(function (a, b) {
      return (a.data.title || "").localeCompare(b.data.title || "");
    });
  });

  // Groves: all notes in the Groves folder, alphabetical
  eleventyConfig.addCollection("groves", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      if (!item.inputPath) return false;
      return item.inputPath.indexOf("Groves/") !== -1 &&
             item.inputPath.indexOf("Groves.md") === -1;
    }).sort(function (a, b) {
      return (a.data.title || "").localeCompare(b.data.title || "");
    });
  });

  // Newsletter: all issues in the Newsletter folder, newest first
  eleventyConfig.addCollection("newsletter", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      if (!item.inputPath) return false;
      return item.inputPath.indexOf("Newsletter/") !== -1 &&
             item.inputPath.indexOf("Newsletter.md") === -1;
    }).sort(function (a, b) {
      var aDate = a.data.created || a.date || 0;
      var bDate = b.data.created || b.date || 0;
      if (typeof aDate === "string") aDate = new Date(aDate);
      if (typeof bDate === "string") bDate = new Date(bDate);
      return bDate - aDate;
    });
  });

  // Recently updated: 10 most recent by update date
  eleventyConfig.addCollection("recentlyUpdated", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      return item.data.title && item.data.tags && item.data.tags.indexOf("gardenEntry") === -1;
    }).sort(function (a, b) {
      var aDate = a.data.updated || a.data.last_updated || a.date || 0;
      var bDate = b.data.updated || b.data.last_updated || b.date || 0;
      if (typeof aDate === "string") aDate = new Date(aDate);
      if (typeof bDate === "string") bDate = new Date(bDate);
      return bDate - aDate;
    }).slice(0, 10);
  });

  // Strip wikilink syntax: "[[Note Title]]" → "Note Title"
  eleventyConfig.addFilter("stripWikilink", function (str) {
    if (!str) return "";
    return str.replace(/\[\[([^\]]+)\]\]/g, "$1");
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
