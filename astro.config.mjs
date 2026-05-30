// @ts-check
import { defineConfig } from 'astro/config';

// Static site generation (SSG) → Cloudflare Pages.
// No server runtime here: the public showcase is a pure static projection.
// The Plan-D live-metrics seam (a Pages Function reading a sanitized feed)
// slots in later without changing this output target.
export default defineConfig({
  output: 'static',
  // `site` is set per-deployment once the blackvest.ai subdomain is attached.
  // Left unset for the initial *.pages.dev cut; canonical URLs fall back to relative.
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
