function userMarkdownSetup(md) {
  // The md parameter stands for the markdown-it instance used throughout the site generator.
  // Feel free to add any plugin you want here instead of /.eleventy.js
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

  // Growth stage filter — derives stage from permalink path
  eleventyConfig.addFilter("growthStage", function (permalink) {
    if (!permalink) return "";
    var p = permalink.toLowerCase();
    if (p.indexOf("/seeds/") !== -1) return "seed";
    if (p.indexOf("/plants/") !== -1) return "plant";
    if (p.indexOf("/evergreens/") !== -1) return "evergreen";
    if (p.indexOf("/groves/") !== -1) return "grove";
    if (p.indexOf("/forests/") !== -1) return "forest";
    return "";
  });
}
exports.userMarkdownSetup = userMarkdownSetup;
exports.userEleventySetup = userEleventySetup;
