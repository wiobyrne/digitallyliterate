const fs = require("fs");
const path = require("path");

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

function newsletterIssueNumber(item) {
  var storedNumber = parseInt(noteProperties(item).issue, 10);
  if (Number.isFinite(storedNumber) && storedNumber > 0) return storedNumber;
  var match = (item.fileSlug || "").match(/(\d+)\s*$/);
  return match ? parseInt(match[1], 10) : 0;
}

function newsletterIssueDate(item) {
  var properties = noteProperties(item);
  var published = properties.published || "";

  // Newsletter source headings carry the published date. Note creation dates
  // can precede publication, so prefer the date Ian authored for readers.
  if (item.inputPath) {
    try {
      var source = fs.readFileSync(path.resolve(item.inputPath), "utf8");
      var match = source.match(/^\*Issue\s+\d+\s*·\s*Published\s+([^*·]+)(?:·[^*]*)?\*/m);
      if (match) published = match[1].trim();
    } catch (error) {
      // Use the available note metadata below if the source cannot be read.
    }
  }

  if (!published) published = properties.created || "";
  var parsed = published ? new Date(published) : null;
  return {
    display: published,
    iso: parsed && !Number.isNaN(parsed.getTime())
      ? parsed.toISOString().slice(0, 10)
      : "",
  };
}

// Public page archetypes. The `categories` field selects the archetype; the
// `status` field is private maturity and never selects one. See design.md.
const PAGE_ARCHETYPES = {
  newsletter: "dl-newsletter",
  evergreen: "dl-evergreen",
  grove: "dl-grove",
  forest: "dl-forest",
  page: "dl-page",
};

function archetypeClass(item) {
  var categories = noteCategories(item);
  for (var i = 0; i < categories.length; i++) {
    var match = PAGE_ARCHETYPES[categories[i].toLowerCase()];
    if (match) return match;
  }
  return "";
}

function userEleventySetup(eleventyConfig) {
  // These collections use Eleventy's built-in collection API. Keep the sets
  // small before Nunjucks renders them; the full note collection is large.

  // Public DL collections are driven only by the categories page type.
  // Private Seed/Sprout/Plant maturity never creates public navigation.
  eleventyConfig.addCollection("evergreens", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      return hasCategory(item, "Evergreen");
    }).sort(byTitle);
  });

  // Grove is a page type, not a maturity stage.
  eleventyConfig.addCollection("groves", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      return hasCategory(item, "Grove");
    }).sort(byTitle);
  });

  eleventyConfig.addCollection("forests", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      return hasCategory(item, "Forest");
    }).sort(byTitle);
  });

  // Newsletter is a page type, sorted newest first by issue number.
  eleventyConfig.addCollection("newsletter", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      return hasCategory(item, "Newsletter");
    }).sort(function (a, b) {
      return newsletterIssueNumber(b) - newsletterIssueNumber(a);
    });
  });

  eleventyConfig.addCollection("latestNewsletter", function (collectionApi) {
    var allNotes = collectionApi.getFilteredByTag("note");
    var evergreenNotes = allNotes.filter(function (item) {
      return hasCategory(item, "Evergreen");
    });
    function connectionValues(item) {
      var values = noteProperties(item).connections || item.data.connections || [];
      return (Array.isArray(values) ? values : [values]).map(function (value) {
        return String(value).replace(/^\[\[/, "").replace(/\]\]$/, "").split("|")[0].toLowerCase();
      });
    }
    function matchesIssue(reference, item, number) {
      var slug = String(item.fileSlug || "").toLowerCase();
      return reference.indexOf("dl " + number) !== -1 ||
        reference.indexOf("dl-" + number) !== -1 ||
        (!!slug && reference.endsWith(slug));
    }
    function matchesEvergreen(reference, item) {
      var slug = String(item.fileSlug || "").toLowerCase();
      var title = String(item.data.title || "").toLowerCase();
      var url = String(item.url || "").replace(/^\//, "").replace(/\/$/, "").toLowerCase();
      return (!!slug && (reference.endsWith("/" + slug) || reference === slug)) ||
        (!!url && (reference.endsWith("/" + url) || reference === url)) ||
        (!!title && reference.endsWith(title));
    }
    return allNotes.filter(function (item) {
      return hasCategory(item, "Newsletter");
    }).sort(function (a, b) {
      return newsletterIssueNumber(b) - newsletterIssueNumber(a);
    }).slice(0, 5).map(function (item) {
      var publishedDate = newsletterIssueDate(item);
      var properties = noteProperties(item);
      item.data.issueNumber = newsletterIssueNumber(item);
      item.data.issueDate = publishedDate.display;
      item.data.issueDateISO = publishedDate.iso;
      item.data.issueDescription = properties.description ||
        (item.data.metatags && item.data.metatags.description) || "";
      item.data.linkedEvergreens = evergreenNotes.filter(function (evergreen) {
        var issueReferences = connectionValues(item);
        var evergreenReferences = connectionValues(evergreen);
        return issueReferences.some(function (reference) {
          return matchesEvergreen(reference, evergreen);
        }) || evergreenReferences.some(function (reference) {
          return matchesIssue(reference, item, item.data.issueNumber);
        });
      }).map(function (evergreen) {
        return { title: evergreen.data.title, url: evergreen.url };
      });
      return item;
    });
  });

  // Homepage notebook section: the three most recently updated Evergreens.
  eleventyConfig.addCollection("recentEvergreens", function (collectionApi) {
    function updateDateValue(item) {
      var noteProperties = item.data["dg-note-properties"] || {};
      return item.data.updated ||
                  item.data.last_updated ||
                  noteProperties.last_updated ||
                  noteProperties.created ||
                  item.date ||
                  0;
    }
    function updateDate(item) {
      var value = updateDateValue(item);
      var parsed = value instanceof Date ? value : new Date(value);
      return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
    }
    return collectionApi.getFilteredByTag("note").filter(function (item) {
      return hasCategory(item, "Evergreen");
    }).sort(function (a, b) {
      return updateDate(b) - updateDate(a);
    }).slice(0, 3);
  });

  // Assign the public page archetype class to every note, derived from its
  // `categories` page type. Collections resolve before templates render, so
  // mutating item.data here reaches `{{ contentClasses }}` in the layout —
  // the same mechanism recentGardenUpdates uses for gardenType. Doing it here
  // keeps the wiring in a user-owned file: eleventyComputed.js and the note
  // layout are template-owned and must not be forked for this.
  eleventyConfig.addCollection("pageArchetypes", function (collectionApi) {
    return collectionApi.getFilteredByTag("note").map(function (item) {
      var archetype = archetypeClass(item);
      if (!archetype) return item;

      var existing = String(item.data.contentClasses || "").trim();
      if (existing.split(/\s+/).indexOf(archetype) === -1) {
        item.data.contentClasses = existing
          ? existing + " " + archetype
          : archetype;
      }
      return item;
    });
  });

}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
exports.noteStatus = noteStatus;
exports.noteCategories = noteCategories;
exports.hasCategory = hasCategory;
exports.archetypeClass = archetypeClass;
