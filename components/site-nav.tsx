'use client'

import { useEffect, useState } from 'react'
import { ArrowUpRight } from '@/components/arrow-up-right'

const links = [
  { label: 'WORK', href: '#work' },
  { label: 'ABOUT', href: '#about' },
  { label: 'RESUME', href: '#resume' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? 'border-b border-border bg-background/90 backdrop-blur-sm' : 'border-b border-transparent'
      }`}
    >
      <nav
        aria-label="Primary"
        className={`mx-auto flex w-full max-w-[100rem] items-center justify-between gap-4 px-6 transition-all duration-500 md:px-12 ${
          scrolled ? 'py-4' : 'py-7'
        }`}
      >
        <a
          href="#top"
          className={`font-sans font-semibold tracking-[0.14em] transition-all duration-500 sm:tracking-[0.18em] ${
            scrolled ? 'text-sm' : 'text-sm sm:text-base'
          }`}
        >
          DHARANI
        </a>

        <div className="flex items-center gap-4 sm:gap-6 md:gap-10">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-mono text-[11px] tracking-[0.12em] text-muted-foreground transition-colors hover:text-foreground sm:text-xs sm:tracking-[0.2em]"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground transition-colors hover:text-accent"
          >
            <ArrowUpRight className="size-3.5" />
            <span className="sr-only">GitHub, opens in a new tab</span>
          </a>
        </div>
      </nav>
    </header>
  )
}
