---
{"dg-publish":true,"permalink":"/01-consume/books/books/","title":"📚 Books","tags":["books","reading","library","folder-note"]}
---


# 📚 Books

Welcome to my complete reading collection! This is a dynamic library that tracks all books across reading stages - from wishlist to completed reads with ratings and insights.

## 📖 Currently Reading

```base
filters:
  and:
    - categories.contains("Books")
    - title != "{{title}}"
formulas:
  Stars Rating: if(rating == 1, "★☆☆☆☆", if(rating == 2, "★★☆☆☆", if(rating == 3, "★★★☆☆", if(rating == 4, "★★★★☆", if(rating == 5, "★★★★★", "")))))
properties:
  image:
    displayName: Cover
  title:
    displayName: Title
  categories:
    displayName: Categories
  shelf:
    displayName: Shelf
views:
  - type: cards
    name: Currently Reading
    filters:
      and:
        - shelf == "active"
    order:
      - file.name
      - author
      - formula.Stars Rating
    sort:
      - property: date
        direction: DESC
    limit: 5
    image: note.cover

```

## ⭐ Recently Completed (Last 5)
```base
filters:
  and:
    - categories.contains("Books")
    - title != "{{title}}"
formulas:
  Stars Rating: if(rating == 1, "★☆☆☆☆", if(rating == 2, "★★☆☆☆", if(rating == 3, "★★★☆☆", if(rating == 4, "★★★★☆", if(rating == 5, "★★★★★", "")))))
properties:
  image:
    displayName: Cover
  title:
    displayName: Title
  categories:
    displayName: Categories
  shelf:
    displayName: Shelf
views:
  - type: cards
    name: Recently Completed
    filters:
      and:
        - shelf == "archived"
    order:
      - file.name
      - author
      - formula.Stars Rating
    sort:
      - property: date
        direction: DESC
    limit: 5
    image: note.cover

```

## 📋 Reading Queue

```base
filters:
  and:
    - categories.contains("Books")
    - title != "{{title}}"
formulas:
  Stars Rating: if(rating == 1, "★☆☆☆☆", if(rating == 2, "★★☆☆☆", if(rating == 3, "★★★☆☆", if(rating == 4, "★★★★☆", if(rating == 5, "★★★★★", "")))))
properties:
  image:
    displayName: Cover
  title:
    displayName: Title
  categories:
    displayName: Categories
  shelf:
    displayName: Shelf
views:
  - type: cards
    name: Reading Queue
    filters:
      and:
        - shelf == "inbox"
    order:
      - file.name
      - author
    sort: []
    limit: 5
    image: note.cover

```
## 📚 Complete Library

![[Books.base]]

