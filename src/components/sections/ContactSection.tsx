'use client'

import React from 'react'
import { motion } from 'framer-motion'

const links = [
  { label: 'Email', href: 'mailto:augustinechima17@gmail.com' },
  { label: 'GitHub', href: 'https://github.com/august-web' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/august-web/' },
  { label: 'WhatsApp', href: 'https://wa.me/233533027046' },
]

export default function ContactSection() {
  return (
    <motion.section
      className="flex items-center justify-between gap-8 py-[82px] pb-[100px] border-t border-[var(--color-line)] max-md:grid max-md:grid-cols-1 max-md:py-[58px]"
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-4 m-0 max-sm:text-[0.72rem]">
          Reach Out
        </p>
        <h2 className="max-w-[820px] mb-[18px] text-[4.25rem] leading-none m-0 max-md:text-[2.7rem] max-sm:text-[2.1rem] max-sm:leading-[1.04]">
          Have a role, project, or collaboration in mind?
        </h2>
      </div>
      <div className="flex flex-wrap gap-3 max-sm:grid max-sm:grid-cols-1">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('mailto') ? undefined : '_blank'}
            rel={link.href.startsWith('mailto') ? undefined : 'noreferrer'}
            className="border border-[var(--color-line)] bg-white/3 px-[14px] py-3 text-xs font-extrabold uppercase tracking-wider no-underline text-inherit hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200 inline-flex items-center justify-center max-sm:min-h-12 max-sm:w-full"
          >
            {link.label}
          </a>
        ))}
      </div>
    </motion.section>
  )
}
