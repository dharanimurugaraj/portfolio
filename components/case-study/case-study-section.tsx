import Image from 'next/image'
import type { CaseStudySection } from '@/data/types'

export function CaseStudySectionRenderer({ section }: { section: CaseStudySection }) {
  return (
    <section id={section.id} className="border-t border-border py-20 md:py-32">
      <div className="mx-auto w-full max-w-[100rem] px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 md:gap-12 lg:gap-16">
          {/* Header Column */}
          <div className="md:col-span-4 lg:col-span-4 mb-12 md:mb-0">
            {section.eyebrow && (
              <p className="mb-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase">
                {section.eyebrow}
              </p>
            )}
            <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-foreground text-balance">
              {section.title}
            </h2>
          </div>

          {/* Content Column */}
          <div className="md:col-span-8 lg:col-span-7">
            {/* Prose */}
            <div className="flex flex-col gap-6 font-sans text-base md:text-lg leading-relaxed text-muted-foreground">
              {section.content.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>

            {/* Optional Metrics */}
            {section.metrics && section.metrics.length > 0 && (
              <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-8 border-y border-border py-8">
                {section.metrics.map((metric, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <span className="font-mono text-xs tracking-[0.1em] text-muted-foreground uppercase">
                      {metric.label}
                    </span>
                    <span className="font-sans text-2xl font-bold text-foreground">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Optional Figures */}
            {section.figures && section.figures.length > 0 && (
              <div className="mt-16 flex flex-col gap-12">
                {section.figures.map((figure, i) => {
                  const aspectClass =
                    figure.aspect === 'square'
                      ? 'aspect-square'
                      : figure.aspect === 'portrait'
                      ? 'aspect-[4/5]'
                      : 'aspect-[16/9]'

                  return (
                    <figure key={i} className="flex flex-col gap-4">
                      <div className={`relative w-full overflow-hidden border border-border bg-muted/10 ${aspectClass}`}>
                        <Image
                          src={figure.src || '/placeholder.svg'}
                          alt={figure.alt}
                          fill
                          className="object-cover"
                        />
                      </div>
                      {figure.caption && (
                        <figcaption className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                          {figure.caption}
                        </figcaption>
                      )}
                    </figure>
                  )
                })}
              </div>
            )}

            {/* Optional Code Block */}
            {section.codeBlock && (
              <div className="mt-16 flex flex-col gap-3">
                {section.codeBlock.caption && (
                  <p className="font-mono text-[10px] tracking-[0.15em] text-muted-foreground uppercase">
                    {section.codeBlock.caption}
                  </p>
                )}
                <div className="overflow-x-auto border border-border bg-muted/5 p-6 rounded-sm">
                  <pre className="font-mono text-sm leading-relaxed text-foreground">
                    <code>{section.codeBlock.code}</code>
                  </pre>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
