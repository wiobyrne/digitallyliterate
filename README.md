# Digitally Literate

This repository is the production source for
[digitallyliterate.net](https://digitallyliterate.net), Ian O'Byrne's public
digital garden.

Published notes originate in the Obsidian vault and are sent here by the
[Digital Garden plugin](https://github.com/oleeskild/Obsidian-Digital-Garden).
Eleventy builds the site and Netlify deploys the `main` branch.

## Build locally

Requires Node.js 22.

```sh
npm ci
npm run build
```

The generated site is written to `dist/`.

## Repository boundaries

- `src/site/notes/` contains plugin-published copies; the Obsidian vault remains
  the canonical authored source.
- Site templates, helpers, styles, and deployment configuration are maintained
  in this repository.
- Site-code changes should use a feature branch and pull request. Netlify deploy
  previews are used for review before merging to `main`.
- Digital Garden template-update pull requests require manual review because
  upstream updates can overlap site-specific files.

Production hosting is Netlify. Vercel is not part of the deployment pipeline.
