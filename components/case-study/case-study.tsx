import type { Project } from '@/data/types'
import { CaseStudyHero } from './case-study-hero'
import { CaseStudySectionRenderer } from './case-study-section'
import { CaseStudyNextProject } from './case-study-next-project'

export function CaseStudy({ project }: { project: Project }) {
  const content = project.caseStudy

  return (
    <article className="w-full bg-background text-foreground">
      <CaseStudyHero project={project} />

      {content ? (
        <>
          {/* Overview Section */}
          <section className="py-24 md:py-36">
            <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12 lg:gap-16">
                <div className="md:col-span-4 lg:col-span-4 mb-8 md:mb-0">
                  <h2 className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                    OVERVIEW
                  </h2>
                </div>
                <div className="md:col-span-8 lg:col-span-7">
                  <p className="font-sans text-xl md:text-2xl lg:text-3xl leading-relaxed text-foreground text-balance font-medium">
                    {content.overview}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Dynamic Sections */}
          {content.sections.map((section) => (
            <CaseStudySectionRenderer key={section.id} section={section} />
          ))}
        </>
      ) : (
        /* Empty State / Coming Soon */
        <section className="py-32 md:py-48 border-t border-border mt-24">
          <div className="mx-auto flex flex-col items-center justify-center text-center px-6">
            <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase mb-6">
              CASE STUDY
            </span>
            <h2 className="font-sans text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              Coming Soon
            </h2>
          </div>
        </section>
      )}

      <CaseStudyNextProject currentProject={project} />
    </article>
  )
}
