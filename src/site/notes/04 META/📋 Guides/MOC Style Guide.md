---
{"dg-publish":true,"permalink":"/04-meta/guides/moc-style-guide/","title":"MOC Style Guide","tags":["vault-management","mocs","style-guide","yaml-standards","navigation-tools"],"created":"2025-07-16","updated":"2025-07-18"}
---


# MOC Style Guide

## Overview

MOCs serve as **thematic navigation tools and learning dashboards** that guide users through knowledge domains. They prioritize **conceptual exploration, progressive learning, and contextual understanding** over comprehensive reference coverage, functioning as the vault's guided tour system.

**Philosophy**: Thematic exploration, guided learning, contextual navigation  
**Purpose**: Like a dashboard or trailhead  
**Structure**: Curated, thematic, hierarchical, and flexible  
**Use Case**: Exploration, orientation, and progressive learning  

*This guide establishes standards for creating and maintaining exploration-focused navigation tools within the vault ecosystem.*

## Mandatory YAML Template

All MOC files **MUST** use this exact YAML structure:

```yaml
---
title: [Topic] MOC
created: YYYY-MM-DD
last_updated: YYYY-MM-DD
status: 🌲_evergreen
tags:
  - moc
  - [topic-tag]
  - [domain-tag]
dg-publish: true
categories:
  - MOC
related:
  - "[[Related MOC]]"
  - "[[Topic Index]]"
aliases:
  - [Alternative Names]
shelf: active
---
```

## Critical Format Requirements

### **1. Status Field** (MANDATORY)
- ✅ **CORRECT**: `status: 🌲_evergreen` (MOCs are stable navigation tools)
- ❌ **WRONG**: `status: \"🌲_evergreen\"`, `status: moc`, `status: [\"🌲_evergreen\"]`

### **2. Title Conventions** (MANDATORY)
- ✅ **CORRECT**: \"[Topic] MOC\" (e.g., \"Digital Resilience MOC\")
- ❌ **WRONG**: \"[Topic] Index\", \"[Topic] Hub\", \"[Topic] Guide\"
- **Consistency**: Title format must clearly indicate MOC purpose

### **3. Tag Requirements** (MANDATORY)
- ✅ **CORRECT**: `lowercase-with-dashes` format
- **Required**: `moc` tag + topic-specific tags + domain tags
- **Quantity**: 4-8 relevant tags maximum

### **4. Publishing Strategy** (RECOMMENDED)
- **Default**: `dg-publish: true` (external navigation tool)
- **Rationale**: MOCs serve as entry points for digital garden exploration

## When to Use a MOC

### **🗺️ Choose MOC Format When:**
- You're exploring a **thematic knowledge domain**
- You need **guided learning paths** with progressive skill development
- Content requires **contextual understanding** and conceptual exploration
- You're creating **entry points** for digital garden visitors
- You want to **synthesize diverse perspectives** on interconnected topics
- Purpose is **knowledge navigation** rather than comprehensive reference

### **Ideal MOC Use Cases:**
- **Knowledge Domains**: Comprehensive exploration of subject areas
- **Learning Progressions**: Foundation → Development → Mastery paths
- **Project Frameworks**: Organizing complex, multi-faceted work
- **Conceptual Networks**: Exploring interconnected ideas and themes
- **Digital Garden Entry Points**: Public-facing navigation for external users
- **Synthesis Spaces**: Bringing together diverse perspectives on topics
### MOC vs Index Decision Matrix:

|**Use MOC When**|**Use Index When**|
|---|---|
|Thematic exploration needed|Comprehensive reference required|
|Learning path important|Alphabetical lookup preferred|
|Conceptual relationships key|Complete coverage essential|
|Progressive skill development|Quick fact retrieval needed|
|Synthesis and interpretation|Cataloging and organization|

---

## Standard MOC Structure
### Essential Elements

All MOCs must include these core components:

**Foundation Section**: Understanding the domain and core principles  
**Learning Paths**: Progressive skill/knowledge development structure  
**Practical Navigation**: Need-based entry points and use cases  
**Essential Resources**: Curated tools and content recommendations  
**Knowledge Network**: Connections to related domains and concepts  
**Maintenance Framework**: Update guidance and evolution strategy

### Template Structure

markdown

