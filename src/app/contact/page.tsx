'use client'

import React, { useEffect, useRef, useState, FormEvent } from 'react'
import { ArrowUpRight, CheckCircle2, Send } from 'lucide-react'
import { iconMap } from '../../components/ui/Icons'

const contactInfo = [
  { label: 'Name', value: 'Augustine Okechukwu Chima' },
  { label: 'Availability', value: 'Available for opportunities' },
  { label: 'Based in', value: 'Ghana / Remote' },
  { label: 'Response', value: 'Typically within 24 hours' },
]

const links = [
  { label: 'Email', href: 'mailto:augustinechima17@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/august-web' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/august-web/' },
  { label: 'WhatsApp', href: 'https://wa.me/233533027046' },
]

const inputBase =
  'w-full min-h-12 rounded-lg border border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-3 text-base text-[var(--color-text)] transition-colors focus:border-[var(--color-accent)] focus:outline-2 focus:outline-offset-2 focus:outline-[var(--color-accent)] placeholder:text-[var(--color-muted)] motion-reduce:transition-none'

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const [sending, setSending] = useState(false)
  const successRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (submitted) successRef.current?.focus({ preventScroll: true })
  }, [submitted])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSending(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })

      if (res.ok) {
        setSubmitted(true)
        setFormState({ name: '', email: '', message: '' })
      } else {
        const data = await res.json()
        setError(data.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="py-12 md:py-16">
      <header className="mb-10 md:mb-12">
        <h1 className="m-0 text-4xl leading-tight tracking-tight md:text-6xl">Contact</h1>
        <p className="mt-4 mb-0 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
          Have a role, project, or collaboration in mind? Reach out — I&apos;ll get back to you
          within 24 hours.
        </p>
      </header>

      <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <aside className="min-w-0 lg:pt-2">
          <h2 className="m-0 text-xl font-medium">Get in touch</h2>
          <a
            href="mailto:augustinechima17@gmail.com"
            className="mt-4 inline-flex min-h-11 max-w-full items-center gap-3 text-base text-[var(--color-accent)] underline decoration-[var(--color-line)] hover:decoration-current sm:text-lg"
          >
            <span className="min-w-0 break-all">augustinechima17@gmail.com</span>
            <ArrowUpRight size={18} className="shrink-0" aria-hidden="true" />
          </a>
          <dl className="my-8 border-y border-[var(--color-line)] py-6 text-sm">
            {contactInfo.map((line) => (
              <div key={line.label} className="grid gap-1 py-2 sm:grid-cols-[100px_1fr] sm:gap-4">
                <dt className="text-[var(--color-muted)]">{line.label}</dt>
                <dd className="m-0 leading-relaxed">{line.value}</dd>
              </div>
            ))}
          </dl>
          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {links.map((link) => {
              const Icon = iconMap[link.label]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-accent)] motion-reduce:transition-none"
                >
                  <span aria-hidden="true">{Icon && <Icon />}</span>
                  {link.label}
                </a>
              )
            })}
          </div>
        </aside>

        <div className="min-w-0">
          {submitted ? (
            <div
              ref={successRef}
              role="status"
              tabIndex={-1}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 sm:p-8"
            >
              <CheckCircle2
                size={32}
                className="mb-5 text-[var(--color-accent)]"
                aria-hidden="true"
              />
              <h2 className="m-0 mb-3 text-2xl font-medium">Message sent!</h2>
              <p className="m-0 text-base leading-relaxed text-[var(--color-muted)]">
                Thanks for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 sm:p-8">
              <h2 id="contact-form-heading" className="m-0 mb-6 text-2xl font-medium">
                Send a message
              </h2>
              <form
                className="grid gap-5"
                onSubmit={handleSubmit}
                aria-labelledby="contact-form-heading"
                aria-busy={sending}
              >
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <div className="grid gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-[var(--color-text)]">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      placeholder="John Doe"
                      className={inputBase}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-[var(--color-text)]">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      placeholder="john@example.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-[var(--color-text)]">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell me about your project, idea, or how I can help..."
                    className={`${inputBase} resize-y min-h-[130px]`}
                  />
                </div>

                {error && (
                  <p
                    className="m-0 rounded-lg border border-[var(--color-danger)] p-4 text-sm leading-relaxed text-[var(--color-danger)]"
                    role="alert"
                  >
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-[var(--color-accent)] bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-on-accent)] transition-colors hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none sm:w-fit"
                >
                  <Send size={16} aria-hidden="true" />
                  {sending ? 'Sending...' : 'Send Your Message'}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
