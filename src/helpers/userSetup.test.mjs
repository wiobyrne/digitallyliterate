import { describe, expect, test } from "vitest";
import userSetup from "./userSetup.js";

const {
  noteStatus,
  noteCategories,
  hasCategory,
  archetypeClass,
  newsletterIssueNumber,
  newsletterIssueDate,
  resolveOgImage,
} = userSetup;

function publishedNote(properties, topLevel = {}) {
  return {
    data: {
      ...topLevel,
      "dg-note-properties": properties,
    },
  };
}

describe("garden frontmatter contract", () => {
  test("reads canonical maturity from plugin-published note properties", () => {
    expect(noteStatus(publishedNote({ status: "sprout" }))).toBe("sprout");
    expect(noteStatus(publishedNote({ status: "evergreen" }))).toBe("evergreen");
  });

  test("rejects retired and page-type values as maturity", () => {
    expect(noteStatus(publishedNote({ status: "plant" }))).toBe("");
    expect(noteStatus(publishedNote({ status: "grove" }))).toBe("");
    expect(noteStatus(publishedNote({ status: "forest" }))).toBe("");
    expect(noteStatus(publishedNote({ status: "🌲_evergreen" }))).toBe("");
  });

  test("reads page type from string or list categories", () => {
    var grove = publishedNote({ categories: ["Note", "Grove"] });
    var newsletter = publishedNote({ categories: "Newsletter" });
    var evergreen = publishedNote({ categories: "Evergreen" });
    var forest = publishedNote({ categories: "Forest" });

    expect(noteCategories(grove)).toEqual(["Note", "Grove"]);
    expect(hasCategory(grove, "Grove")).toBe(true);
    expect(hasCategory(newsletter, "Newsletter")).toBe(true);
    expect(hasCategory(evergreen, "Evergreen")).toBe(true);
    expect(hasCategory(forest, "Forest")).toBe(true);
  });

  test("prefers explicit top-level fields when present", () => {
    var note = publishedNote(
      { status: "seed", categories: "Note" },
      { status: "evergreen", categories: "Grove" },
    );

    expect(noteStatus(note)).toBe("evergreen");
    expect(hasCategory(note, "Grove")).toBe(true);
  });
});

describe("public page archetypes", () => {
  test("maps each page type to its archetype class", () => {
    expect(archetypeClass(publishedNote({ categories: "Newsletter" }))).toBe("dl-newsletter");
    expect(archetypeClass(publishedNote({ categories: "Evergreen" }))).toBe("dl-evergreen");
    expect(archetypeClass(publishedNote({ categories: "Grove" }))).toBe("dl-grove");
    expect(archetypeClass(publishedNote({ categories: "Forest" }))).toBe("dl-forest");
    expect(archetypeClass(publishedNote({ categories: "Page" }))).toBe("dl-page");
  });

  test("matches page type case-insensitively and inside a list", () => {
    expect(archetypeClass(publishedNote({ categories: ["Note", "grove"] }))).toBe("dl-grove");
  });

  test("returns no archetype for an unknown or missing page type", () => {
    expect(archetypeClass(publishedNote({ categories: "Bookshelf" }))).toBe("");
    expect(archetypeClass(publishedNote({}))).toBe("");
  });

  test("maturity never selects an archetype", () => {
    expect(archetypeClass(publishedNote({ status: "evergreen" }))).toBe("");
    expect(archetypeClass(publishedNote({ status: "seed", categories: "Newsletter" })))
      .toBe("dl-newsletter");
  });
});

describe("newsletter card metadata", () => {
  test("prefers the stored issue number and falls back to the filename", () => {
    expect(newsletterIssueNumber({ data: { "dg-note-properties": { issue: 455 } }, fileSlug: "DL 454" })).toBe(455);
    expect(newsletterIssueNumber({ data: { "dg-note-properties": {} }, fileSlug: "DL 456" })).toBe(456);
    expect(newsletterIssueNumber({ data: { "dg-note-properties": {} }, fileSlug: "not-an-issue" })).toBe(0);
  });

  test("keeps date-only publication dates stable across local timezones", () => {
    const previousTz = process.env.TZ;
    try {
      process.env.TZ = "America/Los_Angeles";
      const losAngeles = newsletterIssueDate({
        data: { "dg-note-properties": { published: "2026-11-04" } },
      });
      process.env.TZ = "Pacific/Honolulu";
      const honolulu = newsletterIssueDate({
        data: { "dg-note-properties": { published: "November 4, 2026" } },
      });
      expect(losAngeles.iso).toBe("2026-11-04");
      expect(honolulu.iso).toBe("2026-11-04");
    } finally {
      if (previousTz === undefined) delete process.env.TZ;
      else process.env.TZ = previousTz;
    }
  });

  test("resolves explicit, generated issue, and default images in precedence order", () => {
    const props = { categories: "Newsletter", issue: 455 };
    expect(resolveOgImage("https://cdn.example.test/custom.png", props, "DL 455", undefined, "https://digitallyliterate.net"))
      .toBe("https://cdn.example.test/custom.png");
    expect(resolveOgImage("", props, "DL 455", undefined, "https://digitallyliterate.net"))
      .toBe("https://digitallyliterate.net/og/issues/455.png");
    expect(resolveOgImage("", { categories: "Newsletter", issue: 454 }, "DL 454", undefined, ""))
      .toBe("https://digitallyliterate.net/og/issues/454.png");
    expect(resolveOgImage("", { categories: "Newsletter", issue: 445 }, "DL 445", undefined, ""))
      .toBe("https://digitallyliterate.net/img/apparatus/og.png");
    expect(resolveOgImage("", props, "DL 455", "Page", "https://digitallyliterate.net"))
      .toBe("https://digitallyliterate.net/img/apparatus/og.png");
  });
});

describe("title highlighter (og_highlight)", () => {
  async function render(markdown, env) {
    const { default: MarkdownIt } = await import("markdown-it");
    const md = new MarkdownIt({ html: true });
    userSetup.userMarkdownSetup(md);
    return md.render(markdown, env);
  }

  test("wraps the og_highlight phrase in the first H1 only, leaving punctuation outside", async () => {
    const html = await render("# Who Sets the Terms?\n\nWho sets the terms in body text?\n\n# Who Sets the Terms?", {
      "dg-note-properties": { og_highlight: "the Terms" },
    });
    expect(html).toContain('<h1>Who Sets <mark class="dl-title-highlight">the Terms</mark>?</h1>');
    expect(html.match(/<mark/g)).toHaveLength(1);
    expect(html).toContain("<p>Who sets the terms in body text?</p>");
  });

  test("matches case-insensitively on word boundaries and ignores partial words", async () => {
    const env = (phrase) => ({ "dg-note-properties": { og_highlight: phrase } });
    expect(await render("# Who Said No?", env("said no"))).toContain('<mark class="dl-title-highlight">Said No</mark>?');
    expect(await render("# Who Sets the Terms?", env("the Term"))).not.toContain("<mark");
    expect(await render("# Who’s Next", env("Who's"))).toContain('<mark class="dl-title-highlight">Who’s</mark>');
  });

  test("does nothing without og_highlight", async () => {
    expect(await render("# Who Sets the Terms?", {})).toBe("<h1>Who Sets the Terms?</h1>\n");
  });
});
