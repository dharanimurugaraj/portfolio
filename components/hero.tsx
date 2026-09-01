import { ArrowUpRight } from '@/components/arrow-up-right'
import { HeroVisual } from '@/components/hero-visual'

const heroLines = ['DHARANI', 'MURUGARAJ']
const stages = ['RESEARCH', 'MODELS', 'SYSTEMS', 'PRODUCTS']

export function Hero() {
  return (
    <section id="top" className="relative min-h-svh overflow-hidden">
      {/* Interactive network visual — right-weighted, behind type */}
      <div
        className="reveal pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block"
        style={{ ['--reveal-delay' as string]: '1.5s' }}
      >
        <HeroVisual className="h-full w-full text-foreground" />
        {/* stage labels beside the network */}
        <div className="absolute inset-y-0 right-6 flex flex-col justify-center gap-0 md:right-12">
          {stages.map((stage, i) => (
            <div key={stage} className="flex flex-col items-end">
              <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">{stage}</span>
              {i < stages.length - 1 && (
                <span aria-hidden="true" className="my-3 font-mono text-[10px] text-muted-foreground/60">
                  ↓
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="relative mx-auto flex min-h-svh w-full max-w-[100rem] flex-col justify-center px-6 pt-28 pb-16 md:px-12">
        {/* Editorial Statement */}
        <div className="reveal mb-10 flex items-baseline gap-6" style={{ ['--reveal-delay' as string]: '0.5s' }}>
          <span className="font-mono text-xs tracking-[0.3em] text-muted-foreground">BUILDING INTELLIGENT SYSTEMS.</span>
        </div>

        {/* Display typography with staggered line reveals */}
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="font-sans text-[clamp(3.25rem,11vw,10.5rem)] leading-[0.92] font-bold tracking-[-0.03em] text-balance">
            {heroLines.map((line, i) => (
              <span
                key={line}
                className="reveal-clip block"
                style={{ ['--reveal-delay' as string]: `${0.7 + i * 0.12}s` }}
              >
                <span>{line}</span>
              </span>
            ))}
          </h1>
          <p
            className="reveal font-mono text-sm tracking-[0.2em] text-foreground sm:text-base md:mt-2"
            style={{ ['--reveal-delay' as string]: '1.0s' }}
          >
            AI FULL-STACK DEVELOPER
          </p>
        </div>

        {/* Supporting statement */}
        <p
          className="reveal mt-10 max-w-md font-sans text-base leading-relaxed text-muted-foreground md:text-lg"
          style={{ ['--reveal-delay' as string]: '1.2s' }}
        >
          I design and build intelligent products and systems — carrying ideas from research concepts to
          functioning software.
        </p>

        {/* CTAs */}
        <div
          className="reveal mt-12 flex flex-wrap items-center gap-8"
          style={{ ['--reveal-delay' as string]: '1.7s' }}
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 bg-primary px-7 py-4 font-mono text-xs tracking-[0.25em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
          >
            EXPLORE WORK
            <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
          <a
            href="https://github.com/dharanimurugaraj"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 border-b border-border pb-1 font-mono text-xs tracking-[0.25em] text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            GITHUB
            <ArrowUpRight />
            <span className="sr-only">, opens in a new tab</span>
          </a>
        </div>

        {/* Bottom hairline + scroll cue */}
        <div className="absolute inset-x-6 bottom-0 md:inset-x-12">
          <div className="reveal-rule h-px w-full bg-border" style={{ ['--reveal-delay' as string]: '1.9s' }} />
          <div
            className="reveal flex items-baseline justify-between py-4 font-mono text-[10px] tracking-[0.3em] text-muted-foreground"
            style={{ ['--reveal-delay' as string]: '2s' }}
          >
            <span>SELECTED WORK</span>
            <span>SCROLL ↓</span>
          </div>
        </div>
      </div>
    </section>
  )
}
