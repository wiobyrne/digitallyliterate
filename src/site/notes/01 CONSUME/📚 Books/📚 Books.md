---
{"dg-publish":true,"permalink":"/01-consume/books/books/","title":"📚 Books","tags":["books","reading","library","folder-note"],"created":"2025-07-26","updated":"2025-07-26"}
---


# 📚 Books

Welcome to my digital reading journal! This index contains a collection of books I've read or plan to read. Click on any book title to access my personal notes and insights about that text. Some books have detailed notes while others are still in my reading queue.

This collection represents my ongoing journey through various topics and genres. I hope my notes and reflections might be helpful or interesting to fellow readers!

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

[[Book Index\|Book Index]]