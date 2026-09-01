import type { CaseStudyContent } from '../types'

export const fincoreCaseStudy: CaseStudyContent = {
  overview:
    'An AI-powered financial intelligence platform that automates bank-statement extraction, financial reconciliation and management reporting for accounting and finance teams.',
  sections: [
    {
      id: 'problem',
      eyebrow: '01 — THE PROBLEM',
      title: 'Manual, Error-Prone Extraction',
      content: [
        'Financial analysts manually process inconsistent bank PDFs, extract transactions, perform multiple financial calculations/checks, reconcile figures, and assemble Excel reports.',
        'This created a multi-day workflow that was difficult to scale and exposed the process to manual calculation and extraction errors.',
      ],
    },
    {
      id: 'pipeline',
      eyebrow: '02 — SYSTEM PIPELINE',
      title: 'Three-Stage Processing',
      content: [
        'Stage 1 handles document classification and unstructured data extraction.',
        'Stage 2 performs deterministic financial computation on the structured data.',
        'Stage 3 generates auditable Excel reports for review and download.',
      ],
      codeBlock: {
        language: 'text',
        caption: 'THREE-STAGE AUTOMATION PIPELINE',
        code: `STAGE 1: EXTRACTION & CLASSIFICATION
------------------------------------
[ PDF Bank Statement ] 
  ↓ (Format Classifier & Regex)
  ↓ (Gemini 2.5 Flash Lite)
[ Structured Transaction Data ]

STAGE 2: DETERMINISTIC COMPUTATION
------------------------------------
[ Structured Data ]
  ↓ (Pure Python Engine)
  ├─ CC & WCDL Interest
  ├─ ROI Deviation Checks
  ├─ Forex Rate Verification
  └─ Limit Utilisation
[ Reconciled Financials ]

STAGE 3: REPORTING
------------------------------------
[ Reconciled Financials ]
  ↓ (openpyxl)
[ Excel Working Sheet & Management Report ]
  ↓
[ Next.js Dashboard ]`,
      },
    },
    {
      id: 'ai-boundary',
      eyebrow: '03 — AI BOUNDARY',
      title: 'AI Handles Ambiguity. Deterministic Code Handles Money.',
      content: [
        'Gemini 2.5 Flash Lite is used only for the unstructured extraction problem: converting bank-statement PDFs into structured transaction data.',
        'Financial calculations are handled by a pure-Python deterministic engine. This keeps the financial logic reproducible, independently testable, and free from LLM non-determinism.',
      ],
      codeBlock: {
        language: 'text',
        caption: 'THE AI BOUNDARY',
        code: `[ PROBABILISTIC ]                  [ DETERMINISTIC ]
Gemini 2.5 Flash                   Python Engine
=================      >>>>        =================
Reads PDFs                         Computes Interest
Extracts Dates                     Checks Limits
Maps Columns                       Verifies Forex
Formats JSON                       Generates Reports`,
      },
    },
    {
      id: 'architecture',
      eyebrow: '04 — ARCHITECTURE',
      title: 'Stateless Services & API Abstractions',
      content: [
        'The frontend is built on Next.js 16 (App Router) using React, TypeScript, Tailwind CSS, and Zustand. A Next.js Middleware acts as an API proxy, keeping backend routing secure and server-side.',
        'The backend is a stateless REST API built with FastAPI and Python 3.12, orchestrating the pipeline and storage abstractions (Local/S3). Data is stored in PostgreSQL.',
      ],
    },
    {
      id: 'security',
      eyebrow: '05 — SECURITY & TENANCY',
      title: 'Multi-Tenant Authentication',
      content: [
        'The system uses Firebase Authentication with ID-token verification, mapping external identities to internal PostgreSQL User records.',
        'All data is securely scoped by organisation, with role-based permissions and comprehensive AuditLog tracking.',
      ],
      codeBlock: {
        language: 'text',
        caption: 'AUTHENTICATION FLOW',
        code: `[ Client ]
  ↓ (Login)
[ Firebase Auth ]
  ↓ (Returns ID Token)
[ Next.js Middleware ]
  ↓ (Proxies with Token)
[ FastAPI Backend ]
  ↓ (Verifies Token)
[ PostgreSQL User Lookup ]
  ↓ (Resolves orgId, roleId, permissions)
[ Scoped Service Execution ]`,
      },
    },
    {
      id: 'engineering-decisions',
      eyebrow: '06 — ENGINEERING DECISIONS',
      title: 'Design Rationale',
      content: [
        '1. Deterministic computation: Financial logic stays outside the LLM for reproducibility and testing.',
        '2. Raw SQL / psycopg2: Precise control over queries and tenancy boundaries.',
        '3. API proxy boundary: Keeps backend routing server-side and simplifies client requests.',
        '4. Extensible bank classifier: New bank formats can be added without changing the core extraction flow.',
        '5. Storage abstraction: Supports local development and S3-compatible storage without coupling the application to one provider.',
        '6. Firebase + internal user mapping: External authentication with internal relational tenancy and permissions.',
      ],
    },
    {
      id: 'production-engineering',
      eyebrow: '07 — PRODUCTION ENGINEERING',
      title: 'Infrastructure Hardening',
      content: [
        'My primary engineering contributions focused on productionizing the infrastructure and hardening the authentication flows:',
        '• Implemented Firebase token verification, internal User lookup, and orgId/roleId propagation.',
        '• Resolved a production duplicate-key issue caused by edge cases in user identity linking.',
        '• Diagnosed and fixed Vercel → Railway routing and removed legacy /_/backend prefixes.',
        '• Cleaned up stale vercel.json configurations and disabled unwanted HTTP Basic Auth challenges.',
        '• Conducted a comprehensive PostgreSQL configuration audit and wrote the technical documentation.',
      ],
    },
    {
      id: 'cicd',
      eyebrow: '08 — CI/CD',
      title: 'Deployment & Automation',
      content: [
        'To ensure stability, I implemented separated GitHub Actions CI pipelines acting as strict gates on every push and PR:',
        '• Frontend (Node 20): npm ci, ESLint, next build (deployed to Vercel).',
        '• Backend (Python 3.12): pip install, pytest (deployed to Railway, connected to Supabase PostgreSQL).',
      ],
    },
    {
      id: 'results',
      eyebrow: '09 — IMPACT',
      title: 'Days to Minutes',
      content: [
        'The FinCore product replaces a multi-day manual process with a minutes-long automated pipeline, establishing an auditable trail from raw document to final report.',
      ],
      metrics: [
        { label: 'BEFORE', value: 'Days' },
        { label: 'AFTER', value: 'Minutes' },
        { label: 'EXTRACTION', value: 'Automated' },
        { label: 'COMPUTATION', value: 'Deterministic' },
        { label: 'REPORTS', value: 'Generated' },
        { label: 'TRAIL', value: 'Auditable' },
      ],
    },
    {
      id: 'lessons',
      eyebrow: '10 — LESSONS LEARNED',
      title: 'Takeaways',
      content: [
        '1. Use LLMs where ambiguity exists; keep deterministic logic in traditional code.',
        '2. Production authentication requires handling identity-linking and state edge cases beyond the happy path.',
        '3. Clear abstraction boundaries and auditability make production systems easier to evolve and debug.',
      ],
    },
  ],
}
