---
{"dg-publish":true,"permalink":"/02-curate/mo-cs/books/","title":"Books Overview","contentClasses":"cards","tags":["books","library"]}
---


# Books

## 📚 Complete Library
```dataview
table 
  ("![](" + cover + ")") as Cover,
  title as Title,
  pages as Pages,
  author as Author,
  rating as Rating,
  status as Status,
  tags as Tags
from "01 CONSUME/Books"
sort title asc
