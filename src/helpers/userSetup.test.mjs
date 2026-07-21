import { describe, expect, test } from "vitest";
import userSetup from "./userSetup.js";

const { noteStatus, noteCategories, hasCategory } = userSetup;

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
