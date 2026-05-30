# blackvest-showcase

The **public showcase** for the career case-study system — a deep-dive-able
portfolio artifact. It presents the system's *architecture and outcomes* the
way the target roles (AI operations / solutions engineering) screen for them:
appropriate autonomy, a human-in-the-loop gate, and honesty by construction.

This is **Pillar 3** of the system described in the private build hub
(ADR-019). It is the public *projection* of a private engine — never the
engine itself.

> **Template.** This repo is built to be instantiated per candidate and
> deployed to a `<candidate>.blackvest.ai` subdomain. Everything
> candidate-specific lives in [`src/site.config.ts`](src/site.config.ts) plus
> the `src/content/roles/` collection. Re-skin and re-content there; no
> component edits.

## What's here

- **Spine** — the human↔AI collaboration story.
- **Layer B — system deep-dive.** The three-pillar architecture, the
  orchestration graph (how an application moves through the funnel), and the
  guardrail philosophy. Static narrative; live metrics are a later milestone.
- **Layer A — candidate pitch.** A content model + templates that render real,
  curated role/venture notes. Until a real intake has run, this section shows
  an honest "intake in progress" state — never fabricated content.
- **Metrics seam.** A wired-but-empty outcomes panel. Reads "—" until real
  applications are submitted; designed to accept a sanitized, aggregate feed
  (counts only) without a redesign.

## The boundary (why this repo is safe to be public)

This repo **never imports the private vault**. Content crosses the boundary
only by a *manual, reviewed copy-over* into `src/content/roles/` — never an
automated sync. What's published is curated narrative + sanitized, aggregate
outcomes. What stays private: all personal data and the engine's
implementation (the skill prompts, scoring rubrics, and orchestration code are
the moat). The site shows *what was designed and what it produced* — not the
source.

Concretely, the site honors these invariants:

1. Human approval before any outbound action; no auto-approve.
2. Official channels only.
3. Every public claim traces to a real note; metrics are never fabricated.
4. Hard privacy boundary — no vault import, no PII, no un-consented employer
   identity.
5. Reveal depth = architecture + outcomes, never implementation.
6. Quality over volume.

## Develop

```sh
npm install
npm run dev      # local dev server
npm run build    # static build → dist/
npm run preview  # preview the build
```

## Deploy

Static output (`dist/`) → **Cloudflare Pages**. A future live-metrics feed
slots in as a Pages Function reading a sanitized JSON feed; the static target
above is unchanged by it.

## Stack

[Astro](https://astro.build) (SSG) · plain CSS design tokens
([`src/styles/tokens.css`](src/styles/tokens.css)) · Cloudflare Pages.

## License

[MIT](LICENSE). The site code (presentation layer) is open. The proprietary
engine it describes is not part of this repo.
