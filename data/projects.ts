// ─────────────────────────────────────────────────────────────────────────────
// data/projects.ts
// Primary project registry.
//
// Each project entry drives:
//   - The homepage Selected Work section (when featured: true, published: true)
//   - The /work/[slug] dynamic route (when published: true)
//   - Project metadata and Open Graph tags
//
// To add a new project:
//   1. Add an entry to this array
//   2. Add its thumbnail to public/images/projects/<slug>/thumbnail.png
//   3. Add any new technologies to data/technologies.ts
//   4. Set published: true when ready
// ─────────────────────────────────────────────────────────────────────────────

import type { Project } from './types'
import { fincoreCaseStudy } from './case-studies/fincore'
import { medvisionCaseStudy } from './case-studies/medvision'

export const projects: Project[] = [
  // ── 01 — Fincore ─────────────────────────────────────────────────────────
  {
    index: '01',
    slug: 'fincore',
    order: 1,
    title: ['FINCORE', 'AI ACCOUNTING', 'AUTOMATION'],
    displayTitle: 'Fincore',
    tagline: 'AI accounting automation platform',
    summary:
      'An AI accounting automation platform that reads, classifies, and reconciles financial records — turning manual bookkeeping into a supervised, auditable pipeline.',
    category: 'product',
    year: '2026',
    emphasis: 'feature',
    dark: false,
    technologies: ['python', 'typescript', 'nextdotjs', 'react', 'tailwindcss', 'fastapi', 'postgresql', 'supabase', 'googlegemini', 'pandas', 'docker', 'githubactions', 'vercel', 'railway', 'firebase'],
    tags: ['AI', 'FULL STACK', 'AUTOMATION'],
    links: [
      { type: 'demo', label: 'Live Demo', url: 'https://fincore-accounting-automation.vercel.app/' },
      { type: 'github', label: 'GitHub', url: 'https://github.com/dharanimurugaraj/fincore-accounting-automation' },
    ],
    image: '/images/projects/fincore/thumbnail.png',
    imageAlt: 'Abstract ledger grid with cobalt highlighted rows representing automated accounting flows',
    featured: true,
    published: true,
    caseStudy: fincoreCaseStudy,
  },

  // ── 02 — LLM Evaluation Framework ────────────────────────────────────────
  {
    index: '02',
    slug: 'llm-evaluation',
    order: 2,
    title: ['LLM EVALUATION', 'FRAMEWORK'],
    displayTitle: 'LLM Evaluation Framework',
    tagline: 'LLM evaluation, reliability, and experimentation',
    summary:
      'A framework for measuring language-model reliability — structured evaluations, regression tracking, and experimentation infrastructure for teams shipping LLM systems.',
    category: 'tool',
    year: '2026',
    emphasis: 'feature',
    dark: true,
    technologies: ['python', 'googlegemini', 'ragas', 'weightsandbiases', 'streamlit', 'githubactions'],
    tags: ['LLM', 'RELIABILITY', 'EXPERIMENTATION'],
    // TODO: Add real GitHub, demo, or other links
    links: [],
    image: '/images/projects/llm-evaluation/thumbnail.png',
    imageAlt: 'Dark benchmark matrix of evaluation cells with cobalt filled results',
    featured: true,
    published: true,
    // TODO: Populate case study content
    caseStudy: undefined,
  },

  // ── 03 — MedVision ───────────────────────────────────────────────────────
  {
    index: '03',
    slug: 'medvision',
    order: 3,
    title: ['MEDVISION'],
    displayTitle: 'MedVision',
    tagline: 'Deep-learning medical imaging research',
    summary:
      'Deep-learning research on medical imaging — segmentation and classification models developed and validated against clinical datasets.',
    category: 'research',
    year: '2025',
    emphasis: 'research',
    dark: false,
    technologies: ['python', 'pytorch', 'scikitlearn', 'opencv'],
    tags: ['DEEP LEARNING', 'MEDICAL IMAGING', 'RESEARCH'],
    // TODO: Add real links (paper, presentation, dataset, etc.)
    links: [],
    image: '/images/projects/medvision/thumbnail.png',
    imageAlt: 'Halftone medical scan cross-section with a cobalt segmentation outline',
    featured: true,
    published: true,
    caseStudy: medvisionCaseStudy,
    // TODO: Populate research metadata (paper, venue, metrics, etc.)
    research: undefined,
  },

  // ── 04 — FinQuery ────────────────────────────────────────────────────────
  {
    index: '04',
    slug: 'finquery',
    order: 4,
    title: ['FINQUERY'],
    displayTitle: 'FinQuery',
    tagline: 'Natural-language financial querying',
    summary: 'Natural-language querying over financial data — ask in plain English, get structured answers.',
    category: 'product',
    year: '2025',
    emphasis: 'supporting',
    dark: false,
    technologies: ['python', 'langchain', 'ollama', 'streamlit', 'qdrant'],
    tags: ['NLP', 'FINANCE'],
    // TODO: Add real GitHub, demo, or other links
    links: [],
    image: '/images/projects/finquery/thumbnail.png',
    imageAlt: 'Natural-language query "show Q3 revenue" with fan lines pointing to a highlighted cell in an abstract financial data table',
    featured: true,
    published: true,
    // TODO: Populate case study content
    caseStudy: undefined,
  },
]

/**
 * Returns all projects that should appear on the homepage Selected Work section.
 * Sorted by `order` ascending.
 */
export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured && p.published).sort((a, b) => a.order - b.order)
}

/**
 * Returns all published projects.
 * Used by generateStaticParams to create dynamic routes.
 */
export function getPublishedProjects(): Project[] {
  return projects.filter((p) => p.published).sort((a, b) => a.order - b.order)
}

/**
 * Looks up a project by its slug.
 * Returns undefined if not found or not published.
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug && p.published)
}
