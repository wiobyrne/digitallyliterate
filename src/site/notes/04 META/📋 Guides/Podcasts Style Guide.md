---
{"dg-publish":true,"permalink":"/04-meta/guides/podcasts-style-guide/","title":"Podcasts Style Guide","tags":["vault-management","podcasts-directory","style-guide","yaml-standards","knowledge-development"],"created":"2025-07-27","updated":"2025-07-29"}
---


# Podcasts Style Guide

## Overview

Podcasts represent **captured episode content with enhanced knowledge development connections** in the vault system. The Podcasts directory prioritizes **systematic YAML standardization and meaningful cross-vault integration** to maximize discoverability and knowledge network growth.

**Philosophy**: Minimal YAML + Knowledge Development + Hard Link Integrity  
**See Also**: [[04 META/📋 Guides/Vault - Directory Style Guide Overview\|Vault - Directory Style Guide Overview]] for system context

## Finalized YAML Template

Podcasts use a **minimal, standardized template** optimized for consistency and knowledge integration:

```yaml
---
title: "Episode Title"
created: YYYY-MM-DD
last_updated: YYYY-MM-DD
status: 🌿_plant
tags:
  - podcasts
  - domain-tag-1
  - domain-tag-2
  - expertise-area
author: "[[Host Name]]"
source: "URL or source reference"
connections:
  - "[[Host Name]]"
  - "[[Guest Name]]"
  - "[[Show Name]]"
  - "[[Key Concept 1]]"
  - "[[Key Concept 2]]"
categories: Podcasts
dg-publish: true
shelf: archived
show: "[[Show Name]]"
host: "[[Host Name]]"
guest: ["[[Guest Name]]"]
show_notes_url: "URL"
---
```

## Required Fields (Universal)

### **Essential Fields** (Always Required)
- **title**: Episode title in quotes
- **created**: Episode date or file creation date (YYYY-MM-DD)
- **last_updated**: Last modification date (standardization date)
- **status**: Always `🌿_plant` (string format, not array)
- **author**: Host name linked to People directory
- **source**: Show notes URL or platform reference

### **Organizational Fields** (Required)
- **tags**: Domain-specific tags beyond "podcasts" (3-6 tags)
- **connections**: All related notes as hard links (4-8 links)
- **categories**: Always `Podcasts`
- **dg-publish**: Always `true` for digital garden integration
- **shelf**: Always `archived` for completed episodes

### **Podcast-Specific Fields** (Required)
- **show**: Show name linked to show page
- **host**: Host name linked to People directory
- **guest**: Guest names as array of links (if applicable)
- **show_notes_url**: Original episode URL

## YAML Standards (Critical - Non-Negotiable)

### **Status Format** (Finalized Decision)
- ✅ **CORRECT**: `status: 🌿_plant`
- ❌ **WRONG**: `status: [🌿_plant]`, `status: "🌿_plant"`, any array format

### **Tag Guidelines** (Minimal Design)
- **Quantity**: 3-6 tags total (including "podcasts")
- **Format**: `lowercase-with-dashes` format only
- **Content**: Domain-specific beyond basic "podcasts"
- **Examples**: `productivity`, `deep-work`, `digital-minimalism`, `creativity`, `leadership`

### **Field Naming** (Standardized)
- ✅ **CORRECT**: `show_notes_url`, `last_updated`
- ❌ **WRONG**: `URL`, `show_notes_link`, `updated`

### **People Attribution** (Minimal Approach)
- **Primary**: `author` field for host (links to People directory)
- **Additional**: `host` and `guest` fields for podcast-specific tracking
- **Rationale**: Maintains consistency with vault-wide person attribution system

## Knowledge Development Section (Mandatory)

### **Required Structure**
All podcast notes MUST include the Knowledge Development section with this exact format:

```markdown
## 🧠 Knowledge Development Connections

[Brief description of episode themes and their relevance to vault knowledge network]

### Related Notes

The themes in this episode connect to several key areas in the vault:

- **[[Host Name]]** - [Host background and expertise area]
- **[[Guest Name]]** - [Guest background and expertise area]
- **[[Show Name]]** - [Show context and typical content]
- **[[Key Concept 1]]** - [How this concept appears in the episode]
- **[[Key Concept 2]]** - [Connection to existing or potential vault content]

### Potential Development Areas

The conversation suggests several concepts worth developing:
- [Specific actionable concept for future Seeds/Plants]
- [Cross-domain connection opportunity]
- [Framework or methodology mentioned]
```

