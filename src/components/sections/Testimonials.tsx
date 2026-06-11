'use client'

import React from 'react'
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
        className="grid grid-cols-2 gap-4 max-md:grid-cols-1"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
      >
        {testimonials.map((item, i) => (
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
    </section>
  )
}
