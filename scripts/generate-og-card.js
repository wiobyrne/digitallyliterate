const fs = require("node:fs");
const path = require("node:path");
const { Resvg } = require("@resvg/resvg-js");

const WIDTH = 1200;
const HEIGHT = 630;
const ROOT = path.resolve(__dirname, "..");
const outputPath = process.argv[2]
  ? path.resolve(process.argv[2])
  : path.join(ROOT, "src/site/img/apparatus/og.png");

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

function escapeXml(value) {
  return value.replace(/[&<>\"']/g, (character) => {
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

function measureText(text, fontSize, family, weight) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${WIDTH}" height="${HEIGHT}"><text x="0" y="120" font-family="${family}" font-size="${fontSize}" font-weight="${weight}">${escapeXml(text)}</text></svg>`;
  const bounds = new Resvg(svg, { font }).getBBox();
  return bounds ? bounds.width : 0;
}

function makeSvg() {
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

function main() {
  const svg = makeSvg();
  const image = new Resvg(svg, {
    font,
    textRendering: 1,
    shapeRendering: 2,
  }).render();

  if (image.width !== WIDTH || image.height !== HEIGHT) {
    throw new Error(`Expected ${WIDTH}×${HEIGHT}, got ${image.width}×${image.height}`);
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, image.asPng());
  process.stdout.write(`Wrote ${outputPath} (${image.width}×${image.height})\n`);
}

main();
