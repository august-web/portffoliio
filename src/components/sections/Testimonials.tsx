'use client'

import React, { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    quote:
      'Augustine is one of the most detail-oriented developers I have worked with. His ability to translate complex requirements into clean, intuitive interfaces is remarkable.',
    author: 'Samuel Antwi',
    role: 'Software Engineer, Peer',
  },
  {
    quote:
      'Working with Augustine on several projects has been a great experience. He brings a level of craftsmanship and care to every component he builds.',
    author: 'Michael Mensah',
    role: 'Collaborator',
  },
  {
    quote:
      'Augustine has a sharp eye for design and a deep understanding of frontend architecture. His work consistently exceeds expectations.',
    author: 'David Osei',
    role: 'Colleague',
  },
  {
    quote:
      'I am continually impressed by Augustine\x27s ability to solve problems creatively while maintaining clean, maintainable code. A true professional.',
    author: 'Jennifer Ankrah',
    role: 'Project Partner',
  },
]

const vibes = ['🔥', '💯', '🫡', '✨', '🚀', '💎']

function QuoteIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="var(--color-accent)"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
      <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
    </svg>
  )
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
}

export default function Testimonials() {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [selectedVibe, setSelectedVibe] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')
    setSending(true)

    try {
      const res = await fetch('/api/testimonials', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, message, vibe: selectedVibe }),
      })

      if (res.ok) {
        setSubmitted(true)
        setName('')
        setMessage('')
        setSelectedVibe('')
      } else {
        const data = await res.json()
        setError(data.error || 'Something went wrong.')
      }
    } catch {
      setError('Network error. Try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section
      className="py-[82px] border-t border-[var(--color-line)] max-md:py-[58px]"
      id="testimonials"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-4 m-0 max-sm:text-[0.72rem]">
          Kind Words
        </p>
        <h2 className="max-w-[820px] mb-12 text-[4.25rem] leading-none m-0 max-md:text-[2.7rem] max-sm:text-[2.1rem] max-sm:leading-[1.04] max-sm:mb-8">
          What people say about working with me.
        </h2>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 gap-4 mb-16 max-md:grid-cols-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
      >
        {testimonials.map((item) => (
          <motion.div
            key={item.author}
            className="relative flex flex-col border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg p-6 transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:shadow-[0_32px_100px_rgba(0,0,0,0.35)]"
            variants={cardVariants}
          >
            <div className="mb-4">
              <QuoteIcon />
            </div>
            <blockquote className="text-[var(--color-muted)] text-sm leading-relaxed m-0 mb-5 flex-1">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3 pt-4 border-t border-[var(--color-line)]">
              <div className="w-9 h-9 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 flex items-center justify-center shrink-0">
                <span className="text-[11px] font-extrabold text-[var(--color-accent)]">
                  {item.author
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
              </div>
              <div className="min-w-0">
                <p className="text-[13px] font-bold text-[var(--color-text)] m-0 leading-tight truncate">
                  {item.author}
                </p>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-muted)] m-0 leading-tight mt-0.5 truncate">
                  {item.role}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex gap-2 px-4 py-3.5 border-b border-[var(--color-line)]">
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-danger)]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent-2)]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent)]" />
        </div>

        {submitted ? (
          <motion.div
            className="p-8 text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <p className="text-3xl mb-3">✨</p>
            <p className="text-[var(--color-accent)] font-bold text-lg m-0 mb-2">Vibe received!</p>
            <p className="text-[var(--color-muted)] text-sm m-0">
              Appreciate you dropping your thoughts fr fr &lt;3
            </p>
          </motion.div>
        ) : (
          <form className="p-6 grid gap-5 max-sm:p-5" onSubmit={handleSubmit}>
            <p className="text-[var(--color-accent-2)] text-xs font-black uppercase tracking-wider m-0">
              Spill the tea — drop your thoughts
            </p>

            <div className="grid gap-2">
              <label
                htmlFor="testimonial-name"
                className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-muted)]"
              >
                Your name <span className="text-[var(--color-danger)]">*</span>
              </label>
              <input
                id="testimonial-name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="ur name bestie"
                className="w-full border border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_1px_var(--color-accent)] placeholder:text-[var(--color-muted)]/35"
              />
            </div>

            <div className="grid gap-2">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-muted)] m-0">
                Pick your vibe
              </p>
              <div className="flex flex-wrap gap-2">
                {vibes.map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setSelectedVibe(selectedVibe === v ? '' : v)}
                    className={`text-xl w-11 h-11 flex items-center justify-center border transition-all duration-200 cursor-pointer ${
                      selectedVibe === v
                        ? 'border-[var(--color-accent)] bg-[rgba(102,242,194,0.1)] scale-110'
                        : 'border-[var(--color-line)] bg-white/3 hover:border-[var(--color-accent)]/40'
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              <label
                htmlFor="testimonial-message"
                className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-muted)]"
              >
                Your message <span className="text-[var(--color-danger)]">*</span>
              </label>
              <textarea
                id="testimonial-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="say sumn nice... or just go off idc"
                className="w-full border border-[var(--color-line)] bg-[var(--color-bg)] px-4 py-3 text-[var(--color-text)] outline-none transition-all duration-200 focus:border-[var(--color-accent)] focus:shadow-[0_0_0_1px_var(--color-accent)] placeholder:text-[var(--color-muted)]/35 resize-y min-h-[100px]"
              />
            </div>

            {error && (
              <motion.p
                className="text-[var(--color-danger)] text-sm m-0"
                role="alert"
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.p>
            )}

            <button
              type="submit"
              disabled={sending}
              className="bg-[var(--color-accent)] text-[#04100c] border border-[var(--color-accent)] px-5 py-3.5 text-xs font-extrabold uppercase tracking-wider cursor-pointer hover:brightness-110 transition-all duration-200 w-fit max-sm:w-full max-sm:min-h-14 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {sending ? 'sending the vibe...' : "drop it like it's hot 🔥"}
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
