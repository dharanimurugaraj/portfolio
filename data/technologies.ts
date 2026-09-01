// ─────────────────────────────────────────────────────────────────────────────
// data/technologies.ts
// Centralized technology registry.
//
// IMPORTANT: Only add technologies that genuinely reflect your skills and the
// projects in this portfolio. Do not add technologies you have not used.
// The `technologies` array in each project references these IDs.
// ─────────────────────────────────────────────────────────────────────────────

import type { Technology } from './types'

export const technologies: Technology[] = [
  // ── TODO: Populate this registry with your real technology stack. ──────────
  //
  // Example structure (do not use these as-is — fill in your actual stack):
  //
  // {
  //   id: 'python',
  //   name: 'Python',
  //   category: 'language',
  //   description: 'Primary language for AI/ML and backend systems.',
  //   url: 'https://python.org',
  //   displayPriority: 1,
  // },
  // {
  //   id: 'typescript',
  //   name: 'TypeScript',
  //   category: 'language',
  //   description: 'Typed superset of JavaScript for reliable frontend and backend.',
  //   url: 'https://typescriptlang.org',
  //   displayPriority: 2,
  // },
  // {
  //   id: 'pytorch',
  //   name: 'PyTorch',
  //   category: 'ai-ml',
  //   description: 'Deep learning framework used for model training and research.',
  //   url: 'https://pytorch.org',
  //   displayPriority: 10,
  // },
  // {
  //   id: 'nextjs',
  //   name: 'Next.js',
  //   category: 'frontend',
  //   description: 'React framework for production web applications.',
  //   url: 'https://nextjs.org',
  //   displayPriority: 20,
  // },
]

/**
 * Returns a Technology object by its ID.
 * Returns undefined if the ID is not found.
 */
export function getTechById(id: string): Technology | undefined {
  return technologies.find((t) => t.id === id)
}

/**
 * Returns all technologies for a given category.
 */
export function getTechByCategory(category: Technology['category']): Technology[] {
  return technologies.filter((t) => t.category === category)
}