```markdown
# [Topic] MOC

> Brief philosophical statement that captures the essence and approach of this domain

## Understanding this MOC 🧭
Explanation of visual markers and navigation system:

- **🔹 Beginner-friendly. Strongly recommended.**
- **🔸 Advanced/Optional** - Deeper dives for specific interests
- **🧭 Trailhead:** Introductory concepts and foundations
- **🪜 Learning Path:** Progressive development stages  
- **📘 Core Reference:** Essential resources and definitions
- **🧩 Conceptual Link:** Connections between ideas
- **🛠️ Tool/Resource:** Practical applications and tools

---

## 🌱 Foundation Layer
Essential starting points and core concepts

- [[Core Concept 1]] 🔹🪜
- [[Core Concept 2]] 🔹🪜
- [[Key Framework]] 🔹📘

---

## 🌿 Development Layer  
Building competence and deeper understanding

- [[Advanced Framework 1]] 🔸🪜
- [[Advanced Framework 2]] 🔸🪜
- [[Practical Methods]] 🔹🛠️

---

## 🌲 Mastery Layer
Advanced integration and sophisticated applications

- [[Expert Knowledge]] 🔸📘
- [[Complex Applications]] 🔸🛠️
- [[Innovation Opportunities]] 🔸🧩

---

## 🛠️ Essential Tools & Resources

### Tier 1: Essential (Everyone)
- [[Tool 1]] 🔹🛠️ - Brief description
- [[Method 1]] 🔹🪜 - Brief description

### Tier 2: Enhanced (Intermediate)  
- [[Advanced Tool]] 🔸🛠️ - Brief description
- [[Specialized Method]] 🔸🪜 - Brief description

### Tier 3: Expert (Specialized)
- [[Expert Tool]] 🔸🛠️ - Brief description
- [[Research Method]] 🔸📘 - Brief description

---

## 🔗 Related MOCs and Indexes
Connections to other knowledge domains

- [[Related MOC 1]] - Adjacent knowledge area
- [[Related MOC 2]] - Complementary concepts  
- [[Comprehensive Index]] - Complete reference catalog
- [[Specialized Index]] - Detailed lookup resource
```

---

## Content Quality Standards

### MOC Quality Requirements

- **Coherent Philosophy**: Clear perspective guiding the entire domain
- **Progressive Structure**: Logical learning path from basics to advanced
- **Practical Application**: Real-world relevance and implementation guidance
- **Rich Connections**: Meaningful relationships to other vault concepts
- **Sustainable Maintenance**: Realistic update and evolution process
- **Thematic Coherence**: All elements connect to central purpose

### Navigation Design Standards

- **Multiple Entry Points**: Users enter at appropriate skill/need level
- **Clear Progression**: Logical flow from foundation to mastery
- **Contextual Guidance**: Visual markers help users navigate effectively
- **Curated Selection**: Quality over quantity in resource recommendations
- **Living Evolution**: Regular updates and continuous improvement

---

## Visual Marker System

### Standard Markers (MANDATORY)

Use these exact markers consistently across all MOCs:

**Skill Level Indicators:**

- `🔹` Beginner-friendly, strongly recommended
- `🔸` Advanced/Optional, for specific interests or deeper exploration

**Content Type Markers:**

- `🧭` Trailhead/Orientation - Introductory concepts and foundations
- `🪜` Learning Path Step - Progressive development stages
- `📘` Core Reference - Essential resources, definitions, in-depth explanations
- `🧩` Conceptual Link - Connections between different ideas and technologies
- `🛠️` Tool/Resource - Practical tools, software, services, methods

### Marker Usage Guidelines

- **Every link should have appropriate markers** for user guidance
- **Combine markers logically**: `🔹🪜` (beginner learning step), `🔸🛠️` (advanced tool)
- **Maintain consistency** across related MOCs for user familiarity
- **Use markers strategically** to create clear learning pathways

---

## MOC vs Index Integration

### Complementary Relationship

**MOCs contextualize Indexes**: Provide thematic exploration of reference materials  
**Indexes support MOCs**: Offer comprehensive listings for detailed lookup  
**Strategic cross-referencing**: Link to related Indexes for complete coverage

### Standard Cross-Reference Pattern

markdown

```markdown
## 🔗 Related MOCs and Indexes

### Thematic Exploration
- [[Digital Privacy MOC]] - Guided learning path for privacy concepts
- [[AI Ethics MOC]] - Ethical frameworks and considerations

### Comprehensive References  
- [[Privacy Tools Index]] - Complete catalog of privacy tools and methods
- [[AI Research Index]] - Alphabetical listing of AI concepts and papers
```

---

## Digital Garden Optimization

### MOCs as Public Entry Points

Since MOCs often use `dg-publish: true`, they should serve as:

**Reader Entry Points**: Clear, welcoming navigation for external users  
**Thematic Essays**: Synthesis that goes beyond simple listing  
**Structured Portals**: Guided pathways into complex knowledge domains  
**Learning Frameworks**: Progressive skill development for visitors

### Public-Facing Standards

