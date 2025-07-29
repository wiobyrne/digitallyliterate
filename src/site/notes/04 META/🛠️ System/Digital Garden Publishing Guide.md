---
{"dg-publish":true,"permalink":"/04-meta/system/digital-garden-publishing-guide/","title":"Digital Garden Publishing Guide","tags":["meta","publishing","digital-garden","workflow"]}
---


# Digital Garden Publishing Guide

## Overview

This guide covers the complete workflow for publishing content from your Obsidian vault to your digital garden at [digitallyliterate.netlify.app](https://digitallyliterate.netlify.app/).

## 🔧 Technical Setup

### Repository Configuration
- **GitHub Repository**: `wiobyrne/digitallyliterate`
- **Platform**: GitHub → Netlify
- **Theme**: Things 3 (Dark)
- **Favicon**: `04 META/Assets/favicon.svg`

### Plugin Settings
- **Site Name**: "Digitally Literate"
- **Main Language**: English
- **Slugify**: Enabled
- **Base Theme**: Dark

## 📝 Publishing Workflow

### Step 1: Prepare Your Note
1. **Complete Content**: Ensure the note is well-written and valuable
2. **Check Links**: Verify all internal links work properly
3. **Review Quality**: Meet the publishing criteria below
4. **Add Metadata**: Include complete YAML frontmatter

### Step 2: Required YAML Frontmatter
```yaml
---
title: "Note Title"
categories: [category]
tags:
  - tag1
  - tag2
date: YYYY-MM-DD
description: "Brief description of the note"
dg-publish: true
---
```

### Step 3: Publish Process
1. **Add Publishing Flag**: Set `dg-publish: true` in YAML
2. **Use Plugin**: Digital Garden plugin automatically detects published notes
3. **Push to GitHub**: Plugin creates PR to repository
4. **Auto-Deploy**: Netlify automatically deploys changes

### Step 4: Verification
1. **Check GitHub**: Verify PR was created successfully
2. **Check Netlify**: Confirm deployment completed
3. **Test Live Site**: Verify content appears correctly

## ✅ Publishing Criteria

### Quality Standards
- **Clarity**: Well-written, clear, and easy to understand
- **Value**: Provides useful insights or information
- **Completeness**: Fully developed idea or concept
- **Accuracy**: Fact-checked and properly attributed

### Content Guidelines
- **Relevance**: Aligns with digital literacy, education, or knowledge work
- **Originality**: Original thoughts or proper attribution of sources
- **Links**: Internal links work; external links are current
- **Formatting**: Proper markdown formatting and structure

### Technical Requirements
- **YAML**: Complete frontmatter with all required fields
- **Images**: Optimized and properly referenced
- **File Size**: Reasonable size for web loading
- **Accessibility**: Proper headers, alt text, and structure

## 🎯 Content Strategy

### What to Publish
- **🌲 Evergreen Notes**: Mature, well-developed insights
- **Educational Content**: Tutorials, guides, and explanations
- **Research Insights**: Findings and analysis from papers/books
- **Practical Guides**: How-to content and workflows
- **Thought Leadership**: Original perspectives on digital literacy

### What NOT to Publish
- **🌱 Seeds**: Raw, undeveloped ideas
- **Personal Information**: Private thoughts or sensitive data
- **Incomplete Work**: Draft content or work-in-progress
- **Copyrighted Material**: Content that violates copyright
- **Low-Quality Content**: Rushed or unrefined material

## 🔍 SEO & Discoverability

### Metadata Best Practices
- **Title**: Clear, descriptive, and keyword-rich
- **Description**: Compelling summary under 160 characters
- **Tags**: Relevant, specific, and searchable
- **Categories**: Broad topical groupings

### Content Optimization
- **Headers**: Use proper H1, H2, H3 structure
- **Keywords**: Natural inclusion of relevant terms
- **Internal Links**: Connect related concepts
- **External Links**: Reference authoritative sources

## 📊 Analytics & Tracking

### Performance Monitoring
- **Netlify Analytics**: Track page views and performance
- **GitHub Insights**: Monitor repository activity
- **Site Health**: Check for broken links and errors

### Content Performance
- **Popular Pages**: Identify most-visited content
- **Engagement**: Monitor time on page and bounce rate
- **Growth**: Track publishing frequency and consistency

## 🚨 Troubleshooting

### Common Issues
- **Publishing Fails**: Check GitHub token and repository permissions
- **Broken Links**: Verify all internal links use correct syntax
- **Styling Issues**: Check theme compatibility and custom CSS
- **Deployment Errors**: Review Netlify build logs

### Emergency Procedures
- **Unpublish Content**: Set `dg-publish: false` and redeploy
- **Rollback**: Use GitHub to revert to previous version
- **Contact Support**: Netlify and GitHub support channels

## 🔄 Maintenance

### Regular Tasks
- **Weekly**: Review published content for accuracy
- **Monthly**: Check for broken links and update outdated information
- **Quarterly**: Analyze performance and optimize popular content

### Content Updates
- **Evergreen Maintenance**: Keep timeless content current
- **Link Checking**: Ensure all external links still work
- **SEO Updates**: Refresh metadata and keywords as needed

## 📋 Publishing Checklist

### Pre-Publishing
- [ ] Content meets quality standards
- [ ] All links verified and working
- [ ] YAML frontmatter complete
- [ ] Images optimized and accessible
- [ ] SEO metadata included

### Publishing
- [ ] `dg-publish: true` added to YAML
- [ ] Digital Garden plugin run successfully
- [ ] GitHub PR created
- [ ] Netlify deployment completed

### Post-Publishing
- [ ] Live site tested and verified
- [ ] Content appears correctly
- [ ] Links function properly
- [ ] Performance metrics baseline set

---

**Last Updated**: 2025-01-03  
**Version**: 1.0  
**Maintainer**: Ian O'Byrne

> This guide is updated as the publishing process evolves. All changes are tracked in the [[04 META/🛠️ System/Changelog\|Changelog]].