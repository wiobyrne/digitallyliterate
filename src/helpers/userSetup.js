const fs = require("fs");
const path = require("path");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, function (character) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[character];
  });
}

function escapeRegExp(value) {
  return String(value).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

// Apparatus highlighter: wrap at most one phrase of the page's first H1 in
// <mark>, taken from the optional `og_highlight` frontmatter field (the same
// field the issue OG card reads). Never touches body text. Matching ignores
// case and treats straight and typographic apostrophes as equal; the phrase
// must sit on word boundaries.
function titleHighlightPattern(phrase) {
  var words = String(phrase || "").trim().split(/\s+/).filter(Boolean);
  if (!words.length) return null;
  var body = words.map(function (word) {
    return escapeRegExp(word).replace(/['’]/g, "['’]");
  }).join("\\s+");
  return new RegExp("(^|[^\\p{L}\\p{N}])(" + body + ")(?=$|[^\\p{L}\\p{N}])", "iu");
}

function titleHighlightRule(state) {
  var env = state.env || {};
  var properties = env["dg-note-properties"] || {};
  var pattern = titleHighlightPattern(properties.og_highlight || properties.ogHighlight || env.og_highlight);
  if (!pattern) return;
  var tokens = state.tokens;
  for (var i = 0; i < tokens.length - 1; i++) {
    if (tokens[i].type !== "heading_open" || tokens[i].tag !== "h1") continue;
    var inline = tokens[i + 1];
    if (!inline || inline.type !== "inline" || !inline.children) return;
    for (var c = 0; c < inline.children.length; c++) {
      var child = inline.children[c];
      if (child.type !== "text") continue;
      var match = pattern.exec(child.content);
      if (!match) continue;
      var start = match.index + match[1].length;
      var end = start + match[2].length;
      var before = new state.Token("text", "", 0);
      before.content = child.content.slice(0, start);
      var open = new state.Token("html_inline", "", 0);
      open.content = '<mark class="dl-title-highlight">';
      var phrase = new state.Token("text", "", 0);
      phrase.content = match[2];
      var close = new state.Token("html_inline", "", 0);
      close.content = "</mark>";
      var after = new state.Token("text", "", 0);
      after.content = child.content.slice(end);
      inline.children.splice(c, 1, before, open, phrase, close, after);
      return;
    }
    return; // only the first H1
  }
}

function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  md.core.ruler.push("dl_title_highlight", titleHighlightRule);
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
  var properties = item && item.data ? noteProperties(item) : (item || {});
  var storedNumber = parseInt(properties.issue, 10);
  if (Number.isFinite(storedNumber) && storedNumber > 0) return storedNumber;
  var fileSlug = item && (item.fileSlug || item.slug) || "";
  var match = fileSlug.match(/(\d+)\s*$/);
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
  var parsed = stableUtcDate(published);
  return {
    display: published,
    iso: parsed && !Number.isNaN(parsed.getTime())
      ? parsed.toISOString().slice(0, 10)
      : "",
  };
}

function stableUtcDate(value) {
  if (!value) return null;
  var text = String(value).trim();
  var dateOnly = text.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (dateOnly) {
    var date = new Date(Date.UTC(
      Number(dateOnly[1]), Number(dateOnly[2]) - 1, Number(dateOnly[3])
    ));
    return date.getUTCFullYear() === Number(dateOnly[1]) &&
      date.getUTCMonth() === Number(dateOnly[2]) - 1 &&
      date.getUTCDate() === Number(dateOnly[3]) ? date : null;
  }

  // Natural-language publication dates are calendar dates, not local times.
  // Explicit timestamps retain their offset and are normalized to UTC.
  var hasTime = /\d[T ]\d{1,2}:\d{2}/.test(text);
  var hasZone = /(?:Z|[+-]\d{2}:?\d{2})$/i.test(text) || /\bUTC\b/i.test(text);
  var parsed = new Date(!hasTime && !hasZone ? text + " UTC" : text);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function newsletterIssueDescription(item) {
  var properties = noteProperties(item);
  return properties.description ||
    (item.data.metatags && item.data.metatags.description) || "";
}

// Issue chrome (label above the title, closing block after the body) is
// rendered by user slot components, so it survives plugin template updates.
// It starts at ISSUE_CHROME_FROM so the archive keeps its hand-written
// masthead and sign-off lines exactly as published.
const ISSUE_CHROME_FROM = 456;
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function issueInfo(properties, fileSlug, inputPath) {
  properties = properties || {};
  var item = { data: { "dg-note-properties": properties }, fileSlug: fileSlug || "", inputPath: inputPath };
  if (!hasCategory(item, "Newsletter")) return null;
  var parsed = stableUtcDate(newsletterIssueDate(item).display);
  var substackUrl = String(properties.substack_url || "").trim();
  return {
    number: newsletterIssueNumber(item),
    date: parsed
      ? MONTHS[parsed.getUTCMonth()] + " " + parsed.getUTCDate() + ", " + parsed.getUTCFullYear()
      : "",
    substackUrl: /^https:\/\/[^\s]+$/.test(substackUrl) ? substackUrl : "",
  };
}

// Label + closing block: new-format issues only.
function issueChrome(properties, fileSlug, inputPath) {
  var info = issueInfo(properties, fileSlug, inputPath);
  return info && info.number >= ISSUE_CHROME_FROM ? info : null;
}

// "About this letter" intro above the title: every newsletter issue, so a
// first-time reader landing on any issue can see who writes it, subscribe,
// get in touch, or find the main blog.
function issueIntro(properties, fileSlug, inputPath) {
  return issueInfo(properties, fileSlug, inputPath);
}

function resolveOgImage(explicitImage, properties, fileSlug, categories, baseUrl) {
  var canonicalBase = baseUrl || "https://digitallyliterate.net";
  var note = {
    data: {
      "dg-note-properties": properties || {},
      categories: categories || undefined,
    },
    fileSlug: fileSlug || "",
  };
  var imagePath = explicitImage || "";

  if (!imagePath && hasCategory(note, "Newsletter")) {
    var number = newsletterIssueNumber(note);
    if (number >= 446) imagePath = "/og/issues/" + number + ".png";
  }
  if (!imagePath) imagePath = "/img/apparatus/og.png";

  try {
    return new URL(imagePath, canonicalBase).href;
  } catch (error) {
    return new URL("/img/apparatus/og.png", "https://digitallyliterate.net").href;
  }
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
  eleventyConfig.addFilter("apparatusOgImage", resolveOgImage);
  eleventyConfig.addFilter("dlIssueChrome", issueChrome);
  eleventyConfig.addFilter("dlIssueIntro", issueIntro);
  eleventyConfig.addPassthroughCopy({
    "src/site/generated/og/issues": "/og/issues",
  });

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
      item.data.issueDescription = newsletterIssueDescription(item);
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
exports.newsletterIssueNumber = newsletterIssueNumber;
exports.newsletterIssueDate = newsletterIssueDate;
exports.newsletterIssueDescription = newsletterIssueDescription;
exports.resolveOgImage = resolveOgImage;
exports.titleHighlightPattern = titleHighlightPattern;
exports.issueChrome = issueChrome;
exports.ISSUE_CHROME_FROM = ISSUE_CHROME_FROM;
exports.issueIntro = issueIntro;
