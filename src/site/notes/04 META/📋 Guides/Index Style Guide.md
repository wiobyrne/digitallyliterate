---
{"dg-publish":true,"permalink":"/04-meta/guides/index-style-guide/","title":"Index Style Guide","tags":["vault-management","indexes","style-guide","yaml-standards","reference-tools"],"created":"2025-07-16","updated":"2025-07-18"}
---


# Index Style Guide

## Overview

Indexes serve as **comprehensive reference tools and lookup directories** for complete topic coverage. They prioritize **quick lookup, exhaustive listings, and categorical organization** over narrative exploration, functioning as the vault's reference library system.

**Philosophy**: Comprehensive reference, quick lookup, categorical organization  
**Purpose**: Reference library and comprehensive catalog  
**Structure**: Flat, categorized, and alphabetized listings  
**Use Case**: Quick lookup, complete coverage, and systematic reference

_This guide establishes standards for creating and maintaining reference-focused navigation tools within the vault ecosystem._

---

## Mandatory YAML Template

All Index files **MUST** use this exact YAML structure:

yaml

```yaml
---
title: [Topic] Index
created: YYYY-MM-DD
last_updated: YYYY-MM-DD
status: 🌲_evergreen
tags:
  - index
  - [topic-tag]
  - [domain-tag]
dg-publish: false
categories:
  - Index
related:
  - "[[Related MOC]]"
  - "[[Connected Index]]"
aliases:
  - [Alternative Names]
shelf: active
---
```

### Critical Format Requirements

**1. Status Field** (MANDATORY)

- ✅ **CORRECT**: `status: 🌲_evergreen` (Indexes are stable reference tools)
- ❌ **WRONG**: `status: "🌲_evergreen"`, `status: index`, `status: ["🌲_evergreen"]`

**2. Title Conventions** (MANDATORY)

- ✅ **CORRECT**: "[Topic] Index" (e.g., "Privacy Tools Index")
- ❌ **WRONG**: "[Topic] MOC", "[Topic] Hub", "[Topic] Directory"

**3. Tag Requirements** (MANDATORY)

- ✅ **CORRECT**: `lowercase-with-dashes` format
- **Required**: `index` tag + topic-specific tags
- **Quantity**: 3-6 relevant tags maximum

**4. Publishing Strategy** (RECOMMENDED)

- **Default**: `dg-publish: true` (external reference tool)
- **Rationale**: Indexes serve as comprehensive reference catalogs for digital garden exploration

---

## When to Use an Index

### Choose Index Format When:

- You need **comprehensive coverage** of all items in a topic area
- Purpose is **quick lookup** and **finding specific items**
- Content is **categorizable** and benefits from **systematic listing**
- You're building **bibliographies, directories, or reference catalogs**
- Users need **complete inventories** rather than guided exploration
- Content serves as **supporting reference** for MOC thematic exploration

### Ideal Index Applications:

- **Tool Collections**: Comprehensive software, apps, and method catalogs
- **Resource Libraries**: Complete listings of books, articles, courses
- **People Directories**: Researchers, experts, practitioners by field
- **Concept Glossaries**: Alphabetical definitions and explanations
- **Content Inventories**: All vault content by type, tag, or topic
- **Reference Databases**: Systematic collections for lookup and citation

### Index vs MOC Decision Matrix:

|**Use Index When**|**Use MOC When**|
|---|---|
|Comprehensive coverage needed|Thematic exploration desired|
|Quick lookup essential|Learning path important|
|Systematic reference required|Conceptual relationships key|
|Complete inventory desired|Progressive development needed|
|Flat organization preferred|Hierarchical learning structure|
|Supporting MOC exploration|Primary navigation and synthesis|

---

## Standard Index Structure

### Essential Elements

All Indexes must include these core components:

**Purpose Statement**: Clear explanation of scope and coverage  
**Usage Instructions**: How to navigate and utilize the Index effectively  
**Categorical Organization**: Logical grouping of related items  
**Alphabetical Sections**: Systematic A-Z organization for complete coverage  
**Complexity Indicators**: User guidance for item difficulty levels  
**Cross-References**: Strategic connections to related MOCs and Indexes

### Template Structure

markdown

