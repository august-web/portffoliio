'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

interface ProjectCardProps {
  name: string
  type: string
  description: string
  index: number
  image?: string
}

export default function ProjectCard({ name, type, description, index, image }: ProjectCardProps) {
  return (
    <motion.article
      className="min-h-[280px] flex flex-col border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
    >
      {image && (
        <div className="relative w-full h-40 overflow-hidden">
          <Image
            src={image}
            alt={`${name} project screenshot`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <p className="text-xs font-black uppercase text-[var(--color-accent-2)] mb-0">{type}</p>
          <h3 className="text-[1.75rem] leading-tight mt-3 mb-0">{name}</h3>
        </div>
        <span className="text-[var(--color-muted)] leading-relaxed mt-4">{description}</span>
      </div>
    </motion.article>
  )
}
