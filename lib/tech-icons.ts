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
  siJavascript,
  siHtml5,
  siCss,
  siNextdotjs,
  siReact,
  siTailwindcss,
  siStreamlit,
  siFastapi,
  siFlask,
  siDjango,
  siNodedotjs,
  siExpress,
  siPostgresql,
  siMysql,
  siMongodb,
  siSupabase,
  siQdrant,
  siGooglegemini,
  siLangchain,
  siOllama,
  siPytorch,
  siScikitlearn,
  siWeightsandbiases,
  siPandas,
  siOpencv,
  siDocker,
  siGit,
  siGithubactions,
  siVercel,
  siRailway,
  siFirebase,
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
  javascript: { path: siJavascript.path, hex: siJavascript.hex, title: siJavascript.title },
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
  html5: { path: siHtml5.path, hex: siHtml5.hex, title: siHtml5.title },
  css3: { path: siCss.path, hex: siCss.hex, title: siCss.title },
  nextdotjs: { path: siNextdotjs.path, hex: siNextdotjs.hex, title: siNextdotjs.title },
  react: { path: siReact.path, hex: siReact.hex, title: siReact.title },
  tailwindcss: { path: siTailwindcss.path, hex: siTailwindcss.hex, title: siTailwindcss.title },
  streamlit: { path: siStreamlit.path, hex: siStreamlit.hex, title: siStreamlit.title },

  // Backend
  flask: { path: siFlask.path, hex: siFlask.hex, title: siFlask.title },
  django: { path: siDjango.path, hex: siDjango.hex, title: siDjango.title },
  nodedotjs: { path: siNodedotjs.path, hex: siNodedotjs.hex, title: siNodedotjs.title },
  express: { path: siExpress.path, hex: siExpress.hex, title: siExpress.title },
  fastapi: { path: siFastapi.path, hex: siFastapi.hex, title: siFastapi.title },

  // Data / Storage
  postgresql: { path: siPostgresql.path, hex: siPostgresql.hex, title: siPostgresql.title },
  mysql: { path: siMysql.path, hex: siMysql.hex, title: siMysql.title },
  mongodb: { path: siMongodb.path, hex: siMongodb.hex, title: siMongodb.title },
  supabase: { path: siSupabase.path, hex: siSupabase.hex, title: siSupabase.title },
  qdrant: { path: siQdrant.path, hex: siQdrant.hex, title: siQdrant.title },

  // Tools / Libraries
  pandas: { path: siPandas.path, hex: siPandas.hex, title: siPandas.title },
  opencv: { path: siOpencv.path, hex: siOpencv.hex, title: siOpencv.title },

  // Infrastructure
  git: { path: siGit.path, hex: siGit.hex, title: siGit.title },
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
