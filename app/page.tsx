import { Hero } from '@/components/hero'
import { SelectedWork } from '@/components/selected-work'
import { Technology } from '@/components/technology'
import { About } from '@/components/about'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { SiteNav } from '@/components/site-nav'
import { contact } from '@/data/contact'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Technology />
        <SelectedWork />
        <Contact />
      </main>
      <footer className="dark bg-background text-foreground">
        <div className="mx-auto flex w-full max-w-[100rem] items-center justify-between px-6 py-10 md:px-12 flex-wrap gap-6">
          <div className="flex items-baseline gap-4">
            <span className="font-sans text-sm font-semibold tracking-[0.18em]">DHARANI</span>
            <span className="hidden sm:inline font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
              AI · SOFTWARE · RESEARCH — 2026
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/dharanimurugaraj"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/dharani-murugaraj"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              LINKEDIN
            </a>
            <a
              href={contact.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[10px] tracking-[0.25em] text-muted-foreground transition-colors hover:text-accent"
              aria-label="Resume"
            >
              RESUME
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
