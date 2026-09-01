'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { contact } from '@/data/contact'
import { ArrowUpRight } from '@/components/arrow-up-right'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    const form = e.currentTarget
    
    // Fallback if environment variables are not configured
    if (
      !process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
      !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    ) {
      console.warn('EmailJS environment variables are missing. Triggering fallback error state.')
      setStatus('error')
      setErrorMessage('Email service is not configured correctly.')
      return
    }

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      form.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again or use the direct email link.')
    }
  }

  return (
    <section id="contact" aria-label="Contact" className="border-t border-border">
      <div className="mx-auto w-full max-w-[100rem] px-6 py-24 md:px-12 md:py-32">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Column: Heading & Socials */}
          <div className="flex flex-col justify-between lg:col-span-5">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground">
                {contact.eyebrow}
              </p>
              <h2 className="mt-6 font-sans text-[clamp(2.5rem,5vw,4.5rem)] leading-none font-bold tracking-[-0.02em]">
                {contact.heading}
              </h2>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground md:text-base">
                {contact.supportingText}
              </p>
              
              <div className="mt-10">
                <a
                  href={`mailto:${contact.email}`}
                  className="group inline-flex items-center gap-2 border-b border-border pb-1 font-mono text-xs tracking-[0.2em] text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  {contact.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-16 flex items-center gap-8">
              <a
                href={contact.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-muted-foreground transition-colors hover:text-accent"
              >
                GITHUB
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="size-3" />
                </span>
                <span className="sr-only">, opens in a new tab</span>
              </a>
              <a
                href={contact.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-muted-foreground transition-colors hover:text-accent"
              >
                LINKEDIN
                <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="size-3" />
                </span>
                <span className="sr-only">, opens in a new tab</span>
              </a>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-6 lg:col-start-7 lg:mt-0 mt-8">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <label htmlFor="user_name" className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    disabled={status === 'sending' || status === 'success'}
                    className="border-b border-border bg-transparent pb-3 pt-2 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none disabled:opacity-50"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="user_email" className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="user_email"
                    name="user_email"
                    required
                    disabled={status === 'sending' || status === 'success'}
                    className="border-b border-border bg-transparent pb-3 pt-2 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none disabled:opacity-50"
                    placeholder="jane@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="subject" className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                  SUBJECT
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  disabled={status === 'sending' || status === 'success'}
                  className="border-b border-border bg-transparent pb-3 pt-2 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none disabled:opacity-50"
                  placeholder="What's this regarding?"
                />
              </div>

              <div className="flex flex-col gap-2 mt-4">
                <label htmlFor="message" className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  disabled={status === 'sending' || status === 'success'}
                  className="min-h-[120px] resize-y border-b border-border bg-transparent pb-3 pt-2 font-sans text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-foreground focus:outline-none disabled:opacity-50"
                  placeholder="Hello..."
                />
              </div>

              <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="group inline-flex items-center gap-3 bg-primary px-7 py-4 font-mono text-xs tracking-[0.25em] text-primary-foreground transition-colors hover:bg-accent hover:text-accent-foreground disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {status === 'sending' ? 'SENDING...' : status === 'success' ? 'SENT' : contact.ctaText}
                  {status !== 'sending' && status !== 'success' && (
                    <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  )}
                </button>

                {/* Status Messages */}
                {status === 'success' && (
                  <p className="font-mono text-[10px] tracking-[0.2em] text-accent" role="status">
                    MESSAGE SENT SUCCESSFULLY.
                  </p>
                )}
                {status === 'error' && (
                  <div className="flex flex-col gap-1 sm:text-right" role="alert">
                    <p className="font-mono text-[10px] tracking-[0.2em] text-red-500">
                      {errorMessage}
                    </p>
                    <a
                      href={`mailto:${contact.email}`}
                      className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground underline hover:text-foreground"
                    >
                      Use direct email instead
                    </a>
                  </div>
                )}
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  )
}
