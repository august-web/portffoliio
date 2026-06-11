'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <motion.section
      className="py-[82px] border-t border-[var(--color-line)] max-md:py-[58px]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-4 m-0 max-sm:text-[0.72rem]">
        About
      </p>
      <h2 className="max-w-[820px] mb-[18px] text-[4.25rem] leading-none m-0 max-md:text-[2.7rem] max-sm:text-[2.1rem] max-sm:leading-[1.04]">
        Engineering interfaces that feel sharp, fast, and intentional.
      </h2>
      <p className="max-w-[720px] text-[var(--color-muted)] text-[1.08rem] leading-[1.8] m-0 mb-5">
        I care about the details people notice and the structure they do not have to think about:
        readable layouts, responsive behavior, accessible interactions, and code that can keep
        growing after launch.
      </p>
      <p className="max-w-[720px] text-[var(--color-muted)] text-[1.08rem] leading-[1.8] m-0">
        With experience across the full stack &mdash; from React and Next.js on the frontend to
        Node.js, PostgreSQL, and cloud deployment &mdash; I bring ideas to life with clean
        architecture and thoughtful interaction design.
      </p>
    </motion.section>
  )
}
