import { experience } from '@/data/experience'
import { getTechById } from '@/data/technologies'

function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split('-')
  const date = new Date(parseInt(year), parseInt(month) - 1)
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
}

function formatDuration(startDate: string, endDate?: string): string {
  const start = formatDate(startDate)
  const end = endDate ? formatDate(endDate) : 'Present'
  return `${start} — ${end}`
}

export function Experience() {
  if (experience.length === 0) return null

  return (
    <section id="experience" aria-label="Experience" className="border-t border-border">
      <div className="mx-auto w-full max-w-[100rem] px-6 py-24 md:px-12 md:py-32">

        {experience.map((item, idx) => (
          <div
            key={`${item.organization}-${idx}`}
            className="grid grid-cols-1 gap-8 md:grid-cols-12"
          >
            {/* Left column: section index */}
            <div className="md:col-span-3 lg:col-span-4">
              <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground md:mt-1">
                02 — EXPERIENCE
              </p>
            </div>

            {/* Right column: role details */}
            <div className="md:col-span-9 lg:col-span-8">

              {/* Organization + role header */}
              <div className="flex flex-col gap-2">
                <h2 className="font-sans text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.0] font-bold tracking-[-0.02em] text-foreground">
                  {item.organization}
                </h2>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 mt-1">
                  <h3 className="font-sans text-base font-semibold text-foreground/80">
                    {item.role}
                  </h3>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground uppercase">
                    {item.type}
                  </span>
                </div>
                <div className="flex flex-wrap items-baseline gap-x-6 gap-y-1 mt-1">
                  <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                    {formatDuration(item.startDate, item.endDate)}
                  </span>
                  {item.location && (
                    <span className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                      {item.location}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="mt-8 text-sm leading-relaxed text-muted-foreground md:text-base max-w-2xl">
                {item.description}
              </p>

              {/* Achievements */}
              {item.achievements && item.achievements.length > 0 && (
                <ul className="mt-6 space-y-3 max-w-2xl" aria-label="Responsibilities">
                  {item.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <span
                        aria-hidden="true"
                        className="mt-[9px] block h-px w-4 shrink-0 bg-border"
                      />
                      <span className="text-sm leading-relaxed text-muted-foreground">
                        {achievement}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {/* Technology tags */}
              {item.technologies && item.technologies.length > 0 && (
                <div className="mt-8 flex flex-wrap gap-2">
                  {item.technologies.map((techId) => {
                    const tech = getTechById(techId)
                    return (
                      <span
                        key={techId}
                        className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground border border-border px-3 py-1 uppercase"
                      >
                        {tech?.name ?? techId}
                      </span>
                    )
                  })}
                </div>
              )}

            </div>
          </div>
        ))}

      </div>
    </section>
  )
}
