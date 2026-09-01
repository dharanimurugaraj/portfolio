import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getProjectBySlug, getPublishedProjects } from '@/data/projects'
import { CaseStudy } from '@/components/case-study/case-study'
import { SiteNav } from '@/components/site-nav'

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
    <>
      <SiteNav />
      <main>
        <CaseStudy project={project} />
      </main>
      <footer className="dark bg-background text-foreground">
        <div className="mx-auto flex w-full max-w-[100rem] items-baseline justify-between px-6 py-10 md:px-12">
          <span className="font-sans text-sm font-semibold tracking-[0.18em]">DHARANI</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            AI · SOFTWARE · RESEARCH — 2026
          </span>
        </div>
      </footer>
    </>
  )
}
