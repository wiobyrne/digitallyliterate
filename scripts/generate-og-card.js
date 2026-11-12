const fs = require("node:fs");
const path = require("node:path");
const { performance } = require("node:perf_hooks");
const matter = require("gray-matter");
const { Resvg } = require("@resvg/resvg-js");
const matterOptions = require("../src/helpers/matterOptions");
const {
  hasCategory,
  newsletterIssueNumber,
  newsletterIssueDate,
  newsletterIssueDescription,
} = require("../src/helpers/userSetup");

const WIDTH = 1200;
const HEIGHT = 630;
const MIN_ISSUE = 446;
const SAFE_LEFT = 140;
const SAFE_RIGHT = WIDTH - SAFE_LEFT;
const SAFE_WIDTH = SAFE_RIGHT - SAFE_LEFT;
const TITLE_INSET = 5;
const TITLE_X = SAFE_LEFT + TITLE_INSET;
const TITLE_WIDTH = SAFE_WIDTH - TITLE_INSET * 2;
const ROOT = path.resolve(__dirname, "..");
const DEFAULT_OUTPUT = path.join(ROOT, "src/site/img/apparatus/og.png");
const ISSUE_NOTES = path.join(ROOT, "src/site/notes/03 CREATE/33 Newsletter");
const ISSUE_OUTPUT = path.join(ROOT, "src/site/generated/og/issues");

const colors = {
  paper: "#f5f0e0",
  ink: "#082612",
  muted: "#425646",
  leaf: "#2c6b1c",
  leafTint: "#d9e4b5",
  siblingGreen: "#006d48",
};

const sourceSerif = path.join(
  ROOT,
  "src/site/img/fonts/SourceSerif4-VariableFont_opsz_wght.ttf"
);
const jetBrainsMono = path.join(
  ROOT,
  "src/site/img/fonts/JetBrainsMono-VariableFont_wght.ttf"
);
const font = {
  fontFiles: [sourceSerif, jetBrainsMono],
  loadSystemFonts: false,
};

const measureCache = new Map();

function escapeXml(value) {
  return String(value).replace(/[&<>\"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '\"': "&quot;",
      "'": "&apos;",
    };
    return entities[character];
  });
}

function typographicText(value) {
  return String(value || "").replace(/'/g, "’");
}

function measureText(text, fontSize, family, weight) {
  const key = `${family}|${weight}|${fontSize}|${text}`;
  if (measureCache.has(key)) return measureCache.get(key);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}"><text x="0" y="120" font-family="${family}" font-size="${fontSize}" font-weight="${weight}">${escapeXml(text)}</text></svg>`;
  const bounds = new Resvg(svg, { font }).getBBox();
  const width = bounds ? bounds.width : 0;
  measureCache.set(key, width);
  return width;
}

