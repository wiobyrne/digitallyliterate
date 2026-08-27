import { describe, expect, test } from "vitest";
import userSetup from "./userSetup.js";

const { noteStatus, noteCategories, hasCategory, archetypeClass } = userSetup;

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
