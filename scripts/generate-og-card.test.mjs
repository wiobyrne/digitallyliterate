import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";
import { afterEach, describe, expect, test } from "vitest";
const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const nunjucks = require("nunjucks");
const { resolveOgImage } = require("../src/helpers/userSetup");
const {
  HEIGHT,
  WIDTH,
  formatCardDate,
  generateIssueCards,
  issueFromFile,
  makeDefaultSvg,
  makeIssueSvg,
  renderSvg,
} = require("./generate-og-card");

const temporaryDirectories = [];

function temporaryDirectory() {
  const directory = fs.mkdtempSync(path.join(os.tmpdir(), "dl-og-card-test-"));
  temporaryDirectories.push(directory);
  return directory;
}

function writeIssue(directory, filename, frontmatter, headingDate) {
  const content = [
    "---",
    JSON.stringify(frontmatter),
    "---",
    `*Issue ${frontmatter["dg-note-properties"].issue} · Published ${headingDate}*`,
    "",
    "Newsletter content.",
  ].join("\n");
  fs.writeFileSync(path.join(directory, filename), content);
}

afterEach(() => {
  for (const directory of temporaryDirectories.splice(0)) {
    fs.rmSync(directory, { recursive: true, force: true });
  }
});

describe("issue OG-card rendering", () => {
  test("keeps the approved default PNG output unchanged", () => {
    const existing = fs.readFileSync(path.join(__dirname, "../src/site/img/apparatus/og.png"));
    expect(renderSvg(makeDefaultSvg())).toEqual(existing);
  });

  test("reads DL 455 fields from the existing issue metadata and date heading", () => {
    const source = path.join(__dirname, "../src/site/notes/03 CREATE/33 Newsletter/DL 455.md");
    const issue = issueFromFile(source);
    expect(issue.number).toBe(455);
    expect(issue.title).toBe("Who Said No?");
    expect(issue.date.iso).toBe("2026-11-04");
    expect(issue.description).toMatch(/^Voters said no to data centers/);
    expect(issue.highlight).toBe("");
    expect(formatCardDate(issue.date)).toBe("NOV 4, 2026");
  });

  test("generates DL 446 and later issues, while excluding older and non-newsletter files", () => {
    const notes = temporaryDirectory();
    const output = path.join(temporaryDirectory(), "cards");
    const frontmatter = (number, category = "Newsletter") => ({
      title: `Issue ${number}: A future example`,
      "dg-note-properties": {
        categories: category,
        issue: number,
        published: "2026-11-04",
        description: "A short description for a generated issue card.",
      },
    });
    writeIssue(notes, "DL 445.md", frontmatter(445), "September 1, 2026");
    writeIssue(notes, "DL 446.md", frontmatter(446), "September 8, 2026");
    writeIssue(notes, "DL 454.md", frontmatter(454), "November 3, 2026");
    writeIssue(notes, "DL 455.md", frontmatter(455), "November 4, 2026");
    writeIssue(notes, "DL 456.md", frontmatter(456), "November 11, 2026");
    writeIssue(notes, "DL 457.md", frontmatter(457, "Page"), "November 18, 2026");

    const result = generateIssueCards({ notesDir: notes, outputDir: output });
    expect(result.issues.map((issue) => issue.number)).toEqual([446, 454, 455, 456]);
    for (const number of [446, 454, 455, 456]) {
      const png = fs.readFileSync(path.join(output, `${number}.png`));
      expect(png.toString("hex", 0, 8)).toBe("89504e470d0a1a0a");
      expect(png.readUInt32BE(16)).toBe(WIDTH);
      expect(png.readUInt32BE(20)).toBe(HEIGHT);
    }
    expect(fs.existsSync(path.join(output, "445.png"))).toBe(false);
    expect(fs.existsSync(path.join(output, "457.png"))).toBe(false);
  });

  test("supports optional highlight metadata and clips long titles and descriptions safely", () => {
    const title = "An unusually long issue title about public decisions and artificial intelligence that keeps going across several clauses before it reaches the end";
    const highlighted = makeIssueSvg({
      number: 456,
      title,
      highlight: "public decisions",
      date: { iso: "2026-11-11" },
      description: "A very long description with enough words to continue past the normal card width. ".repeat(8),
    });
    expect(highlighted).toContain("fill=\"#d9e4b5\"");
    expect(highlighted).toContain("NO. 456 · DIGITALLY LITERATE · NOV 11, 2026");
    expect(highlighted).toContain("…</text>");

    const withoutHighlight = makeIssueSvg({
      number: 456,
      title,
      date: { iso: "2026-11-11" },
      description: "Short description.",
    });
    expect(withoutHighlight).not.toContain("fill=\"#d9e4b5\"");
    const png = renderSvg(withoutHighlight);
    expect(png.readUInt32BE(16)).toBe(WIDTH);
    expect(png.readUInt32BE(20)).toBe(HEIGHT);
  });

  test("keeps two-line descriptions clear of the rule under a two-line title", () => {
    const svg = makeIssueSvg({
      number: 446,
      title: "Nobody Changes the Default",
      date: { iso: "2026-09-02" },
      description: "The largest child-safety settlement in tech history barely moved the defaults that matter. Here's what it actually changed, and what it didn't.",
    });
    const descriptionBaselines = [...svg.matchAll(/<text x="\d+" y="(\d+)"[^>]*font-size="26"/g)].map((m) => Number(m[1]));
    expect(descriptionBaselines.length).toBe(2);
    expect(Math.max(...descriptionBaselines)).toBeLessThanOrEqual(472);
  });

  test("preserves explicit image precedence and absolute default/image URLs", () => {
    const issue = { categories: "Newsletter", issue: 455 };
    expect(resolveOgImage("https://images.example.test/cover.png", issue, "DL 455", undefined, "https://digitallyliterate.net"))
      .toBe("https://images.example.test/cover.png");
    expect(resolveOgImage("", issue, "DL 455", undefined, ""))
      .toBe("https://digitallyliterate.net/og/issues/455.png");
    expect(resolveOgImage("", { categories: "Newsletter", issue: 454 }, "DL 454", undefined, ""))
      .toBe("https://digitallyliterate.net/og/issues/454.png");
    expect(resolveOgImage("", { categories: "Newsletter", issue: 445 }, "DL 445", undefined, ""))
      .toBe("https://digitallyliterate.net/img/apparatus/og.png");
    expect(resolveOgImage("", issue, "DL 455", "Page", ""))
      .toBe("https://digitallyliterate.net/img/apparatus/og.png");
  });

  test("renders the head component with explicit and generated image precedence", () => {
    const templatePath = path.join(__dirname, "../src/site/_includes/components/user/common/head/002-apparatus-og.njk");
    const template = fs.readFileSync(templatePath, "utf8");
    const environment = new nunjucks.Environment(null, { autoescape: false });
    environment.addFilter("apparatusOgImage", resolveOgImage);
    const context = {
      noteProps: { categories: "Newsletter", issue: 455 },
      page: { fileSlug: "DL 455" },
      categories: undefined,
      meta: { siteBaseUrl: "https://digitallyliterate.net" },
    };

    const generated = environment.renderString(template, { ...context, metatags: {} });
    expect(generated).toContain('<meta property="og:image" content="https://digitallyliterate.net/og/issues/455.png">');
    expect(generated).toContain('<meta name="twitter:image" content="https://digitallyliterate.net/og/issues/455.png">');

    const explicit = environment.renderString(template, {
      ...context,
      metatags: { "og:image": "https://images.example.test/explicit.png" },
    });
    expect(explicit).not.toContain('<meta property="og:image"');
    expect(explicit).toContain('<meta name="twitter:image" content="https://images.example.test/explicit.png">');
  });
});
