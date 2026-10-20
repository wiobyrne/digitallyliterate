const { parse } = require("node-html-parser");

const FEED_URL = "https://wiobyrne.com/rss.xml";

function textFor(item, tagName) {
  const element = item.querySelector(tagName);
  return element ? element.text.trim() : "";
}

module.exports = async function () {
  try {
    const response = await fetch(FEED_URL, { signal: AbortSignal.timeout(8000) });
    if (!response.ok) throw new Error(`RSS request returned ${response.status}`);

    const feed = parse(await response.text(), { lowerCaseTagName: true });
    const item = feed.querySelector("item");
    if (!item) return null;

    const title = textFor(item, "title");
    const url = textFor(item, "link");
    const description = textFor(item, "description");
    const published = textFor(item, "pubdate");
    const date = published ? new Date(published) : null;
    if (!title || !url || !description || !date || Number.isNaN(date.getTime())) return null;

    return {
      title,
      url,
      description: description.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim(),
      date: date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        timeZone: "UTC",
      }),
      dateISO: date.toISOString(),
    };
  } catch (error) {
    console.warn(`Could not load wiobyrne.com RSS feed: ${error.message}`);
    return null;
  }
};
