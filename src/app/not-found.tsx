'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-6 py-24">
      <h1 className="text-[8.75rem] leading-[0.88] uppercase m-0 mb-4 max-md:text-[5.2rem] max-sm:text-[3.55rem] max-[400px]:text-[2.8rem]">
        404
      </h1>
      <p className="text-[var(--color-accent-2)] text-[2.1rem] font-black uppercase mb-6 max-md:text-[1.55rem] max-sm:text-[1.2rem] max-[400px]:text-[1rem]">
        Page not found
      </p>
      <p className="text-[var(--color-muted)] text-lg mb-8 max-w-[480px] max-sm:text-base max-sm:px-2">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }}>
        <Link
          href="/"
          className="border border-[var(--color-line)] bg-white/3 px-[14px] py-3 text-xs font-extrabold uppercase tracking-wider no-underline text-inherit hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200 max-sm:w-full max-sm:min-h-14 max-sm:flex max-sm:items-center max-sm:justify-center inline-flex"
        >
          Go Home
        </Link>
      </motion.div>
    </div>
  )
}
