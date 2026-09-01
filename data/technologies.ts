// ─────────────────────────────────────────────────────────────────────────────
// data/technologies.ts
// Centralized technology registry.
//
// Source of truth for all technology metadata across the portfolio.
// Project files reference technologies by ID — e.g. technologies: ['python', 'fastapi']
//
// Icon resolution: see lib/tech-icons.ts
// ─────────────────────────────────────────────────────────────────────────────

import type { Technology } from './types'

export const technologies: Technology[] = [
  // ── Languages ─────────────────────────────────────────────────────────────

  {
    id: 'python',
    name: 'Python',
    category: 'language',
    description: 'Primary language for AI/ML systems, backend APIs, and data pipelines.',
    url: 'https://python.org',
    displayPriority: 1,
    projects: ['fincore', 'llm-evaluation', 'medvision', 'finquery'],
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'language',
    description: 'Statically typed superset of JavaScript used for all frontend development.',
    url: 'https://typescriptlang.org',
    displayPriority: 2,
    projects: ['fincore'],
  },
  {
    id: 'sql',
    name: 'SQL',
    category: 'language',
    description: 'Hand-written queries via psycopg2 for precise control over PostgreSQL data access.',
    displayPriority: 3,
    projects: ['fincore'],
  },

  // ── AI / ML ───────────────────────────────────────────────────────────────

  {
    id: 'pytorch',
    name: 'PyTorch',
    category: 'ai-ml',
    description: 'Deep learning framework used for model training, evaluation, and inference.',
    url: 'https://pytorch.org',
    displayPriority: 10,
    projects: ['medvision'],
  },
  {
    id: 'googlegemini',
    name: 'Google Gemini',
    category: 'ai-ml',
    description:
      'Used as the primary LLM for structured extraction in FinCore and as an embedding model (embedding-001) in the LLM Eval Framework.',
    url: 'https://deepmind.google/technologies/gemini/',
    displayPriority: 11,
    projects: ['fincore', 'llm-evaluation'],
  },
  {
    id: 'langchain',
    name: 'LangChain',
    category: 'ai-ml',
    description: 'Orchestration framework for building RAG pipelines and LLM-driven applications.',
    url: 'https://langchain.com',
    displayPriority: 12,
    projects: ['finquery'],
  },
  {
    id: 'ollama',
    name: 'Ollama',
    category: 'ai-ml',
    description: 'Local LLM runtime used to serve Llama 3 in FinQuery for private, on-device inference.',
    url: 'https://ollama.com',
    displayPriority: 13,
    projects: ['finquery'],
  },
  {
    id: 'ragas',
    name: 'RAGAS',
    category: 'ai-ml',
    description:
      'RAG evaluation framework providing faithfulness, answer relevancy, context recall, and context precision metrics.',
    url: 'https://docs.ragas.io',
    displayPriority: 14,
    projects: ['llm-evaluation'],
  },
  {
    id: 'scikitlearn',
    name: 'scikit-learn',
    category: 'ai-ml',
    description: 'Classical ML library used for preprocessing, evaluation utilities, and baseline models.',
    url: 'https://scikit-learn.org',
    displayPriority: 15,
    projects: ['medvision'],
  },
  {
    id: 'weightsandbiases',
    name: 'Weights & Biases',
    category: 'ai-ml',
    description: 'Experiment tracking platform used to log, compare, and visualise RAGAS evaluation runs.',
    url: 'https://wandb.ai',
    displayPriority: 16,
    projects: ['llm-evaluation'],
  },

  // ── Frontend ──────────────────────────────────────────────────────────────

  {
    id: 'nextdotjs',
    name: 'Next.js',
    category: 'frontend',
    description: 'App Router framework powering both this portfolio and the FinCore dashboard.',
    url: 'https://nextjs.org',
    displayPriority: 20,
    projects: ['fincore'],
  },
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    description: 'UI library underpinning all frontend component systems.',
    url: 'https://react.dev',
    displayPriority: 21,
    projects: ['fincore'],
  },
  {
    id: 'tailwindcss',
    name: 'Tailwind CSS',
    category: 'frontend',
    description: 'Utility-first CSS framework used for styling the FinCore dashboard and this portfolio.',
    url: 'https://tailwindcss.com',
    displayPriority: 22,
    projects: ['fincore'],
  },
  {
    id: 'streamlit',
    name: 'Streamlit',
    category: 'frontend',
    description: 'Python-native framework used to build the LLM Eval live dashboard and FinQuery UI.',
    url: 'https://streamlit.io',
    displayPriority: 23,
    projects: ['llm-evaluation', 'finquery'],
  },

  // ── Backend ───────────────────────────────────────────────────────────────

  {
    id: 'fastapi',
    name: 'FastAPI',
    category: 'backend',
    description: 'High-performance Python web framework serving the FinCore REST API.',
    url: 'https://fastapi.tiangolo.com',
    displayPriority: 30,
    projects: ['fincore'],
  },

  // ── Data / Storage ────────────────────────────────────────────────────────

  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'data',
    description:
      'Relational database powering FinCore with multi-tenant schema, UUID primary keys, and audit logging via raw psycopg2.',
    url: 'https://postgresql.org',
    displayPriority: 40,
    projects: ['fincore'],
  },
  {
    id: 'supabase',
    name: 'Supabase',
    category: 'data',
    description: 'Managed PostgreSQL hosting used as the production database for FinCore.',
    url: 'https://supabase.com',
    displayPriority: 41,
    projects: ['fincore'],
  },
  {
    id: 'qdrant',
    name: 'Qdrant',
    category: 'data',
    description: 'Vector database used for semantic similarity search in the FinQuery RAG pipeline.',
    url: 'https://qdrant.tech',
    displayPriority: 42,
    projects: ['finquery'],
  },

  // ── Tools / Libraries ─────────────────────────────────────────────────────

  {
    id: 'pandas',
    name: 'pandas',
    category: 'tools',
    description: 'Data manipulation library used for tabular data processing in FinCore reporting.',
    url: 'https://pandas.pydata.org',
    displayPriority: 50,
    projects: ['fincore'],
  },
  {
    id: 'opencv',
    name: 'OpenCV',
    category: 'tools',
    description: 'Computer vision library used for image preprocessing in the MedVision pipeline.',
    url: 'https://opencv.org',
    displayPriority: 51,
    projects: ['medvision'],
  },

  // ── Infrastructure / DevOps ───────────────────────────────────────────────

  {
    id: 'docker',
    name: 'Docker',
    category: 'infrastructure',
    description: 'Container runtime used for local development parity and deployment packaging.',
    url: 'https://docker.com',
    displayPriority: 60,
    projects: ['fincore'],
  },
  {
    id: 'githubactions',
    name: 'GitHub Actions',
    category: 'infrastructure',
    description:
      'CI/CD platform running lint, build, and test gates on every push for both FinCore and the LLM Eval Framework.',
    url: 'https://github.com/features/actions',
    displayPriority: 61,
    projects: ['fincore', 'llm-evaluation'],
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'infrastructure',
    description: 'Production hosting for Next.js frontends — FinCore dashboard and this portfolio.',
    url: 'https://vercel.com',
    displayPriority: 62,
    projects: ['fincore'],
  },
  {
    id: 'railway',
    name: 'Railway',
    category: 'infrastructure',
    description: 'Cloud platform hosting the FinCore FastAPI backend with auto-deploy on push to main.',
    url: 'https://railway.app',
    displayPriority: 63,
    projects: ['fincore'],
  },
  {
    id: 'firebase',
    name: 'Firebase',
    category: 'infrastructure',
    description:
      'Authentication provider for FinCore — ID token issuance on the client, server-side verification via Firebase Admin SDK.',
    url: 'https://firebase.google.com',
    displayPriority: 64,
    projects: ['fincore'],
  },
]

/**
 * Returns a Technology object by its ID.
 * Returns undefined if the ID is not found.
 */
export function getTechById(id: string): Technology | undefined {
  return technologies.find((t) => t.id === id)
}

/**
 * Returns all technologies for a given category, sorted by displayPriority.
 */
export function getTechByCategory(category: Technology['category']): Technology[] {
  return technologies.filter((t) => t.category === category).sort((a, b) => (a.displayPriority ?? 99) - (b.displayPriority ?? 99))
}

/**
 * Returns all technologies used by a specific project (by slug).
 */
export function getTechForProject(projectSlug: string): Technology[] {
  return technologies.filter((t) => t.projects?.includes(projectSlug))
}