### **Hard Link Requirements** (Critical)
- **ALL** entries in `connections` YAML field MUST appear as `[[links]]` in the note body
- **Verification**: Every connection link must be findable in the Knowledge Development section
- **Purpose**: Ensures Obsidian graph integration and bidirectional linking
- **Quality Check**: Part of standardization validation process

## Content Development Guidelines

### **Minimal Design Principles**
Following the finalized minimal YAML approach:
- **No Complex Fields**: Rejected `connects_to_plants`, `confidence_level`, etc.
- **Essential Only**: Focus on fields that add genuine value
- **Cross-Reference Focus**: Emphasis on meaningful connections over comprehensive metadata
- **Ghost Page Strategy**: Create wikilinks for genuine development opportunities only

### **Domain-Specific Tagging**
Beyond basic "podcasts" tag, include relevant domains:

**Productivity/Habits**: `productivity`, `habits`, `systems`, `time-management`
**Creativity/Content**: `creativity`, `writing`, `blogging`, `storytelling`
**Technology**: `ai`, `digital-literacy`, `tech-ethics`, `cybersecurity`
**Leadership/Business**: `leadership`, `entrepreneurship`, `management`, `culture`
**Philosophy/Psychology**: `philosophy`, `psychology`, `decision-making`, `ethics`
**Personal Development**: `personal-growth`, `self-reflection`, `mindfulness`

### **Ghost Page Development**
Create meaningful wikilinks for concepts that could become future Seeds/Plants:
- **Cross-Episode Themes**: Concepts appearing in multiple episodes
- **Framework Opportunities**: Systematic approaches worth developing
- **Authority Connections**: Expert perspectives worth consolidating
- **Avoid**: One-off mentions or overly specific topics

## Show and People Integration

### **Show Pages** (Linked via `show` field)
- Create or link to show-specific pages for recurring podcasts
- Examples: `[[The Tim Ferriss Show]]`, `[[The Good Fight]]`, `[[Decoder with Nilay Patel]]`
- Show pages track episode collections and provide context

### **People Directory Integration** (via `author` and `guest` fields)
- **Host Attribution**: Always link host via `author` field to People directory
- **Guest Tracking**: Link guests to People directory when applicable
- **Cross-Episode Patterns**: Track expert appearances across different shows
- **Authority Building**: Connect guests to their key concepts and frameworks

## Quality Standards and Validation

### **Standardization Compliance Checklist**
- [ ] YAML structure matches minimal template exactly
- [ ] Status format is string (`🌿_plant`), not array
- [ ] All essential fields present and correctly formatted
- [ ] Tags include domain-specific categories beyond "podcasts"
- [ ] People attribution via `author` field linking to People directory
- [ ] Knowledge Development section present with required structure
- [ ] All `connections` entries appear as hard links in body text
- [ ] Ghost page links represent genuine development opportunities

### **Processing Efficiency Standards**
Based on 19-episode standardization (27% complete):
- **Target Time**: 7-10 minutes per episode for complete standardization
- **Template Reuse**: Leverage patterns from completed examples
- **Domain Clustering**: Process similar topics together for efficiency
- **Quality Consistency**: Maintain professional standards throughout

## Examples and Patterns

### **Completed Reference Examples**
Use these 19 standardized episodes as templates:

**Productivity Cluster**:
- Cal Newport on Intentional Productivity and Self-awareness
- James Clear on Atomic Habits
- Greg McKeown on Essentialism + Finding Your Purpose
- Adam Grant on Productivity and Personal motivation

**Creative Cluster**:
- Seth Godin on Blogging and Creative Resistance
- Rick Rubin on Unlocking Creativity
- Mark Manson on Success and Writing
- Steven Pressfield on Continuous Creativity

**Philosophy/Psychology Cluster**:
- Derek Sivers on an Un-Optimized Life
- Jonathan Haidt (2 episodes on public discourse and adolescent development)

**Technology/Leadership Cluster**:
- Barack Obama on AI, Free Speech, and the Future of the Internet
- Matt Mullenweg trilogy (3 episodes on sabbaticals, AI, and personal growth)
- Reed Hastings on Radical Candor

