import { defineCollection, z } from 'astro:content';

/**
 * Layer A content model — the candidate pitch.
 *
 * Mirrors the vault's `career-role` note schema (Areas/Personal/Career), but
 * is a SEPARATE, curated copy. The public repo never imports the vault
 * (invariant 4); populating this collection is a deliberate, reviewed
 * copy-over of only the accomplishments cleared for publication. Every field
 * here must trace to a real role/venture note — no fabrication (invariant 3).
 *
 * Empty collection ⇒ Layer A renders an honest "intake in progress" state.
 */
const roles = defineCollection({
  type: 'content',
  schema: z.object({
    /** employment | venture (a failed venture is first-class signal). */
    kind: z.enum(['employment', 'venture']),
    company: z.string(),
    title: z.string(),
    /** YYYY-MM */
    start: z.string(),
    /** YYYY-MM | 'present' */
    end: z.string(),
    /** Ventures: e.g. "shut down 2022-09 — no PMF". */
    outcome: z.string().optional(),
    /** One-line framing shown in the role header. */
    summary: z.string(),
    /**
     * Quantified accomplishments in impact form. Each must trace to a role
     * note. `metric` is the headline number; keep it honest or omit it.
     */
    accomplishments: z
      .array(
        z.object({
          metric: z.string().optional(),
          statement: z.string(),
          theme: z
            .enum([
              'agent-orchestration',
              'ai-implementation',
              'catching-model-errors',
              'solutions-engineering',
              'ownership',
            ])
            .optional(),
        }),
      )
      .default([]),
    /** Sort key (higher = shown first). */
    order: z.number().default(0),
    /** Draft roles are excluded from the public build. */
    draft: z.boolean().default(false),
  }),
});

export const collections = { roles };
