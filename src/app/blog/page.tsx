'use client'

import React from 'react'
import { motion } from 'framer-motion'

const posts = [
  {
    title: 'Building a Performant Next.js Portfolio',
    date: 'May 2026',
    category: 'Engineering',
    excerpt:
      'Lessons learned from architecting a modern portfolio with Next.js 15, React 19, and Tailwind CSS v4.',
  },
  {
    title: 'Accessible UI: Beyond ARIA Labels',
    date: 'April 2026',
    category: 'Accessibility',
    excerpt:
      'A practical guide to building interfaces that work for everyone, from keyboard navigation to screen readers.',
  },
  {
    title: 'Why I Care About Calm Software',
    date: 'March 2026',
    category: 'Design',
    excerpt:
      'Thoughts on designing interfaces that reduce cognitive load and create a sense of ease.',
  },
]

const blogStats = [
  { label: 'Articles', value: '3' },
  { label: 'Topics', value: '3' },
  { label: 'Latest', value: 'May 2026' },
  { label: 'Status', value: 'Writing' },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
}

export default function BlogPage() {
  return (
    <div className="py-12 max-md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-4">
          Writing
        </p>
        <h1 className="text-[5.6rem] leading-[0.9] uppercase m-0 mb-8 max-md:text-[3.6rem] max-sm:text-[2.8rem]">
          Blog
        </h1>
      </motion.div>

      <motion.div
        className="border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg overflow-hidden mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex gap-2 px-4 py-3.5 border-b border-[var(--color-line)]">
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-danger)]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent-2)]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent)]" />
        </div>
        <div className="p-5">
          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2">
            {blogStats.map((stat) => (
              <motion.div key={stat.label} className="text-center" variants={itemVariants}>
                <p className="text-lg font-black text-[var(--color-accent)] m-0 mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-muted)] m-0">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-cols-2 gap-5 max-lg:grid-cols-1 max-sm:gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-30px' }}
      >
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            className="border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg overflow-hidden group hover:border-[var(--color-accent)]/40 transition-colors duration-300"
            variants={itemVariants}
          >
            <div className="flex gap-2 px-4 py-3 border-b border-[var(--color-line)]">
              <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-danger)]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent-2)]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent)]" />
            </div>
            <div className="p-6 max-sm:p-5">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-wider border border-[var(--color-line)] bg-[rgba(102,242,194,0.04)] text-[var(--color-accent)] px-2.5 py-1">
                  {post.category}
                </span>
                <span className="text-[11px] text-[var(--color-muted)]">{post.date}</span>
              </div>
              <h2 className="text-xl font-bold m-0 mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-200">
                {post.title}
              </h2>
              <p className="text-[var(--color-muted)] m-0 leading-relaxed text-sm">
                {post.excerpt}
              </p>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </div>
  )
}
