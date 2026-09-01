// ─────────────────────────────────────────────────────────────────────────────
// lib/tech-icons.ts
// Centralized icon mapping: technology.id → simple-icons SVG data.
//
// Icon source: simple-icons (https://simpleicons.org)
// This is the ONLY place icons are imported. Components use getTechIcon(id)
// to resolve an icon — they never import from simple-icons directly.
//
// Graceful fallback: getTechIcon() returns null for unmapped IDs.
// Components should render a fallback glyph when null is returned.
//
// Icon data shape (from simple-icons):
//   { title: string; hex: string; path: string; slug: string }
//   - hex: brand color without '#'
//   - path: SVG path data (viewBox is always "0 0 24 24")
// ─────────────────────────────────────────────────────────────────────────────

import {
  siPython,
  siTypescript,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siFastapi,
  siPostgresql,
  siGooglegemini,
  siLangchain,
  siOllama,
  siStreamlit,
  siPytorch,
  siScikitlearn,
  siWeightsandbiases,
  siPandas,
  siOpencv,
  siDocker,
  siGithubactions,
  siVercel,
  siRailway,
  siFirebase,
  siSupabase,
  siQdrant,
} from 'simple-icons'

export interface TechIconData {
  /** SVG path data. Use inside <svg viewBox="0 0 24 24"><path d={path} /></svg> */
  path: string
  /** Brand hex color without '#'. e.g. '3776AB' for Python. */
  hex: string
  /** Official brand name from simple-icons. */
  title: string
}

/**
 * Maps a technology ID (from data/technologies.ts) to its simple-icons icon data.
 *
 * Returns null for technologies without a dedicated brand icon.
 * This is expected — some technologies (SQL, RAGAS, etc.) have no brand SVG.
 * Components should render a generic fallback when null is returned.
 */
const iconMap: Record<string, TechIconData> = {
  // Languages
  python: { path: siPython.path, hex: siPython.hex, title: siPython.title },
  typescript: { path: siTypescript.path, hex: siTypescript.hex, title: siTypescript.title },
  // sql has no simple-icon — intentionally absent

  // AI / ML
  pytorch: { path: siPytorch.path, hex: siPytorch.hex, title: siPytorch.title },
  googlegemini: { path: siGooglegemini.path, hex: siGooglegemini.hex, title: siGooglegemini.title },
  langchain: { path: siLangchain.path, hex: siLangchain.hex, title: siLangchain.title },
  ollama: { path: siOllama.path, hex: siOllama.hex, title: siOllama.title },
  // ragas has no simple-icon — intentionally absent
  scikitlearn: { path: siScikitlearn.path, hex: siScikitlearn.hex, title: siScikitlearn.title },
  weightsandbiases: {
    path: siWeightsandbiases.path,
    hex: siWeightsandbiases.hex,
    title: siWeightsandbiases.title,
  },

  // Frontend
  nextdotjs: { path: siNextdotjs.path, hex: siNextdotjs.hex, title: siNextdotjs.title },
  react: { path: siReact.path, hex: siReact.hex, title: siReact.title },
  tailwindcss: { path: siTailwindcss.path, hex: siTailwindcss.hex, title: siTailwindcss.title },
  streamlit: { path: siStreamlit.path, hex: siStreamlit.hex, title: siStreamlit.title },

  // Backend
  fastapi: { path: siFastapi.path, hex: siFastapi.hex, title: siFastapi.title },

  // Data / Storage
  postgresql: { path: siPostgresql.path, hex: siPostgresql.hex, title: siPostgresql.title },
  supabase: { path: siSupabase.path, hex: siSupabase.hex, title: siSupabase.title },
  qdrant: { path: siQdrant.path, hex: siQdrant.hex, title: siQdrant.title },

  // Tools / Libraries
  pandas: { path: siPandas.path, hex: siPandas.hex, title: siPandas.title },
  opencv: { path: siOpencv.path, hex: siOpencv.hex, title: siOpencv.title },

  // Infrastructure
  docker: { path: siDocker.path, hex: siDocker.hex, title: siDocker.title },
  githubactions: { path: siGithubactions.path, hex: siGithubactions.hex, title: siGithubactions.title },
  vercel: { path: siVercel.path, hex: siVercel.hex, title: siVercel.title },
  railway: { path: siRailway.path, hex: siRailway.hex, title: siRailway.title },
  firebase: { path: siFirebase.path, hex: siFirebase.hex, title: siFirebase.title },
}

/**
 * Returns icon data for a given technology ID, or null if no icon is available.
 *
 * @example
 * const icon = getTechIcon('python')
 * if (icon) {
 *   return <svg viewBox="0 0 24 24"><path d={icon.path} /></svg>
 * }
 */
export function getTechIcon(id: string): TechIconData | null {
  return iconMap[id] ?? null
}

/**
 * Returns all technology IDs that have a mapped icon.
 * Useful for debugging or generating icon sheets.
 */
export function getMappedIconIds(): string[] {
  return Object.keys(iconMap)
}
