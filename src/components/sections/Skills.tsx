'use client'

import React from 'react'
import { motion } from 'framer-motion'

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'CSS',
  'Responsive UI',
  'APIs',
  'Git',
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
}

export default function Skills() {
  return (
    <section
      className="grid grid-cols-[1fr_1fr] gap-10 items-start py-[82px] border-t border-[var(--color-line)] max-md:grid-cols-1 max-md:py-[58px]"
      id="skills"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-4 m-0 max-sm:text-[0.72rem]">
          My Skills &amp; Capabilities
        </p>
        <h2 className="max-w-[820px] mb-[18px] text-[4.25rem] leading-none m-0 max-md:text-[2.7rem] max-sm:text-[1.9rem] max-sm:leading-[1.1]">
          Modern web stack, careful interaction design, and practical delivery.
        </h2>
      </motion.div>

      <motion.div
        className="flex flex-wrap gap-3"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {skills.map((skill) => (
          <motion.span
            key={skill}
            className="border border-[var(--color-line)] bg-[rgba(102,242,194,0.06)] px-[14px] py-3 text-[#d5eee7] font-extrabold text-sm"
            variants={item}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  )
}
