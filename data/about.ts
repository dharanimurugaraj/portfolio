// ─────────────────────────────────────────────────────────────────────────────
// data/about.ts
// Bio and personal/professional profile content.
//
// This drives the About section on the homepage.
// ─────────────────────────────────────────────────────────────────────────────

import type { AboutContent } from './types'

export const about: AboutContent = {
  shortBio:
    'AI-focused software engineer designing and building intelligent products and systems — from research concepts to functioning production software.',

  fullBio: [
    'The most interesting engineering problems sit at the boundary between probabilistic AI models and deterministic software systems. Getting an LLM to extract structured data is a research problem; making that extraction reliable, auditable, and production-ready is a software engineering problem. Both matter.',
    'Work spans the full stack: backend APIs, relational data architecture, document intelligence workflows, RAG pipeline evaluation, and deep learning research for medical imaging. The goal is always the same — systems that actually work in production, not just in experiments.',
  ],

  focus: [
    'AI Systems Architecture',
    'Full-Stack Software Engineering',
    'Document Intelligence & Automation',
    'LLM Reliability & Evaluation',
  ],
}
