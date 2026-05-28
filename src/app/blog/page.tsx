'use client'

import React from 'react'
import { motion } from 'framer-motion'

const posts = [
  {
    title: 'Building a Performant Next.js Portfolio',
    date: 'May 2026',
    excerpt:
      'Lessons learned from architecting a modern portfolio with Next.js 15, React 19, and Tailwind CSS v4.',
  },
  {
    title: 'Accessible UI: Beyond ARIA Labels',
    date: 'April 2026',
    excerpt:
      'A practical guide to building interfaces that work for everyone, from keyboard navigation to screen readers.',
  },
  {
    title: 'Why I Care About Calm Software',
    date: 'March 2026',
    excerpt:
      'Thoughts on designing interfaces that reduce cognitive load and create a sense of ease.',
  },
]

export default function BlogPage() {
  return (
    <div className="py-12">
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

      <div className="grid gap-6">
        {posts.map((post, i) => (
          <motion.article
            key={post.title}
            className="border border-[var(--color-line)] bg-[var(--color-panel)]/80 backdrop-blur-lg p-6"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <p className="text-[var(--color-muted)] text-xs uppercase tracking-wider mb-2">
              {post.date}
            </p>
            <h2 className="text-xl font-bold m-0 mb-2">{post.title}</h2>
            <p className="text-[var(--color-muted)] m-0 leading-relaxed">{post.excerpt}</p>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
