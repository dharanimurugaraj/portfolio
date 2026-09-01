import { getTechByCategory } from '@/data/technologies'
import { projects as allProjects } from '@/data/projects'
import { getTechIcon } from '@/lib/tech-icons'
import type { TechCategory, Technology as TechnologyType } from '@/data/types'

const CATEGORY_LABELS: Record<TechCategory, string> = {
  language: '01  LANGUAGES',
  'ai-ml': '02  AI / ML',
  frontend: '03  FRONTEND',
  backend: '04  BACKEND',
  data: '05  DATA',
  tools: '06  TOOLS',
  infrastructure: '07  INFRASTRUCTURE',
}

const CATEGORY_ORDER: TechCategory[] = [
  'language',
  'ai-ml',
  'frontend',
  'backend',
  'data',
  'tools',
  'infrastructure',
]

function TechItem({ tech }: { tech: TechnologyType }) {
  const icon = getTechIcon(tech.id)

  // Resolve project display titles
  const usedInProjects = tech.projects
    ?.map((slug) => allProjects.find((p) => p.slug === slug)?.displayTitle)
    .filter(Boolean)
    .join(', ')

  return (
    <div className="group flex cursor-default flex-col gap-1 py-1 focus-within:outline-none" tabIndex={0}>
      <div className="flex items-center gap-4">
        {icon ? (
          <svg
            viewBox="0 0 24 24"
            className="size-5 shrink-0 fill-current text-muted-foreground transition-colors duration-300 group-hover:text-foreground group-focus-within:text-foreground"
            aria-hidden="true"
          >
            <path d={icon.path} />
          </svg>
        ) : (
          <div className="flex size-5 shrink-0 items-center justify-center bg-muted/30 text-[8px] font-mono tracking-tighter text-muted-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background group-focus-within:bg-foreground group-focus-within:text-background rounded-sm">
            {tech.name.slice(0, 2).toUpperCase()}
          </div>
        )}
        <span className="font-sans text-sm md:text-base font-medium tracking-tight text-foreground/70 transition-colors duration-300 group-hover:text-foreground group-focus-within:text-foreground">
          {tech.name}
        </span>
      </div>

      {/* Contextual Info - Max height transition for smooth reveal */}
      {usedInProjects && (
        <div className="overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-out group-hover:max-h-12 group-hover:opacity-100 group-hover:mt-1 group-focus-within:max-h-12 group-focus-within:opacity-100 group-focus-within:mt-1">
          <div className="pl-9">
            <span className="block font-mono text-[10px] leading-relaxed tracking-[0.15em] text-muted-foreground/70 uppercase">
              Used in {usedInProjects}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}

export function Technology() {
  return (
    <section id="technology" aria-label="Technology Stack" className="border-t border-border">
      {/* Section Header */}
      <div className="mx-auto w-full max-w-[100rem] px-6 py-24 md:px-12 md:py-32">
        <div className="max-w-2xl mb-24 md:mb-32">
          <p className="mb-6 font-mono text-xs tracking-[0.3em] text-muted-foreground">
            03 — TECHNOLOGY
          </p>
          <h2 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] leading-none font-bold tracking-[-0.02em]">
            TECHNOLOGY
          </h2>
          <p className="mt-6 font-mono text-xs tracking-[0.2em] text-muted-foreground uppercase">
            The stack behind the systems I build.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="flex flex-col">
          {CATEGORY_ORDER.map((categoryId) => {
            const techs = getTechByCategory(categoryId)
            if (techs.length === 0) return null

            return (
              <div
                key={categoryId}
                className="grid grid-cols-1 md:grid-cols-12 gap-8 py-12 border-t border-border first:border-0 first:pt-0"
              >
                <div className="md:col-span-3 lg:col-span-4">
                  <h3 className="font-mono text-xs tracking-[0.3em] text-muted-foreground md:mt-2">
                    {CATEGORY_LABELS[categoryId]}
                  </h3>
                </div>
                <div className="md:col-span-9 lg:col-span-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-8">
                    {techs.map((tech) => (
                      <TechItem key={tech.id} tech={tech} />
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
