---
{"dg-publish":true,"permalink":"/02-curate/mo-cs/books/","title":"Books Overview","contentClasses":"cards","tags":["books","library"]}
---


# Books

## 📚 Complete Library

```dataviewjs
dv.table(
  ["Cover", "Title", "Pages", "Author", "Rating", "Status", "Tags"],
  dv.pages('"01 CONSUME/Books"')
    .where(b => b.cover)
    .sort(b => b.title, 'asc')
    .map(b => [
      `![](${b.cover})`,
      b.title,
      b.pages,
      b.author,
      b.rating,
      b.status,
      b.tags
    ])
);

