---
{"dg-publish":true,"permalink":"/02-curate/indexes/book-index-public/","title":"Books Index Public","contentClasses":"cards","tags":["books","library"]}
---

# Book Index Public
## 📚 Complete Library

```dataview
TABLE 
  ("![](" + cover + ")") as Cover,
  title as Title,
  pages as Pages,
  author as Author,
  rating as Rating,
  status as Status,
  tags as Tags
FROM "01 CONSUME/Books"
SORT title ASC
