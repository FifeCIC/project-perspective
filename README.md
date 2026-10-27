# Perspectives — prototype preview

Static prototype of the Perspectives website, hosted temporarily on GitHub Pages.

**Live URL:** https://fifecic.github.io/Perspectives/

## What this is

A static build of the PerspectiveHub brochure prototype plus the two existing
format prototypes. It exists so the site can be seen, shared, and iterated on
from any device. It is **not** a published product.

## Pages

| Path | What it is | Status |
|---|---|---|
| `index.html` | Landing page + build status | Working |
| `topics/gb-news.html` | Full topic-format demo (claims, slider, actors, chain, actions) | Format demo — scores are placeholders |
| `topics/drug-deaths.html` | Claim-trace prototype (Scotland vs England drug-death recording) | Prototype — some figures unverified |
| `topics/face-value.html` | Layout prototype | Prototype — placeholder figures |

## Editorial rules

- Nothing here should be quoted as fact until it is marked verified.
- Unverified figures stay marked `CLAIMED — UNVERIFIED`; do not remove a marker
  to make a page look finished.
- Pages carry `<meta name="robots" content="noindex">` while figures are unverified.
  Remove that only when the page is verified and approved for indexing.
- The strongest counter-case panel appears at equal weight and is never hidden
  behind a toggle (integrity rule 1).

## Editing

There is no build step. Edit the HTML/CSS directly and push to `main`; GitHub
Pages serves the repository root.

- `assets/style.css` — shared design system
- `assets/script.js` — mobile nav, reveal-on-scroll, stance slider
- `.nojekyll` — tells Pages to serve files as-is (no Jekyll processing)

## Source of the content

| Source | Used for |
|---|---|
| `C:\wamp64\www\perspectivehub-website` | Landing page and GB News case study (PHP original) |
| `FifeCIC/PerspectiveHub` → `Prototypes/` | Drug-death and Face Value prototypes |

The PHP original remains the editable source for content; this repo is the
public shell. If the two diverge, port the change rather than editing both.

## Related

- Planning and research: `FifeCIC/PerspectiveHub` (private)
- Organisation site: `FifeCIC/FifeCIC.Scot` (private, PHP — cannot be served by Pages)