### **Cross-Show Processing**
Different show formats successfully standardized:
- **The Tim Ferriss Show**: 16 episodes (most common format)
- **The Good Fight**: Political discourse focus
- **Decoder with Nilay Patel**: Technology policy focus

## Template Usage and Automation

### **Updated Template** (Aligned with Standardization)
The Podcast Episode Template has been updated to reflect all decisions from the 19-episode standardization:
- Finalized YAML structure with minimal approach
- Built-in Knowledge Development section
- Placeholder guidance for domain-specific tags
- Hard link requirement integration

### **Templater Integration**
For automated podcast note creation:
- Dynamic timestamp generation for `created` and `last_updated`
- Automated YAML structure with placeholders
- Knowledge Development section framework pre-built
- Cross-reference pattern integration

## Maintenance and System Integration

### **Quality Guardian Integration**
- **YAML Validation**: Daily monitoring for template compliance
- **Hard Link Verification**: Ensure all connections appear in body text
- **Cross-Reference Integrity**: Validate bidirectional linking
- **Ghost Page Tracking**: Monitor development opportunities and promotion

### **Knowledge Network Development**
- **Promotion Pathways**: Ghost page concepts → Seeds → Plants → Evergreens
- **Cross-Domain Connections**: Link episodes across different knowledge areas
- **Authority Development**: Track expert insights and framework building
- **Concept Consolidation**: Identify themes appearing across multiple episodes

### **Ongoing Processing Strategy**
With 19 episodes complete (27%) and ~51 remaining:
- **Batch Processing**: Group by show or domain for efficiency
- **Author Completion**: Finish multi-episode guests (complete trilogies/pairs)
- **Template Reuse**: Leverage established patterns for consistency
- **Quality Validation**: Maintain professional standards achieved

## Related Notes

- [[04 META/📋 Guides/Vault - Directory Style Guide Overview\|Vault - Directory Style Guide Overview]] - Master reference for complete system
- [[04 META/📈 Tracking/Podcasts Directory Changes\|Podcasts Directory Changes]] - Detailed tracking of standardization progress
- [[04 META/🛠️ System/Quality Guardian Procedures\|Quality Guardian Procedures]] - Systematic monitoring and quality processes
- [[04 META/🛠️ System/Template Documentation\|Template Documentation]] - Automated creation tools for podcasts
- [[04 META/🛠️ System/Vault Quality Standards\|Vault Quality Standards]] - Overall vault quality framework

---

**Quick Navigation**: 
← [[04 META/📋 Guides/Vault - Directory Style Guide Overview\|Vault - Directory Style Guide Overview]] | → [[04 META/📈 Tracking/Podcasts Directory Changes\|Podcasts Directory Changes]]

**Usage**: Reference for all Podcasts directory standardization and maintenance  
**Authority**: Official standards for podcast content and organization  
**Status**: Project completed July 29, 2025 - 100% of accessible episodes standardized

## Final Project Completion (July 29, 2025)

**🎉 COMPLETE SUCCESS**: All accessible podcast episodes systematically standardized

### **Achievement Summary**
- **100% Processing**: All accessible episodes completed with proven methodology
- **Final Episode**: Tom Friedman Thinks We're Getting China Dangerously Wrong
- **Quality Standard**: Zero content loss with professional formatting achieved
- **Knowledge Integration**: Complete cross-vault connection system established
- **Template Validation**: Minimal YAML approach proven across all content types

### **Comprehensive Processing Results**
- **Total Sessions**: 9 processing sessions (July 27-29, 2025)
- **Methodology**: Proven 3-step workflow (YAML → Content → Validation)
- **Processing Efficiency**: 8-10 minutes per episode average maintained
- **Content Preservation**: 100% - All snips, images, highlights, notes intact
- **Cross-Platform Success**: Methodology effective across all podcast formats

### **System Transformation Achieved**
- **Professional Publishing**: All episodes ready for digital garden (`dg-publish: true`)
- **Knowledge Network**: Episodes function as integrated knowledge nodes
- **Cross-Vault Integration**: Meaningful connections to People, Plants, Evergreens
- **Sustainable System**: Documented methodology for future episodes

**Project Status**: Successfully completed with methodology documented for ongoing use

> Podcasts prioritize minimal YAML design with meaningful knowledge development connections. Use this guide with completed examples to maintain consistent, high-quality episode processing that enhances the entire vault's knowledge network.
