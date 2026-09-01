import Image from 'next/image'
import { ArrowUpRight } from '@/components/arrow-up-right'
import { getFeaturedProjects } from '@/data/projects'
import type { Project } from '@/data/types'

function ProjectMeta({ project, className = '' }: { project: Project; className?: string }) {
  return (
    <div className={`flex items-baseline justify-between border-t border-border pt-4 ${className}`}>
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
          {project.tags.join(' / ')}
        </span>
      </div>
      <div className="flex items-baseline gap-6">
        <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">{project.year}</span>
        <span className="text-foreground transition-colors group-hover:text-accent">
          <ArrowUpRight />
        </span>
      </div>
    </div>
  )
}

function FeatureSpread({ project, flip }: { project: Project; flip?: boolean }) {
  return (
    <a href={`/work/${project.slug}`} className="group block">
      <article className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        {/* Index + title column */}
        <div className={`flex flex-col justify-between lg:col-span-5 ${flip ? 'lg:order-2 lg:col-start-8' : ''}`}>
          <div>
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">{project.index}</span>
            <h3 className="mt-6 font-sans text-[clamp(2rem,4.5vw,4.25rem)] leading-[0.95] font-bold tracking-[-0.02em]">
              {project.title.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
              {project.summary}
            </p>
          </div>
          <ProjectMeta project={project} className="mt-10 lg:hidden" />
        </div>

        {/* Visual column */}
        <div className={`lg:col-span-7 ${flip ? 'lg:order-1 lg:col-start-1' : ''}`}>
          <div className="overflow-hidden border border-border">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.imageAlt}
              width={1400}
              height={1000}
              className="aspect-[7/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <ProjectMeta project={project} className="mt-4 hidden lg:flex" />
        </div>
      </article>
    </a>
  )
}

function ResearchSpread({ project }: { project: Project }) {
  return (
    <a href={`/work/${project.slug}`} className="group block">
      <article className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4 lg:col-start-2">
          <div className="overflow-hidden border border-border">
            <Image
              src={project.image || '/placeholder.svg'}
              alt={project.imageAlt}
              width={900}
              height={1100}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </div>
          <p className="mt-3 font-mono text-[10px] leading-relaxed tracking-[0.15em] text-muted-foreground">
            FIG. {project.index} — SEGMENTATION OUTPUT, VALIDATION SET
          </p>
        </div>
        <div className="flex flex-col justify-center lg:col-span-5 lg:col-start-7">
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">{project.index}</span>
          <h3 className="mt-6 font-sans text-[clamp(1.75rem,3.5vw,3.25rem)] leading-[0.95] font-bold tracking-[-0.02em]">
            {project.title.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h3>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">{project.summary}</p>
          <ProjectMeta project={project} className="mt-10 max-w-sm" />
        </div>
      </article>
    </a>
  )
}

function SupportingRow({ project }: { project: Project }) {
  return (
    <a href={`/work/${project.slug}`} className="group block border-t border-border py-10">
      <article className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12">
        <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground lg:col-span-1">{project.index}</span>
        <h3 className="font-sans text-2xl font-bold tracking-[-0.02em] md:text-3xl lg:col-span-4">
          {project.title.join(' ')}
        </h3>
        <p className="max-w-sm text-sm leading-relaxed text-muted-foreground lg:col-span-4">{project.summary}</p>
        <div className="lg:col-span-3 lg:justify-self-end">
          <div className="flex items-baseline gap-6">
            <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground">
              {project.tags.join(' / ')} · {project.year}
            </span>
            <span className="transition-colors group-hover:text-accent">
              <ArrowUpRight />
            </span>
          </div>
        </div>
      </article>
    </a>
  )
}

export function SelectedWork() {
  const projects = getFeaturedProjects()
  const light = projects.filter((p) => !p.dark)
  const featureLight = light.filter((p) => p.emphasis === 'feature')
  const research = light.filter((p) => p.emphasis === 'research')
  const supporting = light.filter((p) => p.emphasis === 'supporting')
  const darkFeatures = projects.filter((p) => p.dark)

  return (
    <section id="work" aria-label="Selected work">
      {/* Section header */}
      <div className="mx-auto w-full max-w-[100rem] px-6 pt-28 md:px-12 md:pt-36">
        <div className="flex items-baseline justify-between">
          <h2 className="font-sans text-sm font-semibold tracking-[0.3em]">04 — SELECTED WORK</h2>
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            {String(projects.length).padStart(2, '0')} PROJECTS / 2025—2026
          </span>
        </div>
        <div className="mt-6 h-px w-full bg-border" />
      </div>

      {/* 01 — Fincore, light feature spread */}
      <div className="mx-auto w-full max-w-[100rem] px-6 py-24 md:px-12 md:py-32">
        {featureLight.map((p) => (
          <FeatureSpread key={p.slug} project={p} />
        ))}
      </div>

      {/* 02 — LLM Evaluation Framework, full dark section */}
      {darkFeatures.map((p) => (
        <div key={p.slug} className="dark bg-background text-foreground">
          <div className="mx-auto w-full max-w-[100rem] px-6 py-24 md:px-12 md:py-32">
            <FeatureSpread project={p} flip />
          </div>
        </div>
      ))}

      {/* 03 — MedVision, research treatment */}
      <div className="mx-auto w-full max-w-[100rem] px-6 py-24 md:px-12 md:py-32">
        {research.map((p) => (
          <ResearchSpread key={p.slug} project={p} />
        ))}
      </div>

      {/* 04 — FinQuery */}
      <div className="mx-auto w-full max-w-[100rem] px-6 py-24 md:px-12 md:py-32">
        {supporting.map((p) => (
          <FeatureSpread key={p.slug} project={p} flip />
        ))}
      </div>
    </section>
  )
}
