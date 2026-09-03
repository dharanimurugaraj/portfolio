'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import { contact } from '@/data/contact'

const links = [
  { label: 'ABOUT', href: '#about' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'TECH STACK', href: '#technology' },
  { label: 'WORK', href: '#work' },
  { label: 'CONTACT', href: '#contact' },
]

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  function getRouteAwareHref(hash: string) {
    if (hash.startsWith('#')) {
      return isHome ? hash : `/${hash}`
    }
    return hash
  }

  function closeMenu() {
    setMobileMenuOpen(false)
  }

  return (
    <>
      {/* ── Header bar ─────────────────────────────────────────────────────── */}
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'border-b border-border bg-background/90 backdrop-blur-sm'
            : 'border-b border-transparent'
        }`}
      >
        <nav
          aria-label="Primary"
          className={`mx-auto flex w-full max-w-[100rem] items-center justify-between gap-4 px-6 transition-all duration-500 md:px-12 ${
            scrolled ? 'py-4' : 'py-7'
          }`}
        >
          <a
            href={isHome ? '#top' : '/'}
            className={`font-sans font-semibold tracking-[0.14em] transition-all duration-500 sm:tracking-[0.18em] ${
              scrolled ? 'text-sm' : 'text-sm sm:text-base'
            }`}
            onClick={closeMenu}
          >
            DHARANI
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 md:flex lg:gap-10">
            {links.map((link) => (
              <a
                key={link.label}
                href={getRouteAwareHref(link.href)}
                className="font-mono text-xs tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://github.com/dharanimurugaraj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub, opens in a new tab"
              className="font-mono text-xs tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              GITHUB
            </a>
            <a
              href="https://www.linkedin.com/in/dharani-murugaraj"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn, opens in a new tab"
              className="font-mono text-xs tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              LINKEDIN
            </a>
            <a
              href={contact.socials.resume}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume, opens in a new tab"
              className="font-mono text-xs tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              RESUME
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className="flex flex-col items-center justify-center gap-[4px] p-2 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label="Toggle navigation menu"
          >
            <span
              className={`block h-[1px] w-5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? 'translate-y-[5px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[1px] w-5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[1px] w-5 bg-foreground transition-all duration-300 ${
                mobileMenuOpen ? '-translate-y-[5px] -rotate-45' : ''
              }`}
            />
          </button>
        </nav>
      </header>

      {/* ── Mobile backdrop ─────────────────────────────────────────────────
           z-[60]: above page content (z-0), below the drawer (z-[70])        */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/50 md:hidden"
          aria-hidden="true"
          onClick={closeMenu}
        />
      )}

      {/* ── Mobile Navigation Drawer ──────────────────────────────────────────
           z-[70]: highest layer — fully opaque, sits above the backdrop        */}
      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-label="Navigation menu"
        aria-modal="true"
        className={`fixed inset-y-0 right-0 z-[70] flex w-full max-w-xs flex-col justify-between bg-background px-6 pb-12 pt-24 shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex flex-col gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={getRouteAwareHref(link.href)}
              onClick={closeMenu}
              className="font-mono text-sm tracking-[0.2em] text-foreground transition-colors hover:text-muted-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex gap-8 border-t border-border pt-8">
          <a
            href="https://github.com/dharanimurugaraj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub, opens in a new tab"
            className="font-mono text-sm tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/dharani-murugaraj"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn, opens in a new tab"
            className="font-mono text-sm tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            LINKEDIN
          </a>
          <a
            href={contact.socials.resume}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Resume, opens in a new tab"
            className="font-mono text-sm tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            RESUME
          </a>
        </div>
      </div>
    </>
  )
}
