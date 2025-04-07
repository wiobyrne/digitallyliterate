---
{"dg-publish":true,"permalink":"/02-curate/indexes/book-index-public/","title":"Books Index Public","contentClasses":"cards","tags":["books","library"]}
---


# Book Index Public

## 📚 Complete Library
```dataview
const dv = app.plugins.plugins.dataview.api;
dv
  .table(
    ["Cover", "Title", "Pages", "Author", "Rating", "Status", "Tags"],
    dv.pages('"01 CONSUME/Books"')
      .sort(b => b.title, 'asc')
      .map(b => [
        "![](" + b.cover + ")",
        b.title,
        b.pages,
        b.author,
        b.rating,
        b.status,
        b.tags
      ])
  )