```markdown
# [Topic] Index

> A comprehensive reference catalog for all [topic] content in the vault

## Understanding this Index 🧭
This Index provides systematic access to all [topic]-related content using the following navigation system:

- **🔹 Beginner-friendly. Strongly recommended.**
- **🔸 Advanced/Optional** - Deeper dives for specific interests or specialized needs
- **🧭 Trailhead:** Introductory concepts and foundational knowledge
- **🪜 Learning Path:** Progressive development stages and skill building
- **📘 Core Reference:** Essential resources, definitions, and in-depth explanations
- **🧩 Conceptual Link:** Connections between different ideas and technologies
- **🛠️ Tool/Resource:** Practical tools, software, services, and implementation methods

## 📚 How to Use This Index

This index provides systematic access to all [topic]-related content. Use it for:

- **Quick Lookup**: Find specific items by name or category
- **Comprehensive Coverage**: Browse complete collections
- **Reference Support**: Supporting material for MOC exploration
- **Content Discovery**: Systematic browsing of topic areas

---

## 🗂️ Categories

### Core Concepts
- [[Fundamental Concept A]] 🔹🧭 - Essential foundation principle
- [[Advanced Theory B]] 🔸📘 - Sophisticated theoretical framework
- [[Practical Framework C]] 🔹🪜 - Actionable implementation model

### Methods & Techniques
- [[Basic Method 1]] 🔹🪜 - Introductory approach
- [[Advanced Technique 2]] 🔸🛠️ - Specialized implementation
- [[Expert Strategy 3]] 🔸📘 - Professional-level method

### Tools & Resources
- [[Essential Tool A]] 🔹🛠️ - Fundamental utility
- [[Specialized Software B]] 🔸🛠️ - Advanced application
- [[Professional Platform C]] 🔸🛠️ - Enterprise solution

### Research & Sources
- [[Foundational Research 1]] 🔹📘 - Key academic work
- [[Contemporary Study 2]] 🔹🧩 - Recent findings
- [[Specialized Analysis 3]] 🔸📘 - Expert research

---

## 🔤 Alphabetical Listing

### A-F
- [[Algorithm Design]] 🔸📘 - Advanced computational methods
- [[Basic Principles]] 🔹🧭 - Foundational concepts
- [[Core Framework]] 🔹🪜 - Essential structure

### G-M
- [[Implementation Guide]] 🔹🛠️ - Practical application
- [[Learning Theory]] 🔸📘 - Educational foundations
- [[Methodology]] 🔹🪜 - Systematic approach

### N-S
- [[Optimization Techniques]] 🔸🛠️ - Performance enhancement
- [[Research Methods]] 🔸📘 - Academic approaches
- [[Strategic Planning]] 🔹🪜 - Systematic development

### T-Z
- [[Testing Frameworks]] 🔸🛠️ - Quality assurance
- [[User Experience]] 🔹🧩 - Human-centered design
- [[Validation Methods]] 🔸📘 - Verification approaches

---

## 🏷️ Content by Development Stage

### 🌲 Evergreens (Stable Reference)
- [[Authoritative Framework 1]] - Established knowledge
- [[Core Principles Guide]] - Fundamental concepts
- [[Best Practices Manual]] - Proven approaches

### 🌿 Plants (Developing Knowledge)
- [[Emerging Framework 1]] - Evolving understanding
- [[Experimental Method 2]] - Testing approaches
- [[Developing Theory 3]] - Growing insights

### 🌱 Seeds (Early Exploration)
- [[Initial Concept 1]] - Early-stage ideas
- [[Preliminary Research 2]] - Beginning investigations
- [[Exploratory Method 3]] - Testing approaches

---

## 🔗 Related Navigation

### Connected MOCs
- [[Primary Domain MOC]] - Thematic exploration and learning paths
- [[Related Domain MOC]] - Adjacent knowledge area guidance
- [[Implementation MOC]] - Applied practice and methods

### Cross-Reference Indexes
- [[Adjacent Topic Index]] - Related domain coverage
- [[Tool-Specific Index]] - Specialized resource catalog
- [[Research Index]] - Academic and source materials

### Integration Points
- **For Learning**: Start with [[Domain MOC]], reference this Index for complete coverage
- **For Reference**: Use this Index for lookup, explore [[Domain MOC]] for context
- **For Research**: Comprehensive source material, guided by [[Research MOC]]
```

---

## Content Quality Standards

### Index Quality Requirements

- **Comprehensive Coverage**: All relevant vault content included systematically
- **Logical Organization**: Intuitive categorical and alphabetical structure
- **Consistent Formatting**: Standardized descriptions and complexity indicators
- **Current Validation**: Regular updates and functional link verification
- **Clear Navigation**: Immediate findability of specific items
- **Reference Focus**: Flat, lookup-oriented rather than narrative structure

### Entry Description Standards

- **Brevity**: 1-2 sentence descriptions maximum for quick scanning
- **Clarity**: Immediate understanding of content scope and purpose
- **Consistency**: Uniform format and style across all entries
- **Complexity Rating**: Strategic use of 🔹 (beginner) and 🔸 (advanced) indicators
- **Currency**: Regular review and validation of descriptions

---

## Index vs MOC Integration

### Complementary Relationship

**Indexes support MOCs**: Provide comprehensive reference for thematic exploration  
**MOCs contextualize Indexes**: Offer guided learning paths through reference materials  
**Strategic Partnership**: Each serves distinct but complementary user needs  
**Cross-Reference Framework**: Systematic linking enhances both tool effectiveness

### Integration Patterns

markdown

```markdown
## 🔗 Related Navigation

### Thematic Exploration
- [[Digital Resilience MOC]] - Guided learning path and conceptual framework
- [[Privacy Implementation MOC]] - Applied practice and progressive development

### Comprehensive Reference
- [[Security Tools Index]] - Complete catalog of security implementations
- [[Privacy Resources Index]] - Exhaustive privacy-focused materials
- [[Research Sources Index]] - Academic and professional references

### Integration Strategy
- **Learning Path**: [[MOC]] → guided exploration → [[Index]] → comprehensive reference
- **Reference Support**: [[Index]] → quick lookup → [[MOC]] → contextual understanding
- **Research Process**: [[Index]] → source discovery → [[MOC]] → synthesis and application
```

