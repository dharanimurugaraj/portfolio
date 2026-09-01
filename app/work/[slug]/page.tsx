import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getPublishedProjects } from '@/data/projects'

interface Props {
  params: Promise<{ slug: string }>
}

// Statically generate all published project routes at build time.
export function generateStaticParams() {
  return getPublishedProjects().map((p) => ({ slug: p.slug }))
}

// Generate per-page metadata from the project data.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    return { title: 'Project Not Found' }
  }

  return {
    title: `${project.displayTitle} — Dharani`,
    description: project.summary,
    openGraph: {
      title: `${project.displayTitle} — Dharani`,
      description: project.summary,
      images: project.ogImage ? [project.ogImage] : project.image ? [project.image] : [],
    },
  }
}

export default async function WorkPage({ params }: Props) {
  const { slug } = await params
  const project = getProjectBySlug(slug)

  if (!project) {
    notFound()
  }

  return (
    <main className="mx-auto w-full max-w-[100rem] px-6 pb-28 pt-36 md:px-12">
      {/* Minimal case study scaffold — full design deferred to Phase 3 */}
      <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">{project.index}</p>
      <h1 className="mt-6 font-sans text-[clamp(2.5rem,6vw,6rem)] font-bold leading-[0.93] tracking-[-0.03em]">
        {project.title.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </h1>
      <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">{project.summary}</p>

      {/* Links */}
      {project.links.length > 0 && (
        <div className="mt-10 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border-b border-border pb-1 font-mono text-xs tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {link.label} ↗
            </a>
          ))}
        </div>
      )}

      {/* Case study placeholder — content to be added in Phase 3 */}
      {!project.caseStudy && (
        <div className="mt-24 border-t border-border pt-12">
          <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">CASE STUDY — COMING SOON</p>
        </div>
      )}
    </main>
  )
}
