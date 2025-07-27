---
{"dg-publish":true,"permalink":"/01-consume/podcasts/podcasts/","title":"🎙️ Podcasts","tags":["podcasts","audio","folder-note"]}
---


# 🎙️ Podcasts

Welcome to my curated podcast journal. This space collects my personal notes, reflections, and resources related to podcasts I regularly listen to or find insightful. Some entries offer in-depth summaries and takeaways; others are placeholders for shows I’m exploring or plan to revisit.

You’ll find podcast titles, topic subpages, and tagged notes below. If I've written about specific episodes, guests, or hosts, those links will appear as well. Use the search feature or site map for deeper exploration.

Whether you're a curious listener, an educator, or simply looking for new shows to check out, I hope this index helps you discover something valuable.

## 🎧 Recently Added

```base
filters:
  and:
    - categories.contains("Podcasts")
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
  - type: table
    name: Recently Added
    order:
      - file.name
      - show
      - host
    sort:
      - property: last_updated
        direction: DESC
    limit: 5
    image: note.cover
    columnSize:
      file.name: 478

```

## ⭐ Favorites

```
Bases query: High-rated episodes
Shows: Title, Podcast, Rating, Tags
Display: Cards view
```

## 📊 All Episodes

```
Bases query: All podcast episodes alphabetically
Shows: Title, Podcast, Date, Status, Tags
Display: Table view
```


### 🧩 Subtopics

These are recurring themes or categories across podcast notes.

- [[Creativity and Innovation\|Creativity and Innovation]]
    
- [[Technology and Ethics\|Technology and Ethics]]
    
- [[Education and Learning\|Education and Learning]]

## 📄 Consumed Episodes

Below is a list of podcast episodes I've listened to and annotated. I use these notes to capture interesting ideas, memorable quotes, and connections to my own work or teaching. Some entries include full transcripts, timestamped notes, or reflective summaries.

🛠️ _I mark up podcast episodes much like I annotate books—highlighting patterns, insights, and questions. These notes help me remember what resonated and sometimes become the seeds of future blog posts, research, or classroom discussions._

```dataview
table file.name as "Note", file.ctime as "Created"
from ""
where contains(tags, "podcasts")
sort file.ctime desc