---

## Maintenance and Evolution

### Regular Index Maintenance

**Monthly Review**: Validate all links and update item descriptions  
**Coverage Audit**: Ensure comprehensive inclusion of relevant vault content  
**Category Assessment**: Evaluate organizational structure effectiveness  
**Cross-Reference Validation**: Verify MOC and Index connections remain functional

### Evolution Patterns

**Growth Management**: Add new items systematically as content develops  
**Reorganization**: Adjust categories as content volume and focus shifts  
**Specialization**: Split comprehensive indexes into focused sub-indexes when needed  
**Integration**: Merge related indexes when scope overlap becomes inefficient

### Quality Indicators

- **Findability**: Users locate specific items quickly and reliably
- **Completeness**: Comprehensive coverage without significant gaps
- **Currency**: Content reflects current vault state accurately
- **Usability**: Navigation supports both browsing and targeted lookup

---

## Common Index Challenges

### Scope Management

**Problem**: Index becomes too broad or loses focus  
**Solution**: Define clear inclusion criteria and scope boundaries  
**Prevention**: Regular review of purpose statement and content relevance

### Maintenance Overhead

**Problem**: Index becomes outdated or unwieldy to maintain  
**Solution**: Establish sustainable review cycles and focus on high-value content  
**Strategy**: Prioritize stable, frequently-referenced materials

### Structure Confusion

**Problem**: Index attempts to serve MOC narrative functions  
**Solution**: Maintain flat, reference-focused organization  
**Clarity**: Link strategically to MOCs for thematic exploration needs

---

## Quality Assurance Checklist

### YAML Compliance

- [ ]  Title format is "[Topic] Index"
- [ ]  Status is `🌲_evergreen` (no quotes)
- [ ]  Tags include `index` and use `lowercase-with-dashes` format
- [ ]  Categories field is `- Index`
- [ ]  Related links use proper `[[]]` linking format
- [ ]  Publishing set to `dg-publish: false` (unless specifically external)

### Content Standards

- [ ]  Comprehensive coverage of topic area without significant gaps
- [ ]  Logical categorical organization with intuitive groupings
- [ ]  Consistent entry descriptions following format standards
- [ ]  Complexity indicators (🔹🔸) applied strategically for user guidance
- [ ]  Cross-references to related MOCs and Indexes included appropriately
- [ ]  Usage instructions clear and actionable

### Reference Verification

- [ ]  All links functional and current
- [ ]  Alphabetical organization complete and accurate
- [ ]  Category boundaries clear and non-overlapping
- [ ]  Cross-references enhance rather than overwhelm navigation

---

## Template Usage Guidelines

### Index Creation Process

1. **Use [[04 META/Templates/Index Template\|Index Template]]** for consistent structural foundation
2. **Define scope boundaries** - clear inclusion/exclusion criteria
3. **Organize by logical categories** - intuitive groupings for user navigation
4. **Implement alphabetical structure** - comprehensive A-Z systematic coverage
5. **Apply complexity indicators** - strategic 🔹/🔸 guidance for accessibility
6. **Establish cross-references** - meaningful connections to MOCs and related Indexes

### Customization Parameters

- **Adapt categories** for specific topic domain requirements
- **Maintain standard sections** while customizing organizational approach
- **Follow YAML standards** exactly as specified for vault consistency
- **Preserve complexity indicators** for user guidance continuity

---

## Related Documentation

### Core References

- [[04 META/📋 Guides/Vault - Directory Style Guide Overview\|Vault - Directory Style Guide Overview]] - Master reference for complete system
- [[04 META/📋 Guides/MOC Style Guide\|MOC Style Guide]] - Complementary thematic navigation tool standards
- [[04 META/Templates/Index Template\|Index Template]] - Automated creation tool for new Indexes
- [[04 META/🛠️ System/Quality Guardian Procedures\|Quality Guardian Procedures]] - Systematic monitoring and quality processes
- [[04 META/🛠️ System/Vault Quality Standards\|Vault Quality Standards]] - Overall vault quality framework

### Navigation

← [[04 META/📋 Guides/MOC Style Guide\|MOC Style Guide]] | ↑ [[04 META/📋 Guides/Vault - Directory Style Guide Overview\|Vault - Directory Style Guide Overview]] | → [[04 META/Templates/Index Template\|Index Template]]

---

**Usage**: Reference for all Index creation, organization, and maintenance  
**Authority**: Mandatory compliance required for all Index reference tools  
**Current Examples**: Privacy Tools Index, AI Research Index, Digital Literacy Resources Index

> Indexes serve as the vault's reference library, providing comprehensive coverage and systematic lookup functionality. Use this guide to create and maintain effective reference tools that support and complement the thematic exploration provided by MOCs.