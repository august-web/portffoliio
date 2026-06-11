'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { useMousePosition } from './useMousePosition'

const lines = [
  { key: 'user', value: 'Augustine Okechukwu Chima' },
  { key: 'status', value: 'Available for opportunities' },
  { key: 'location', value: 'Ghana / Remote' },
  { key: 'focus', value: 'Full-stack, product UI, web systems' },
  { key: 'mission', value: 'Make software feel calm and useful' },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
}

const item = {
  hidden: { opacity: 0, x: -10 },
  show: { opacity: 1, x: 0 },
}

export default function TerminalCard() {
  const { x, y } = useMousePosition()
  const rotateX = (y - 0.5) * -4
  const rotateY = (x - 0.5) * 4
  const [viewCount, setViewCount] = useState<number | null>(null)

  useEffect(() => {
    fetch('/api/views')
      .then((r) => r.json())
      .then((d) => setViewCount(d.count))
      .catch(() => {})
  }, [])

  return (
    <motion.div
      className="min-w-0 overflow-hidden border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      style={{ perspective: 1000 }}
      whileHover={{ scale: 1.02 }}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 150, damping: 15 }}
      >
        <div className="flex gap-2 px-4 py-4 border-b border-[var(--color-line)]">
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-danger)]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent-2)]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent)]" />
        </div>
        <motion.div
          className="p-5 font-mono text-sm max-sm:p-4 max-sm:text-[0.8rem]"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {lines.map((line) => (
            <motion.p
              key={line.key}
              className="mb-3.5 text-[#cfe3dd] last:mb-0 break-words"
              variants={item}
            >
              <span className="text-[var(--color-accent)]">{line.key}</span>: {line.value}
            </motion.p>
          ))}
          <motion.p
            className={`mb-3.5 text-[#cfe3dd] last:mb-0 break-words ${viewCount === null ? 'opacity-0' : ''}`}
            variants={item}
          >
            <span className="text-[var(--color-accent)]">visitors</span>:{' '}
            {viewCount !== null ? viewCount.toLocaleString() : '---'}
          </motion.p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}
