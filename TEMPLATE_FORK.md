# Digital Garden template fork

This repository uses the upstream Digital Garden template while keeping a
small, intentional presentation fork for Digitally Literate.

## User-owned extension surface

Keep site-specific work in the extension points that upstream does not replace:

- `src/site/_includes/components/user/` for injected markup and scripts
- `src/site/styles/user/` for design tokens and site styling
- `src/site/img/fonts/` for self-hosted type assets
- `src/helpers/userSetup.js` and `src/helpers/userUtils.js` for collections,
  filters, and computed data

The Digital Garden plugin's template-update indicator compares file hashes. It
will continue to report an update whenever an intentional fork file differs
from upstream, even when the current template release has already been merged.

## Intentional upstream-file differences

Only these template-owned files should differ from Digital Garden 1.83.7:

- `src/site/_includes/layouts/index.njk` adds the `dl-home` body hook.
- `src/site/_includes/layouts/note.njk` adds the `dl-note` body hook.
- `src/site/_includes/components/navbar.njk` provides the branded masthead,
  publication links, search control, and theme control.
- `package.json` adds one `scripts` entry, `validate`, for the note validator.
  This one is convenience only: CI invokes `node scripts/validate-notes.mjs`
  directly, so an update that drops the script costs a local shortcut and
  nothing else. Re-add it when convenient; it is not release-blocking.

The two body hooks remain because they provide a clear, stable page contract.
Replacing them with DOM-dependent selectors or client-side class injection
would reduce the diff count while making rendering more fragile.

## Template-update procedure

1. Let the plugin create its update pull request; do not merge it directly.
2. Compare the three intentional fork files above against the proposed update.
3. Restore or adapt the body hooks and masthead on the update branch.
4. Run the production build and CI checks.
5. Review the Netlify preview at desktop and mobile widths on the homepage and
   at least one newsletter note.
6. Merge only after the preview is approved.

Do not reintroduce custom replacements for `search-index.njk` or `sitemap.njk`.
The upstream generators build successfully at the current collection size and
produce the same search-entry and sitemap URL counts as the retired JavaScript
templates.
