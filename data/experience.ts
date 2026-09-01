// ─────────────────────────────────────────────────────────────────────────────
// data/experience.ts
// Career history and professional experience.
//
// Each entry drives the Experience section on the homepage.
// ─────────────────────────────────────────────────────────────────────────────

import type { ExperienceItem } from './types'

export const experience: ExperienceItem[] = [
  {
    organization: 'Vyrenzo',
    role: 'Freelance AI Full Stack Engineer',
    type: 'contract',
    startDate: '2026-04',
    // endDate is intentionally absent — role is ongoing
    location: 'Remote',
    description:
      'Designing and deploying AI-powered document intelligence and manufacturing operations platforms.',
    achievements: [
      'Built AI-powered workflows for document processing, information extraction, and operational automation using Python, FastAPI, and LLM APIs.',
      'Developing an AI-powered manufacturing operations platform focused on inventory management, purchase order processing, and Certificate of Analysis workflows.',
      'Designed document intelligence workflows to extract and structure information from operational documents, reducing manual data entry and processing effort.',
      'Developed backend services and deployment workflows using PostgreSQL, Firebase, Cloudflare R2, and Vercel.',
    ],
    technologies: ['python', 'fastapi', 'postgresql', 'firebase', 'vercel'],
  },
]
