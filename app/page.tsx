import { Hero } from '@/components/hero'
import { SelectedWork } from '@/components/selected-work'
import { SiteNav } from '@/components/site-nav'

export default function Home() {
  return (
    <>
      <SiteNav />
      <main>
        <Hero />
        <SelectedWork />
      </main>
      <footer className="dark bg-background text-foreground">
        <div className="mx-auto flex w-full max-w-[100rem] items-baseline justify-between px-6 py-10 md:px-12">
          <span className="font-sans text-sm font-semibold tracking-[0.18em]">DHARANI</span>
          <span className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground">
            AI · SOFTWARE · RESEARCH — 2026
          </span>
        </div>
      </footer>
    </>
  )
}
