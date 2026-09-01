// ─────────────────────────────────────────────────────────────────────────────
// data/types.ts
// Canonical TypeScript types for all portfolio content.
// These are the single source of truth — all components consume these types.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Technology Registry ──────────────────────────────────────────────────────

export type TechCategory = 'language' | 'ai-ml' | 'frontend' | 'backend' | 'data' | 'infrastructure'

export interface Technology {
  /** Unique key used to reference this technology from projects. e.g. 'pytorch' */
  id: string
  /** Display name. e.g. 'PyTorch' */
  name: string
  category: TechCategory
  /** One-line description shown in the tech stack section. */
  description?: string
  /** Official site URL. */
  url?: string
  /** Lower number = shown earlier in the tech stack section. */
  displayPriority?: number
}

// ─── Project Links ────────────────────────────────────────────────────────────

export type ProjectLinkType = 'github' | 'demo' | 'paper' | 'presentation' | 'dataset' | 'other'

export interface ProjectLink {
  type: ProjectLinkType
  /** Human-readable label shown on the link button. */
  label: string
  url: string
}

// ─── Project Emphasis (drives homepage layout selection) ──────────────────────

export type ProjectEmphasis = 'feature' | 'research' | 'supporting'

// ─── Research-specific metadata ───────────────────────────────────────────────

export interface ResearchMeta {
  paperTitle?: string
  paperUrl?: string
  /** e.g. 'NeurIPS 2025' or 'arXiv preprint' */
  venue?: string
  dataset?: string
  modelArchitecture?: string
  metrics?: Array<{ label: string; value: string }>
}

// ─── Case Study Content ───────────────────────────────────────────────────────
// All fields are optional — populate progressively as case studies are written.
// Content is plain prose; components handle typographic rendering.

export interface CaseStudyContent {
  /** 2–4 sentence editorial lead paragraph. */
  overview?: string
  problem?: string
  approach?: string
  /** System design narrative. */
  architecture?: string
  implementation?: string
  /** Model choices, training setup, evaluation strategy. */
  aiDetails?: string
  engineeringDecisions?: string
  challenges?: string
  results?: string
  lessonsLearned?: string
}

// ─── Project ─────────────────────────────────────────────────────────────────

export interface Project {
  // Identity
  /** Display index: '01', '02', '03', '04' */
  index: string
  /** URL path segment: 'fincore', 'llm-evaluation', 'medvision', 'finquery' */
  slug: string
  /** Numeric sort order: 1, 2, 3, 4 */
  order: number

  // Display
  /** Multi-line display title for large editorial typography. */
  title: string[]
  /** Single-string canonical title used in <title> tags and headings. */
  displayTitle: string
  /** Short punchy descriptor. e.g. 'AI accounting automation platform' */
  tagline: string
  /** 1–2 sentence description used on index cards and meta descriptions. */
  summary: string

  // Taxonomy
  category: 'product' | 'research' | 'tool' | 'infrastructure'
  year: string

  // Homepage rendering
  emphasis: ProjectEmphasis
  /** When true, this project's homepage section uses the dark/inverted treatment. */
  dark?: boolean

  // Stack — technology IDs from data/technologies.ts
  /** Array of Technology.id values. e.g. ['pytorch', 'nextjs'] */
  technologies: string[]
  /**
   * Short human-readable display labels shown on index cards and metadata bars.
   * These are concise visual labels, not technology IDs.
   * e.g. ['AI', 'FULL STACK', 'AUTOMATION']
   */
  tags: string[]

  // Links
  links: ProjectLink[]

  // Assets
  /** Path to thumbnail image for homepage cards. */
  image: string
  imageAlt: string
  /** Path to Open Graph card image (1200×630). Falls back to image if absent. */
  ogImage?: string

  // Case study
  caseStudy?: CaseStudyContent

  // Research
  /** Only populate for research-category projects. */
  research?: ResearchMeta

  // Visibility
  /** When true, included in the homepage Selected Work section. */
  featured: boolean
  /**
   * When false, the project is excluded from all routes and listings.
   * Use this to draft new projects before they are ready to publish.
   */
  published: boolean
}

// ─── Experience ───────────────────────────────────────────────────────────────

export interface ExperienceItem {
  organization: string
  role: string
  type: 'full-time' | 'internship' | 'contract' | 'research' | 'open-source'
  /** 'YYYY-MM' format. */
  startDate: string
  /** 'YYYY-MM' format. Omit if current. */
  endDate?: string
  location?: string
  description: string
  achievements?: string[]
  /** Technology IDs from data/technologies.ts */
  technologies?: string[]
}

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutContent {
  /** 1–2 sentences. Used in compact contexts (footer, nav tooltip, etc.) */
  shortBio: string
  /** Full paragraphs for the About section. Each string is one paragraph. */
  fullBio: string[]
  /** High-level focus areas. e.g. ['AI Systems', 'Full-Stack Engineering'] */
  focus: string[]
}
