/**
 * site.config.ts — the blackvest SHOWCASE (1-of-1) config.
 *
 * This repo is the system's public case-study, deployed to showcase.blackvest.ai
 * (the apex blackvest.ai is the separate blackvest-site marketing repo). It is NOT
 * a candidate page — candidate pages live in the separate (private)
 * blackvest-candidate repo, each deployed to <candidate>.blackvest.ai and
 * linked from the "in the wild" section below.
 *
 * Never imports the private vault (ADR-019 invariant 4). Shows architecture +
 * outcomes only, never implementation (invariant 6).
 */

export interface CandidateLink {
  /** Display name. */
  name: string;
  /** Absolute URL to the live candidate page. */
  url: string;
  /** One-line framing of who they are / the role family. */
  blurb: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  /** Canonical origin once the apex is attached (no trailing slash). */
  origin: string;
  links: { github?: string; email?: string };
  /** Candidate pages the system has produced — the "in the wild" proof. */
  candidates: CandidateLink[];
  theme: { accent: string; accentWarm: string };
}

export const site: SiteConfig = {
  name: 'blackvest',
  tagline: 'An agentic career system: architecture, guardrails, outcomes.',
  origin: 'https://blackvest.ai',
  links: { github: 'https://github.com/DreamwareDevelopment' },
  // No live candidate pages yet — the decommissioned zander-pyle instance is gone; real instances
  // are added back here once produced through the productized flow. Empty → the section is hidden.
  candidates: [],
  theme: { accent: '#5ad1e6', accentWarm: '#e6b35a' },
};
