export type ProjectEmphasis = 'feature' | 'research' | 'supporting'

export interface Project {
  index: string
  slug: string
  title: string[]
  summary: string
  tags: string[]
  year: string
  image: string
  imageAlt: string
  emphasis: ProjectEmphasis
  /** Dark editorial spread instead of light */
  dark?: boolean
  href?: string
}

export const projects: Project[] = [
  {
    index: '01',
    slug: 'fincore',
    title: ['FINCORE', 'AI ACCOUNTING', 'AUTOMATION'],
    summary:
      'An AI accounting automation platform that reads, classifies, and reconciles financial records — turning manual bookkeeping into a supervised, auditable pipeline.',
    tags: ['AI', 'FULL STACK', 'AUTOMATION'],
    year: '2026',
    image: '/images/work-fincore.png',
    imageAlt: 'Abstract ledger grid with cobalt highlighted rows representing automated accounting flows',
    emphasis: 'feature',
  },
  {
    index: '02',
    slug: 'llm-evaluation-framework',
    title: ['LLM EVALUATION', 'FRAMEWORK'],
    summary:
      'A framework for measuring language-model reliability — structured evaluations, regression tracking, and experimentation infrastructure for teams shipping LLM systems.',
    tags: ['LLM', 'RELIABILITY', 'EXPERIMENTATION'],
    year: '2026',
    image: '/images/work-llm-eval.png',
    imageAlt: 'Dark benchmark matrix of evaluation cells with cobalt filled results',
    emphasis: 'feature',
    dark: true,
  },
  {
    index: '03',
    slug: 'medvision',
    title: ['MEDVISION'],
    summary:
      'Deep-learning research on medical imaging — segmentation and classification models developed and validated against clinical datasets.',
    tags: ['DEEP LEARNING', 'MEDICAL IMAGING', 'RESEARCH'],
    year: '2025',
    image: '/images/work-medvision.png',
    imageAlt: 'Halftone medical scan cross-section with a cobalt segmentation outline',
    emphasis: 'research',
  },
  {
    index: '04',
    slug: 'finquery',
    title: ['FINQUERY'],
    summary: 'Natural-language querying over financial data — ask in plain English, get structured answers.',
    tags: ['NLP', 'FINANCE'],
    year: '2025',
    image: '/images/work-finquery.png',
    imageAlt: 'Minimal line chart with a cobalt highlighted segment',
    emphasis: 'supporting',
  },
]