- **Accessible Language**: Clear explanations for diverse audiences
- **Progressive Disclosure**: Information layered for different skill levels
- **Contextual Guidance**: Help users understand navigation and next steps
- **Current Information**: Regular updates and functional links

---

## Maintenance and Evolution

### Regular MOC Maintenance

**Monthly Review**: Update learning paths and resource recommendations  
**Content Audit**: Ensure philosophy and structure remain coherent  
**Link Validation**: Verify all connections and references function properly  
**User Feedback**: Incorporate insights from digital garden visitors

### Evolution Patterns

**Expansion**: Add new learning layers as knowledge develops  
**Refinement**: Improve navigation and resource curation  
**Specialization**: Create focused sub-MOCs for complex domains  
**Integration**: Strengthen connections to other knowledge areas

### Quality Indicators

- **Clarity**: Clear learning path and logical progression
- **Engagement**: Users successfully follow guided exploration
- **Practicality**: Real-world application and implementation success
- **Evolution**: Content grows and improves over time

---

## Common MOC Challenges

### Scope Overwhelm

**Problem**: MOC tries to cover too much ground  
**Solution**: Focus on essential progression and clear boundaries  
**Strategy**: Link to related MOCs rather than expanding infinitely

### Maintenance Complexity

**Problem**: MOC becomes difficult to keep current  
**Solution**: Establish realistic update cycles, focus on high-impact changes  
**Approach**: Prioritize core navigation over comprehensive coverage

### Navigation Confusion

**Problem**: Users get lost in complex MOC structure  
**Solution**: Maintain clear learning progression and multiple entry points  
**Clarity**: Regular testing and refinement of navigation paths

---

## Quality Assurance Checklist

### YAML Compliance

- [ ]  Title format is "[Topic] MOC"
- [ ]  Status is `🌲_evergreen` (no quotes)
- [ ]  Tags include `moc` and use `lowercase-with-dashes` format
- [ ]  Categories field is `- MOC`
- [ ]  Related links use proper `[[]]` linking format
- [ ]  Publishing set to `dg-publish: true` (unless specifically internal)

### Content Standards

- [ ]  Core philosophy/overview is clear and coherent
- [ ]  Learning path progression makes logical sense
- [ ]  Visual markers (🔹🔸🧭🪜📘🧩🛠️) used consistently
- [ ]  Essential resources are curated, not exhaustive
- [ ]  Cross-references to related MOCs and Indexes included
- [ ]  Maintenance approach is realistic and sustainable

### Navigation Verification

- [ ]  Multiple entry points available for different user needs
- [ ]  Clear progression from foundation to mastery
- [ ]  Contextual guidance helps users navigate effectively
- [ ]  Cross-references enhance rather than overwhelm

---

## Template Usage Guidelines

### MOC Creation Process

1. **Use [[🗺️ MOC Template\|🗺️ MOC Template]]** for consistent structure
2. **Define core philosophy** - establish guiding principles and approach
3. **Structure learning progression** - create logical foundation to mastery path
4. **Apply visual markers** - guide users through content appropriately
5. **Curate essential resources** - quality over quantity in recommendations
6. **Plan maintenance approach** - sustainable update and evolution process

### Customization Parameters

- **Adapt learning paths** for specific domain needs
- **Maintain standard philosophy** while customizing content
- **Follow YAML standards** exactly as specified
- **Preserve visual marker consistency** across related MOCs

---

## Related Documentation

### Core References

- [[04 META/📋 Guides/Vault - Directory Style Guide Overview\|Vault - Directory Style Guide Overview]] - Master reference for complete system
- [[04 META/📋 Guides/Index Style Guide\|Index Style Guide]] - Complementary reference tool standards
- [[🗺️ MOC Template\|🗺️ MOC Template]] - Automated creation tool for new MOCs
- [[04 META/🛠️ System/Quality Guardian Procedures\|Quality Guardian Procedures]] - Systematic monitoring and quality processes
- [[04 META/🛠️ System/Vault Quality Standards\|Vault Quality Standards]] - Overall vault quality framework

### Navigation

← [[04 META/📋 Guides/Index Style Guide\|Index Style Guide]] | ↑ [[04 META/📋 Guides/Vault - Directory Style Guide Overview\|Vault - Directory Style Guide Overview]] | → [[🗺️ MOC Template\|🗺️ MOC Template]]

---

**Usage**: Reference for all MOC creation, organization, and maintenance  
**Authority**: Mandatory compliance required for all MOC navigation tools  
**Current Examples**: Digital Resilience MOC, AI and Digital Resilience Index

> MOCs serve as the vault's guided tour system, providing thematic exploration and progressive learning paths. Use this guide to create and maintain effective navigation tools that complement comprehensive Index coverage while serving as entry points for digital garden exploration.