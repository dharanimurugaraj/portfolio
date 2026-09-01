import { ArrowUpRight } from '@/components/arrow-up-right'
import { getPublishedProjects } from '@/data/projects'
import type { Project } from '@/data/types'

export function CaseStudyNextProject({ currentProject }: { currentProject: Project }) {
  const published = getPublishedProjects()
  if (published.length <= 1) return null

  const currentIndex = published.findIndex((p) => p.slug === currentProject.slug)
  const nextProject = published[(currentIndex + 1) % published.length]

  return (
    <section className="border-t border-border">
      <a
        href={`/work/${nextProject.slug}`}
        className="group block mx-auto w-full max-w-[100rem] px-6 py-24 md:px-12 md:py-32 transition-colors hover:bg-muted/10"
      >
        <div className="flex flex-col items-center text-center">
          <p className="mb-8 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
            NEXT PROJECT
          </p>
          <div className="flex items-center gap-6">
            <h2 className="font-sans text-[clamp(2rem,5vw,5rem)] font-bold tracking-[-0.02em] text-foreground transition-colors group-hover:text-accent">
              {nextProject.displayTitle}
            </h2>
            <ArrowUpRight className="size-6 md:size-10 text-muted-foreground transition-all duration-300 group-hover:text-accent group-hover:translate-x-2 group-hover:-translate-y-2" />
          </div>
        </div>
      </a>
    </section>
  )
}
