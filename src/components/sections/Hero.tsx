'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import TerminalCard from '../ui/TerminalCard'

export default function Hero() {
  return (
    <section
      className="min-h-[96vh] flex flex-col justify-center px-0 pb-[72px] max-md:min-h-auto max-md:pb-16 max-sm:pb-12 max-sm:px-4"
      id="home"
    >
      <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(320px,0.8fr)] items-end gap-[42px] pt-[88px] max-md:grid-cols-1 max-md:pt-14 max-md:gap-8 max-sm:gap-6">
        <motion.div
          className="min-w-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-4 m-0 max-sm:text-[0.65rem]">
            Personal Portfolio / System Online
          </p>
          <h1 className="text-[8.75rem] leading-[0.88] uppercase max-w-[10ch] mb-1.5 m-0 max-md:text-[5.2rem] max-sm:text-[3.2rem] max-sm:max-w-[8ch] max-[400px]:text-[2.6rem]">
            Augustine Okechukwu Chima
          </h1>
          <p className="text-[var(--color-accent-2)] text-[2.1rem] font-black uppercase mb-6 m-0 max-md:text-[1.55rem] max-sm:text-[1.15rem] max-sm:mb-4">
            Software Developer
          </p>
          <p className="max-w-[680px] mb-[30px] text-[#b7c7c3] text-[1.2rem] leading-[1.7] m-0 max-md:text-[1.06rem] max-sm:text-[0.95rem] max-sm:leading-[1.6] max-sm:mb-6">
            I design and build responsive web experiences that feel clear, useful, and considered
            from the first screen to the final detail.
          </p>
          <div
            className="flex flex-wrap gap-3 max-sm:flex-col max-sm:w-full"
            aria-label="Portfolio links"
          >
            <Button variant="primary" href="/projects">
              View My Works
            </Button>
            <Button variant="secondary" href="/contact">
              Reach Out to Me
            </Button>
          </div>
        </motion.div>

        <TerminalCard />
      </div>
    </section>
  )
}
