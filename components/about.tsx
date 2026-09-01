import { about } from '@/data/about'

export function About() {
  return (
    <section id="about" aria-label="About" className="border-t border-border">
      <div className="mx-auto w-full max-w-[100rem] px-6 py-24 md:px-12 md:py-32">

        {/* Section header row */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <div className="md:col-span-3 lg:col-span-4">
            <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground md:mt-1">
              01 — ABOUT
            </p>
          </div>

          {/* Positioning statement + bio */}
          <div className="md:col-span-9 lg:col-span-8">
            <p className="font-sans text-[clamp(1.25rem,2.5vw,2rem)] leading-[1.2] font-semibold tracking-[-0.01em] text-foreground">
              {about.shortBio}
            </p>

            <div className="mt-10 space-y-5 max-w-2xl">
              {about.fullBio.map((para, i) => (
                <p key={i} className="text-sm leading-relaxed text-muted-foreground md:text-base">
                  {para}
                </p>
              ))}
            </div>

            {/* Core focus areas */}
            {about.focus.length > 0 && (
              <div className="mt-14 border-t border-border pt-10">
                <h2 className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground mb-8">
                  CORE FOCUS
                </h2>
                <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {about.focus.map((area) => (
                    <li key={area} className="flex items-baseline gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-[3px] block h-px w-4 shrink-0 bg-accent"
                      />
                      <span className="font-sans text-sm font-medium tracking-tight text-foreground">
                        {area}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  )
}
