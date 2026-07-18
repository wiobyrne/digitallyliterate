function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
}

const GARDEN_STATUSES = new Set(["seed", "sprout", "evergreen"]);

function noteProperties(item) {
  return item.data["dg-note-properties"] || {};
}

function noteStatus(item) {
  var value = item.data.status || noteProperties(item).status || "";
  var normalized = String(value).trim().toLowerCase();
  return GARDEN_STATUSES.has(normalized) ? normalized : "";
}

function noteCategories(item) {
  var value = item.data.categories || noteProperties(item).categories || [];
  if (!Array.isArray(value)) value = [value];
  return value
    .map(function (category) { return String(category).trim(); })
    .filter(Boolean);
}

function hasCategory(item, category) {
  var expected = category.toLowerCase();
  return noteCategories(item).some(function (value) {
    return value.toLowerCase() === expected;
  });
}

function byTitle(a, b) {
  return (a.data.title || "").localeCompare(b.data.title || "");
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

  // Canonical garden collections are driven only by frontmatter. Folders have
  // no classification meaning. Page-type categories take precedence over
  // maturity so newsletters and Groves remain in their own reader pathways.
  eleventyConfig.addCollection("evergreens", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      return noteStatus(item) === "evergreen" &&
             !hasCategory(item, "Grove") &&
             !hasCategory(item, "Newsletter");
    }).sort(byTitle);
  });

  // Sprouts are available as an explicit route but are never published by
  // default. Only deliberately published notes can reach this collection.
  eleventyConfig.addCollection("sprouts", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      return noteStatus(item) === "sprout" &&
             !hasCategory(item, "Grove") &&
             !hasCategory(item, "Newsletter");
    }).sort(byTitle);
  });

  // Grove is a page type, not a maturity stage.
  eleventyConfig.addCollection("groves", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      return hasCategory(item, "Grove");
    }).sort(byTitle);
  });

  // Newsletter is a page type, sorted newest first by issue number.
  eleventyConfig.addCollection("newsletter", function (collectionApi) {
    function issueNumber(item) {
      var slug = item.fileSlug || "";
      var m = slug.match(/(\d+)\s*$/);
      return m ? parseInt(m[1], 10) : 0;
    }
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      return hasCategory(item, "Newsletter");
    }).sort(function (a, b) {
      return issueNumber(b) - issueNumber(a);
    });
  });

  // Recently updated: 10 most recent by update date
  eleventyConfig.addCollection("recentlyUpdated", function (collectionApi) {
    function updateDate(item) {
      var noteProperties = item.data["dg-note-properties"] || {};
      var value = item.data.updated ||
                  item.data.last_updated ||
                  noteProperties.last_updated ||
                  noteProperties.created ||
                  item.date ||
                  0;
      var parsed = value instanceof Date ? value : new Date(value);
      return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
    }

    return collectionApi.getFilteredByTag("note").filter(function (item) {
      if (!item.data.title || !item.data.tags || item.data.tags.indexOf("gardenEntry") !== -1) {
        return false;
      }
      if (!item.inputPath) return true;
      return item.inputPath.indexOf("/03 CREATE/🎓 Teaching/") === -1 &&
             item.inputPath.indexOf("/03 CREATE/🔨 Projects/Archive/") === -1 &&
             item.inputPath.indexOf("/04 META/") === -1;
    }).sort(function (a, b) {
      return updateDate(b) - updateDate(a);
    }).slice(0, 10);
  });

  // Strip wikilink syntax: "[[Note Title]]" → "Note Title"
  eleventyConfig.addFilter("stripWikilink", function (str) {
    if (!str) return "";
    return str.replace(/\[\[([^\]]+)\]\]/g, "$1");
  });

}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
exports.noteStatus = noteStatus;
exports.noteCategories = noteCategories;
exports.hasCategory = hasCategory;