// The approved Phase 1 site card remains byte-for-byte the same design.
function makeDefaultSvg() {
  const titleSize = 88;
  const titleX = 96;
  const titleBaseline = 278;
  const firstTitlePart = "Digitally";
  const secondTitlePart = "Literate";
  const firstPartWidth = measureText(
    firstTitlePart,
    titleSize,
    "Source Serif 4",
    600
  );
  const secondPartWidth = measureText(
    secondTitlePart,
    titleSize,
    "Source Serif 4",
    600
  );
  const secondPartX = titleX + firstPartWidth + 22;
  const highlightX = secondPartX - 8;
  const highlightY = titleBaseline - 68;
  const highlightWidth = secondPartWidth + 18;

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${colors.paper}"/>

  <text x="96" y="112" fill="${colors.leaf}" font-family="JetBrains Mono" font-size="20" font-weight="500" letter-spacing="2.2">WEEKLY NEWSLETTER · PUBLIC NOTEBOOK</text>

  <rect x="${highlightX}" y="${highlightY}" width="${highlightWidth}" height="78" fill="${colors.leafTint}"/>
  <text x="${titleX}" y="${titleBaseline}" fill="${colors.ink}" font-family="Source Serif 4" font-size="${titleSize}" font-weight="600">${escapeXml(firstTitlePart)}</text>
  <text x="${secondPartX}" y="${titleBaseline}" fill="${colors.ink}" font-family="Source Serif 4" font-size="${titleSize}" font-weight="600">${secondTitlePart}</text>

  <text x="98" y="374" fill="${colors.muted}" font-family="Source Serif 4" font-size="28" font-weight="400">A weekly newsletter and connected notebook</text>
  <text x="98" y="416" fill="${colors.muted}" font-family="Source Serif 4" font-size="28" font-weight="400">on AI, technology, and education for educators.</text>

  <g transform="translate(98 526)" fill="none" stroke="${colors.siblingGreen}" stroke-width="2" opacity="0.18">
    <rect width="38" height="38"/>
    <rect x="9" y="9" width="20" height="20"/>
    <rect x="16" y="16" width="6" height="6" fill="${colors.siblingGreen}"/>
  </g>
  <g transform="translate(96 524)" fill="none" stroke="${colors.ink}" stroke-width="2.2">
    <rect width="38" height="38"/>
    <rect x="9" y="9" width="20" height="20"/>
    <rect x="16" y="16" width="6" height="6" fill="${colors.ink}"/>
  </g>
  <text x="152" y="552" fill="${colors.ink}" font-family="JetBrains Mono" font-size="18" font-weight="500" letter-spacing="0.5">digitallyliterate.net</text>
</svg>`;
}

function titleTokens(title, highlight) {
  const words = typographicText(title || "Untitled issue").trim().split(/\s+/).filter(Boolean);
  const phrase = typographicText(highlight || "").trim().split(/\s+/).filter(Boolean);
  if (!phrase.length) return words.map((text) => ({ text, highlight: false }));

  for (let start = 0; start <= words.length - phrase.length; start++) {
    const matches = phrase.every((word, index) =>
      words[start + index].toLocaleLowerCase() === word.toLocaleLowerCase()
    );
    if (!matches) continue;
    return [
      ...words.slice(0, start).map((text) => ({ text, highlight: false })),
      { text: words.slice(start, start + phrase.length).join(" "), highlight: true },
      ...words.slice(start + phrase.length).map((text) => ({ text, highlight: false })),
    ];
  }
  return words.map((text) => ({ text, highlight: false }));
}

function splitLongToken(token, fontSize, maxWidth) {
  const pieces = [];
  let rest = token.text;
  while (rest) {
    let length = rest.length;
    while (length > 1 && measureText(rest.slice(0, length), fontSize, "Source Serif 4", 600) > maxWidth) {
      length--;
    }
    pieces.push({ text: rest.slice(0, length), highlight: token.highlight });
    rest = rest.slice(length);
  }
  return pieces;
}

function tokenLineWidth(tokens, fontSize, weight = 600) {
  return measureText(
    tokens.map((token) => token.text).join(" "),
    fontSize,
    "Source Serif 4",
    weight
  );
}

function wrapTokens(tokens, fontSize, maxWidth, weight = 600) {
  const expanded = tokens.flatMap((token) =>
    measureText(token.text, fontSize, "Source Serif 4", weight) > maxWidth
      ? splitLongToken(token, fontSize, maxWidth)
      : [token]
  );
  const lines = [];
  let current = [];
  for (const token of expanded) {
    const candidate = [...current, token];
    if (current.length && tokenLineWidth(candidate, fontSize, weight) > maxWidth) {
      lines.push(current);
      current = [token];
    } else {
      current = candidate;
    }
  }
  if (current.length) lines.push(current);
  return lines;
}

function truncateLines(lines, maxLines, fontSize, maxWidth) {
  if (lines.length <= maxLines) return lines;
  const kept = lines.slice(0, maxLines);
  const last = kept[maxLines - 1].map((token) => ({ ...token }));
  const ellipsis = { text: "…", highlight: false };
  while (last.length && tokenLineWidth([...last, ellipsis], fontSize) > maxWidth) {
    last.pop();
  }
  last.push(ellipsis);
  kept[maxLines - 1] = last;
  return kept;
}

function wrapDescription(description, fontSize, maxWidth, maxLines = 2) {
  const words = typographicText(description).trim().split(/\s+/).filter(Boolean);
  if (!words.length) return [];
  const lines = [];
  let current = "";
  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (current && measureText(candidate, fontSize, "Source Serif 4", 400) > maxWidth) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
  }
  if (current) lines.push(current);
  if (lines.length <= maxLines) return lines;
  const kept = lines.slice(0, maxLines);
  let final = kept[maxLines - 1];
  while (final && measureText(`${final}…`, fontSize, "Source Serif 4", 400) > maxWidth) {
    final = final.replace(/\s+\S+$/, "");
  }
  kept[maxLines - 1] = `${final || ""}…`;
  return kept;
}

function formatCardDate(issueDate) {
  const value = issueDate.iso || issueDate.display || "";
  const iso = String(value).match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (!iso) return String(issueDate.display || "DATE NOT SET").toLocaleUpperCase();
  const date = new Date(Date.UTC(Number(iso[1]), Number(iso[2]) - 1, Number(iso[3])));
  if (date.getUTCFullYear() !== Number(iso[1]) || date.getUTCMonth() !== Number(iso[2]) - 1 || date.getUTCDate() !== Number(iso[3])) {
    return "DATE NOT SET";
  }
  const month = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"][date.getUTCMonth()];
  return `${month} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

function drawTitleLine(tokens, x, baseline, fontSize) {
  let cursor = x;
  // Resvg's SVG text bounds omit whitespace-only glyphs, so measure a normal
  // inter-word gap from the font size instead of asking getBBox for a space.
  const spaceWidth = fontSize * 0.25;
  const elements = [];
  tokens.forEach((token, index) => {
    if (index) cursor += spaceWidth;
    const width = measureText(token.text, fontSize, "Source Serif 4", 600);
    if (token.highlight) {
      elements.push(`<rect x="${cursor - 5}" y="${baseline - fontSize * 0.79}" width="${width + 10}" height="${fontSize * 0.96}" fill="${colors.leafTint}"/>`);
    }
    elements.push(`<text x="${cursor}" y="${baseline}" fill="${colors.ink}" font-family="Source Serif 4" font-size="${fontSize}" font-weight="600">${escapeXml(token.text)}</text>`);
    cursor += width;
  });
  return elements.join("\n  ");
}

function makeIssueSvg(issue, options = {}) {
  const title = String(issue.title || `DL ${issue.number}`);
  const description = String(issue.description || "");
  const titleWidth = TITLE_WIDTH;
  let titleSize = 68;
  let titleLines = [];
  for (const candidate of [96, 88, 80, 72, 68, 62, 56, 50, 44, 38, 34]) {
    const wrapped = wrapTokens(titleTokens(title, issue.highlight), candidate, titleWidth);
    if (wrapped.length <= 4 && wrapped.length * candidate * 1.12 <= 200) {
      titleSize = candidate;
      titleLines = wrapped;
      break;
    }
  }
  if (!titleLines.length) {
    titleSize = 34;
    titleLines = truncateLines(wrapTokens(titleTokens(title, issue.highlight), titleSize, titleWidth), 4, titleSize, titleWidth);
  }

  const titleLineHeight = Math.round(titleSize * 1.12);
  const firstTitleBaseline = 230;
  const descriptionLines = wrapDescription(description, 26, SAFE_WIDTH, 2);
  const descriptionFirstBaseline = firstTitleBaseline + titleLines.length * titleLineHeight + 30;
  const metadata = `NO. ${issue.number} · DIGITALLY LITERATE · ${formatCardDate(issue.date || {})}`;
  const titleMarkup = titleLines.map((line, index) =>
    drawTitleLine(line, TITLE_X, firstTitleBaseline + index * titleLineHeight, titleSize)
  ).join("\n  ");
  const descriptionMarkup = descriptionLines.map((line, index) =>
    `<text x="${SAFE_LEFT}" y="${descriptionFirstBaseline + index * 33}" fill="${colors.muted}" font-family="Source Serif 4" font-size="26" font-weight="400">${escapeXml(line)}</text>`
  ).join("\n  ");

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}" viewBox="0 0 ${WIDTH} ${HEIGHT}">
  <rect width="${WIDTH}" height="${HEIGHT}" fill="${colors.paper}"/>
  <text x="${SAFE_LEFT}" y="108" fill="${colors.leaf}" font-family="JetBrains Mono" font-size="20" font-weight="500" letter-spacing="1.7">${escapeXml(metadata)}</text>
  ${titleMarkup}
  ${descriptionMarkup}
  <line x1="${SAFE_LEFT}" y1="500" x2="${SAFE_RIGHT}" y2="500" stroke="${colors.leaf}" stroke-width="1"/>
  <g transform="translate(${SAFE_LEFT + 2} 524)" fill="none" stroke="${colors.siblingGreen}" stroke-width="2" opacity="0.18">
    <rect width="38" height="38"/>
    <rect x="9" y="9" width="20" height="20"/>
    <rect x="16" y="16" width="6" height="6" fill="${colors.siblingGreen}"/>
  </g>
  <g transform="translate(${SAFE_LEFT} 524)" fill="none" stroke="${colors.ink}" stroke-width="2.2">
    <rect width="38" height="38"/>
    <rect x="9" y="9" width="20" height="20"/>
    <rect x="16" y="16" width="6" height="6" fill="${colors.ink}"/>
  </g>
  <text x="${SAFE_LEFT + 56}" y="552" fill="${colors.ink}" font-family="JetBrains Mono" font-size="18" font-weight="500" letter-spacing="0.5">digitallyliterate.net</text>
</svg>`;
}

function renderSvg(svg) {
  const image = new Resvg(svg, {
    font,
    textRendering: 1,
    shapeRendering: 2,
  }).render();
  if (image.width !== WIDTH || image.height !== HEIGHT) {
    throw new Error(`Expected ${WIDTH}×${HEIGHT}, got ${image.width}×${image.height}`);
  }
  return image.asPng();
}

function readMarkdownFiles(directory) {
  const files = [];
  if (!fs.existsSync(directory)) return files;
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...readMarkdownFiles(fullPath));
    else if (entry.isFile() && /^DL\s+\d+\.md$/i.test(entry.name)) files.push(fullPath);
  }
  return files;
}

function issueFromFile(filePath) {
  const parsed = matter(fs.readFileSync(filePath, "utf8"), matterOptions);
  const fileSlug = path.basename(filePath, path.extname(filePath));
  const item = { data: parsed.data, fileSlug, inputPath: filePath };
  if (!hasCategory(item, "Newsletter")) return null;
  const number = newsletterIssueNumber(item);
  if (number < MIN_ISSUE) return null;
  const properties = parsed.data["dg-note-properties"] || {};
  const date = newsletterIssueDate(item);
  // Optional Obsidian property; cards remain valid when it is omitted.
  return {
    number,
    title: parsed.data.title || properties.title || fileSlug,
    description: newsletterIssueDescription(item),
    date,
    highlight: properties.og_highlight || properties.ogHighlight || "",
  };
}

function generateIssueCards(options = {}) {
  const notesDir = options.notesDir || ISSUE_NOTES;
  const outputDir = options.outputDir || ISSUE_OUTPUT;
  const start = performance.now();
  const files = readMarkdownFiles(notesDir);
  const issues = files.map(issueFromFile).filter(Boolean).sort((a, b) => a.number - b.number);

  fs.mkdirSync(outputDir, { recursive: true });
  for (const name of fs.readdirSync(outputDir)) {
    if (/^\d+\.png$/.test(name)) fs.unlinkSync(path.join(outputDir, name));
  }
  for (const issue of issues) {
    fs.writeFileSync(path.join(outputDir, `${issue.number}.png`), renderSvg(makeIssueSvg(issue)));
  }

  const elapsed = performance.now() - start;
  process.stdout.write(`Generated ${issues.length} issue card(s) from ${files.length} newsletter source file(s) in ${elapsed.toFixed(0)} ms\n`);
  return { issues, elapsedMs: elapsed, outputDir };
}

function main(args = process.argv.slice(2)) {
  if (args.includes("--issues")) {
    generateIssueCards();
    return;
  }
  const outputPath = args[0] ? path.resolve(args[0]) : DEFAULT_OUTPUT;
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, renderSvg(makeDefaultSvg()));
  process.stdout.write(`Wrote ${outputPath} (${WIDTH}×${HEIGHT})\n`);
}

if (require.main === module) main();

module.exports = {
  WIDTH,
  HEIGHT,
  MIN_ISSUE,
  formatCardDate,
  generateIssueCards,
  issueFromFile,
  makeDefaultSvg,
  makeIssueSvg,
  renderSvg,
  titleTokens,
  wrapDescription,
};
