/**
 * site.config.ts — the single instantiation seam.
 *
 * This showcase is a TEMPLATE. Each blackvest candidate gets their own
 * instance deployed to a `<candidate>.blackvest.ai` subdomain. Everything
 * candidate-specific lives in this one file (plus the `roles` content
 * collection for Layer A). Nothing here imports the private vault — content
 * is a manual, reviewed copy-over (privacy boundary, ADR-019 invariant 4).
 *
 * To re-skin for a new candidate: edit `identity` + `theme` here, drop their
 * curated role notes into `src/content/roles/`, and deploy. No component edits.
 */

export interface SiteIdentity {
  /** Display name shown in the masthead + hero. */
  name: string;
  /** Short role line under the name. */
  tagline: string;
  /** The role family this candidate is targeting. */
  targetRoles: string;
  /** Optional contact / link surfaces. Empty strings are hidden. */
  links: {
    email?: string;
    github?: string;
    linkedin?: string;
    x?: string;
  };
  /** Canonical site origin once the custom domain is attached (no trailing slash). */
  origin: string;
}

export interface SiteTheme {
  /** Accent / signal color (CSS color). Editorial-technical default is a cool cyan. */
  accent: string;
  /** Secondary accent used sparingly (e.g. the guardrail / human-gate motif). */
  accentWarm: string;
}

export interface SiteConfig {
  identity: SiteIdentity;
  theme: SiteTheme;
  /**
   * Layer A gate. The candidate pitch renders real role notes when present.
   * When the `roles` collection is empty, the site shows an honest
   * "intake in progress" state instead of fabricated content (invariant 3).
   * This flag is informational; the templates also check the collection
   * directly, so it can never claim content that isn't there.
   */
  layerA: {
    /** Headline for the candidate-pitch section. */
    sectionTitle: string;
  };
}

// ── Zander's instance (candidate #0) ───────────────────────────────────────
// Brand decision (Plan C kickoff): personal-name brand, served under a
// blackvest.ai subdomain. NOTE: full legal name is intentionally left as the
// short handle until the `/career-interview` intake confirms how Zander wants
// to be presented — do not fabricate a surname (invariant 3).
export const site: SiteConfig = {
  identity: {
    name: 'Zander',
    tagline: 'AI operations · solutions engineering · agent orchestration',
    targetRoles: 'AI operations / AI maintenance / solutions engineering',
    links: {
      github: 'https://github.com/DreamwareDevelopment',
      email: '',
      linkedin: '',
      x: '',
    },
    // Set to the final subdomain (e.g. https://zander.blackvest.ai) at domain attach.
    origin: '',
  },
  theme: {
    accent: '#5ad1e6',
    accentWarm: '#e6b35a',
  },
  layerA: {
    sectionTitle: 'The candidate',
  },
};
