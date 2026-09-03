// ─────────────────────────────────────────────────────────────────────────────
// data/contact.ts
// Contact section content and configuration.
// ─────────────────────────────────────────────────────────────────────────────

export interface ContactData {
  eyebrow: string
  heading: string
  supportingText: string
  email: string
  ctaText: string
  socials: {
    github: string
    linkedin: string
    resume: string
  }
}

export const contact: ContactData = {
  eyebrow: '05 — CONTACT',
  heading: "Let's build something that works.",
  supportingText:
    'Whether you are building complex software systems, exploring AI integration, or looking for an engineer who spans research and production — my inbox is open.',
  email: 'dharanimurugaraj@gmail.com',
  ctaText: 'SEND ME A MESSAGE',
  socials: {
    github: 'https://github.com/dharanimurugaraj',
    linkedin: 'https://www.linkedin.com/in/dharani-murugaraj',
    resume: 'https://drive.google.com/file/d/1dGFTsNhMgNzPw9flyOE2F-smEoCpbXk6/view?usp=sharing',
  },
}
