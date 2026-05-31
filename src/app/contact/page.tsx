'use client'

import React, { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

const contactInfo = [
  { label: 'user', value: 'Augustine Okechukwu Chima' },
  { label: 'status', value: 'Available for opportunities' },
  { label: 'location', value: 'Ghana / Remote' },
  { label: 'response', value: 'Typically within 24 hours' },
]

const links = [
  { label: 'Email', href: 'mailto:augustinechima17@gmail.com', brand: false as const },
  { label: 'GitHub', href: 'https://github.com/august-web', brand: true as const },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/august-web/', brand: true as const },
  { label: 'WhatsApp', href: 'https://wa.me/233533027046', brand: true as const },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

const inputBase =
  'w-full border border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_1px_var(--color-accent)] placeholder:text-[var(--color-muted)]/35'

function MailIcon() {
  return (
    <svg
      className="w-[18px] h-[18px] shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
      <rect x="2" y="4" width="20" height="16" rx="2" />
    </svg>
  )
}

function GitHubIcon() {
  return (
    <svg
      className="w-[18px] h-[18px] shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      className="w-[18px] h-[18px] shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg
      className="w-[18px] h-[18px] shrink-0"
      viewBox="0 0 24 24"
      fill="currentColor"
      stroke="none"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
  )
}

const iconMap: Record<string, React.FC> = {
  Email: MailIcon,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  WhatsApp: WhatsAppIcon,
}

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

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
  }

  return (
    <div className="py-12 max-md:py-8">
      <motion.div
        className="mb-14 max-md:mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-4 m-0">
          Get in touch
        </p>
        <h1 className="text-[5.6rem] leading-[0.9] uppercase m-0 mb-4 max-md:text-[3.6rem] max-sm:text-[2.8rem]">
          Contact
        </h1>
        <p className="text-[var(--color-muted)] text-lg max-w-[580px] m-0 max-sm:text-base">
          Have a role, project, or collaboration in mind? Reach out — I&apos;ll get back to you
          within 24 hours.
        </p>
      </motion.div>

      <div className="grid grid-cols-[1fr_1.2fr] gap-10 items-start max-lg:grid-cols-1">
        <motion.div
          className="grid gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.div
            className="border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg overflow-hidden"
            variants={itemVariants}
          >
            <div className="flex gap-2 px-4 py-3.5 border-b border-[var(--color-line)]">
              <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-danger)]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent-2)]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent)]" />
            </div>
            <div className="p-5 font-mono text-sm">
              {contactInfo.map((line) => (
                <p key={line.label} className="mb-4 text-[#cfe3dd] last:mb-0 leading-relaxed">
                  <span className="text-[var(--color-accent)]">$ {line.label}</span>
                  <br />
                  <span className="pl-5">{line.value}</span>
                </p>
              ))}
            </div>
          </motion.div>

          <motion.div className="flex flex-wrap gap-3" variants={itemVariants}>
            {links.map((link) => {
              const Icon = iconMap[link.label]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                  className="border border-[var(--color-line)] bg-white/3 px-4 py-3 text-xs font-extrabold uppercase tracking-wider no-underline text-inherit hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[rgba(102,242,194,0.06)] transition-all duration-200 inline-flex items-center justify-center gap-2 max-sm:w-full max-sm:min-h-12"
                >
                  {Icon && <Icon />}
                  {link.label}
                </a>
              )
            })}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {submitted ? (
            <motion.div
              className="border border-[var(--color-accent)] bg-[rgba(102,242,194,0.06)] p-10 text-center shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <p className="text-[var(--color-accent)] font-bold text-xl m-0 mb-3">Message sent!</p>
              <p className="text-[var(--color-muted)] m-0">
                Thanks for reaching out. I&apos;ll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <div className="border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg overflow-hidden">
              <div className="flex gap-2 px-4 py-3.5 border-b border-[var(--color-line)]">
                <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-danger)]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent-2)]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent)]" />
              </div>

              <form className="p-6 grid gap-5 max-sm:p-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
                  <div className="grid gap-2">
                    <label
                      htmlFor="name"
                      className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-muted)]"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                      placeholder="John Doe"
                      className={inputBase}
                    />
                  </div>
                  <div className="grid gap-2">
                    <label
                      htmlFor="email"
                      className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-muted)]"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                      placeholder="john@example.com"
                      className={inputBase}
                    />
                  </div>
                </div>

                <div className="grid gap-2">
                  <label
                    htmlFor="message"
                    className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-muted)]"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formState.message}
                    onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                    placeholder="Tell me about your project, idea, or how I can help..."
                    className={`${inputBase} resize-y min-h-[130px]`}
                  />
                </div>

                {error && (
                  <motion.p
                    className="text-[var(--color-danger)] text-sm m-0 flex items-center gap-2"
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <span>{error}</span>
                  </motion.p>
                )}

                <button
                  type="submit"
                  className="bg-[var(--color-accent)] text-[#04100c] border border-[var(--color-accent)] px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider cursor-pointer hover:brightness-110 transition-all duration-200 w-fit max-sm:w-full max-sm:min-h-14"
                >
                  Send Your Message
                </button>
              </form>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}
