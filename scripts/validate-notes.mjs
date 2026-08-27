#!/usr/bin/env node
/**
 * Frontmatter and publishing validator for Digitally Literate.
 *
 * Catches the classes of mistake that build cleanly but publish wrong: a note
 * that renders with no page archetype, a duplicate permalink that silently
 * shadows another page, a maturity value the collections quietly ignore.
 *
 * It parses notes with the SAME frontmatter options .eleventy.js uses. The
 * Digital Garden plugin writes Obsidian wikilink aliases as `\|` inside JSON
 * frontmatter, which is an invalid escape for both JSON.parse and stock YAML.
 * A validator using a stock parser reports hundreds of false failures here.
 *
 *   node scripts/validate-notes.mjs           errors fail, warnings report
 *   node scripts/validate-notes.mjs --strict  warnings fail too
 *   node scripts/validate-notes.mjs --quiet   summary only
 */

import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const matter = require("gray-matter");
const jsYaml = require(require.resolve("js-yaml", {
  paths: [require.resolve("gray-matter")],
}));

// Mirrors matterOptions in .eleventy.js. Keep the two in step.
const matterOptions = {
  engines: {
    yaml: {
      parse: (str) => jsYaml.load(str.replace(/\\\|/g, "|")),
      stringify: (obj) => jsYaml.dump(obj),
    },
  },
};

const NOTES_DIR = "src/site/notes";

// Public page types. Must match PAGE_ARCHETYPES in src/helpers/userSetup.js.
const PAGE_TYPES = new Set(["newsletter", "evergreen", "grove", "forest", "page"]);

// Private maturity. Must match GARDEN_STATUSES in src/helpers/userSetup.js.
const MATURITY = new Set(["seed", "sprout", "evergreen"]);

const strict = process.argv.includes("--strict");
const quiet = process.argv.includes("--quiet");

const errors = [];
const warnings = [];
const escapedPipes = [];

function walk(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walk(full, out);
    else if (entry.name.endsWith(".md")) out.push(full);
  }
  return out;
}

function rel(file) {
  return path.relative(NOTES_DIR, file);
}

function asList(value) {
  if (value === undefined || value === null) return [];
  return (Array.isArray(value) ? value : [value])
    .map((v) => String(v).trim())
    .filter(Boolean);
}

if (!fs.existsSync(NOTES_DIR)) {
  console.error(`No notes directory at ${NOTES_DIR}.`);
  process.exit(1);
}

const files = walk(NOTES_DIR);
const permalinks = new Map();

for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  const where = rel(file);

  let data;
  try {
    data = matter(raw, matterOptions).data;
  } catch (err) {
    errors.push(`${where}: frontmatter does not parse — ${err.message.split("\n")[0]}`);
    continue;
  }

  if (!data || typeof data !== "object" || Object.keys(data).length === 0) {
    errors.push(`${where}: no frontmatter`);
    continue;
  }

  const props = data["dg-note-properties"] || {};
  const source = Object.keys(props).length ? props : data;

  if (data["dg-publish"] !== true) {
    errors.push(`${where}: is in the published notes tree but dg-publish is not true`);
  }

  if (!data.title && !source.title) {
    errors.push(`${where}: no title — the page will fall back to its file slug`);
  }

  // Permalink uniqueness. A collision silently shadows one of the two notes.
  const permalink = data.permalink || data["dg-permalink"];
  if (!permalink) {
    warnings.push(`${where}: no permalink; the URL will follow the vault folder path`);
  } else {
    const key = String(permalink).replace(/^\/|\/$/g, "").toLowerCase();
    if (permalinks.has(key)) {
      errors.push(`${where}: permalink "${permalink}" collides with ${permalinks.get(key)}`);
    } else {
      permalinks.set(key, where);
    }
  }

  // Page type drives the public archetype. See design.md.
  const categories = asList(source.categories ?? data.categories);
  const recognised = categories.filter((c) => PAGE_TYPES.has(c.toLowerCase()));
  const unrecognised = categories.filter((c) => !PAGE_TYPES.has(c.toLowerCase()));

  if (categories.length === 0) {
    errors.push(`${where}: no categories — it will render with no page archetype`);
  } else if (recognised.length === 0) {
    errors.push(
      `${where}: no recognised page type in [${categories.join(", ")}] — ` +
        `expected one of ${[...PAGE_TYPES].join(", ")}`,
    );
  } else if (recognised.length > 1) {
    warnings.push(
      `${where}: more than one page type [${recognised.join(", ")}]; ` +
        `the first one wins`,
    );
  }

  if (unrecognised.length && recognised.length) {
    warnings.push(`${where}: unrecognised categories ignored: ${unrecognised.join(", ")}`);
  }

  // Maturity is private and never selects an archetype.
  const status = String(source.status ?? data.status ?? "").trim().toLowerCase();
  if (status && !MATURITY.has(status)) {
    warnings.push(
      `${where}: status "${status}" is not a maturity value ` +
        `(${[...MATURITY].join(", ")}) and will be ignored`,
    );
  }

  if (!source.description && !data.description) {
    warnings.push(`${where}: no description — social cards and previews will be empty`);
  }

  // An explicit contentClasses that disagrees with the derived archetype means
  // two people are steering the same page.
  const derived = recognised.length ? `dl-${recognised[0].toLowerCase()}` : "";
  const declared = String(data.contentClasses || "").trim().split(/\s+/).filter(Boolean);
  const declaredArchetypes = declared.filter((c) => /^dl-(newsletter|evergreen|grove|forest|page)$/.test(c));
  if (derived && declaredArchetypes.length && !declaredArchetypes.includes(derived)) {
    warnings.push(
      `${where}: contentClasses declares ${declaredArchetypes.join(", ")} ` +
        `but the category derives ${derived}`,
    );
  }

  // Works through .eleventy.js's parser, breaks every stock one. The plugin
  // writes this, not Ian, so it is counted rather than listed per file.
  const fmBlock = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (fmBlock && fmBlock[1].includes("\\|")) escapedPipes.push(where);
}

if (!quiet) {
  const show = (label, list) => {
    if (!list.length) return;
    console.log(`\n${label} (${list.length}):`);
    for (const line of list) console.log(`  ${line}`);
  };
  show("Errors", errors);
  show("Warnings", warnings);

  if (escapedPipes.length) {
    console.log(
      `\nNote: ${escapedPipes.length} notes carry a raw \\| escape in frontmatter ` +
        `(wikilink aliases written by the Digital Garden plugin). They parse only\n` +
        `because .eleventy.js rewrites \\| to | first. Nothing to fix — but any\n` +
        `tooling you point at these notes needs the same rewrite.`,
    );
  }
}

console.log(
  `\nvalidate-notes: ${files.length} notes · ` +
    `${errors.length} error${errors.length === 1 ? "" : "s"} · ` +
    `${warnings.length} warning${warnings.length === 1 ? "" : "s"}` +
    (strict ? " (strict)" : ""),
);

if (errors.length || (strict && warnings.length)) process.exit(1);
