---
{"dg-publish":true,"permalink":"/01-consume/podcasts/podcasts/","title":"🎙️ Podcasts","tags":["podcasts","audio","folder-note"],"created":"2025-07-26","updated":"2025-07-26"}
---


# 🎙️ Podcasts

Welcome to my curated podcast knowledge network. A systematically organized collection of insights, frameworks, and connections from the world's leading thinkers and practitioners. Each episode has been enhanced with cross-vault connections to create pathways for deeper exploration and learning.

Whether you're seeking productivity insights, creative inspiration, or cutting-edge perspectives on technology and society, this collection bridges conversations into actionable knowledge.

## 🎧 Recently Added

```base
filters:
  and:
    - categories.contains("Podcasts")
properties:
  title:
    displayName: Title
  categories:
    displayName: Categories
views:
  - type: table
    name: Recently Added
    order:
      - file.name
      - show
      - host
      - formula.Untitled
    sort:
      - property: created
        direction: DESC
    limit: 5
    columnSize:
      file.name: 478

```

## 🧩 Key Themes

### **Personal Development**

- **[[Productivity Systems\|Productivity Systems]]** - Cal Newport, James Clear, Greg McKeown
- **[[Creative Process\|Creative Process]]** - Rick Rubin, Steven Pressfield, Seth Godin
- **[[Leadership\|Leadership]]** - Reed Hastings, Chamath Palihapitiya, Adam Grant
- **[[Decision Making\|Decision Making]]** - Derek Sivers, Hugh Jackman, Martha Beck

### **Technology & Innovation**

- **[[AI and Society\|AI and Society]]** - Barack Obama, Reid Hoffman, Sam Altman
- **[[Digital Transformation\|Digital Transformation]]** - Mark Zuckerberg, Sam Corcos, Matt Mullenweg
- **[[Technology Ethics\|Technology Ethics]]** - Tristan Harris, Lawrence Lessig, Almar Latour
- **[[Future of Work\|Future of Work]]** - Aaron Dignan, Tiago Forte, Jerry Michalski

### **Ideas & Analysis**

- **[[Political Thought\|Political Thought]]** - Ross Douthat, Thomas Friedman, Jonathan Haidt
- **[[Philosophy of Mind\|Philosophy of Mind]]** - Donald Hoffman, John Vervaeke, Gül Dölen
- **[[Social Commentary\|Social Commentary]]** - Ezra Klein conversations, cultural analysis
- **[[Science & Research\|Science & Research]]** - David Spiegel, Michael Easter, Richard Wiseman

### **Communication & Relationships**

- **[[Difficult Conversations\|Difficult Conversations]]** - Sheila Heen, Krista Tippett
- **[[Storytelling\|Storytelling]]** - Hugh Howey, Morgan Fallon, Chris Beresford-Hill
- **[[Emotional Intelligence\|Emotional Intelligence]]** - Brené Brown, Jason Portnoy, Arthur Brooks

## 📊 All Episodes

```base
filters:
  and:
    - categories.contains("Podcasts")
    - file.name != "🎙️ Podcasts"
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
    name: All Episodes
    order:
      - file.name
      - show
      - host
    sort:
      - property: last_updated
        direction: DESC
    image: note.cover
    columnSize:
      file.name: 478

```


## 💡 How to Use This Collection

1. **Start with Interests** - Browse themes that resonate with current questions or challenges
2. **Follow Connections** - Use cross-vault links to explore related concepts and authorities
3. **Build Understanding** - Notice patterns across conversations to develop deeper insights
4. **Apply Frameworks** - Extract actionable systems and approaches for your own life and work

## 🧠 Knowledge Connections

This podcast collection actively connects to other areas of the vault:

- **[[People\|People]]** - Host and guest profiles with expertise areas
- **[[Plants\|Plants]]** - Developing concepts from episode discussions
- **[[Evergreens\|Evergreens]]** - Mature insights referenced across multiple conversations
- **[[01 CONSUME/📚 Books/📚 Books\|📚 Books]]** - Source materials and recommendations from guests
---

_This collection represents systematic knowledge extraction from hundreds of hours of expert conversations, organized to maximize learning and application._