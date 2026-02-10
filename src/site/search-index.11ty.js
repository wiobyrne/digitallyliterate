// JavaScript template for search index — avoids Nunjucks stack overflow on large collections
module.exports = class SearchIndex {
  data() {
    return {
      permalink: "/searchIndex.json",
      eleventyExcludeFromCollections: true,
    };
  }

  render(data) {
    var notes = data.collections.note || [];
    var results = [];
    for (var i = 0; i < notes.length; i++) {
      var post = notes[i];
      var title = post.data.title || post.fileSlug || "";
      var date = post.date ? post.date.toString() : "";
      var url = post.url || "";
      var content = "";
      try {
        content = (post.templateContent || "")
          .replace(/<[^>]*>/g, " ")
          .replace(/\s+/g, " ")
          .trim();
      } catch (e) {
        content = "";
      }
      var tags = [];
      if (post.data.tags) {
        for (var j = 0; j < post.data.tags.length; j++) {
          var tag = post.data.tags[j];
          if (tag && tag !== "note" && tag !== "gardenEntry") {
            tags.push(tag);
          }
        }
      }
      results.push({
        title: title,
        date: date,
        url: url,
        content: content,
        tags: tags,
      });
    }
    return JSON.stringify(results);
  }
};
