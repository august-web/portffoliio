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
  { label: 'Email', href: 'mailto:augustinechima17@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/august-web' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/august-web/' },
  { label: 'WhatsApp', href: 'https://wa.me/233533027046' },
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
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto') ? undefined : '_blank'}
                rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
                className="border border-[var(--color-line)] bg-white/3 px-4 py-3 text-xs font-extrabold uppercase tracking-wider no-underline text-inherit hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] hover:bg-[rgba(102,242,194,0.06)] transition-all duration-200 inline-flex items-center justify-center max-sm:w-full max-sm:min-h-12"
              >
                {link.label}
              </a>
            ))}
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
