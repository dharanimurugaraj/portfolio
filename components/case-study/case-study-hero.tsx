import Image from 'next/image'
import { ArrowUpRight } from '@/components/arrow-up-right'
import { getTechById } from '@/data/technologies'
import { getTechIcon } from '@/lib/tech-icons'
import type { Project } from '@/data/types'

export function CaseStudyHero({ project }: { project: Project }) {
  const categoryLabel = project.category.toUpperCase()

  return (
    <section className="border-b border-border">
      <div className="mx-auto w-full max-w-[100rem] px-6 pt-36 md:px-12">
        {/* Top metadata row */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 mb-16 md:mb-24">
          <div className="flex items-baseline gap-6">
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
              {project.index} — {categoryLabel}
            </span>
            <span aria-hidden="true" className="hidden h-px w-8 bg-border sm:block" />
            <span className="hidden font-mono text-xs tracking-[0.3em] text-muted-foreground sm:inline">
              {project.year}
            </span>
          </div>
        </div>

        {/* Display Typography */}
        <div className="max-w-5xl mb-12 md:mb-20">
          <h1 className="font-sans text-[clamp(2.5rem,7vw,7.5rem)] font-bold leading-[0.93] tracking-[-0.03em] text-balance">
            {project.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>
          <p className="mt-8 md:mt-12 max-w-2xl font-sans text-lg md:text-xl leading-relaxed text-muted-foreground">
            {project.tagline}
          </p>
        </div>

        {/* Lower metadata grid */}
        <div className="grid grid-cols-1 gap-12 border-t border-border py-12 md:grid-cols-12 md:gap-8">
          {/* Stack */}
          <div className="md:col-span-8 lg:col-span-9">
            <h2 className="mb-6 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
              Technology Stack
            </h2>
            <div className="flex flex-wrap gap-x-6 gap-y-4">
              {project.technologies.map((techId) => {
                const tech = getTechById(techId)
                if (!tech) return null
                const icon = getTechIcon(tech.id)

                return (
                  <div key={tech.id} className="flex items-center gap-2.5">
                    {icon ? (
                      <svg
                        viewBox="0 0 24 24"
                        className="size-4 shrink-0 fill-current text-muted-foreground"
                        aria-hidden="true"
                      >
                        <path d={icon.path} />
                      </svg>
                    ) : (
                      <div className="flex h-4 min-w-4 shrink-0 items-center justify-center bg-muted/30 px-1 text-[6px] font-mono font-semibold tracking-tight text-muted-foreground rounded-[2px]">
                        {tech.name.toUpperCase()}
                      </div>
                    )}
                    <span className="font-mono text-[11px] tracking-wide text-foreground">
                      {tech.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Links */}
          {project.links.length > 0 && (
            <div className="md:col-span-4 lg:col-span-3">
              <h2 className="mb-6 font-mono text-[10px] tracking-[0.2em] text-muted-foreground uppercase">
                Links
              </h2>
              <div className="flex flex-col gap-3 items-start">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 border-b border-border pb-1 font-mono text-xs tracking-[0.15em] text-foreground transition-colors hover:border-accent hover:text-accent"
                  >
                    {link.label.toUpperCase()}
                    <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Hero Visual */}
      <div className="w-full border-t border-border">
        <div className="mx-auto w-full max-w-[100rem]">
          <div className="aspect-[21/9] w-full overflow-hidden bg-muted/20 relative">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.imageAlt}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
