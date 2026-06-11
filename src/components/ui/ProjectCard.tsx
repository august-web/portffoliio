'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Project } from '../../data/projects'

interface ProjectCardProps extends Project {
  index: number
  priority?: boolean
  onViewDetails: () => void
}

export default function ProjectCard({
  name,
  type,
  description,
  image,
  url,
  techStack,
  featured,
  index,
  priority,
  onViewDetails,
}: ProjectCardProps) {
  const cardRef = React.useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = React.useState({ x: 0, y: 0 })
  const [imgError, setImgError] = React.useState(false)

  function onMouseMove(e: React.MouseEvent) {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setTilt({ x: y * -6, y: x * 6 })
  }

  function onMouseLeave() {
    setTilt({ x: 0, y: 0 })
  }

  return (
    <motion.article
      ref={cardRef}
      className="group relative flex flex-col border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg overflow-hidden transition-all duration-300 hover:border-[var(--color-accent)]/40 hover:shadow-[0_32px_100px_rgba(0,0,0,0.35)] hover:-translate-y-1"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ perspective: 800, transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
    >
      {featured && (
        <motion.div
          className="absolute top-3 right-3 z-10 border border-[var(--color-accent)]/30 bg-[var(--color-accent)]/10 backdrop-blur-md px-2.5 py-1 rounded-full"
          animate={{
            boxShadow: [
              '0 0 0px rgba(102,242,194,0)',
              '0 0 16px rgba(102,242,194,0.3)',
              '0 0 0px rgba(102,242,194,0)',
            ],
          }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <span className="text-[9px] font-extrabold uppercase tracking-wider text-[var(--color-accent)]">
            Featured
          </span>
        </motion.div>
      )}

      <div className="relative w-full h-48 overflow-hidden max-sm:h-40">
        <div className="absolute inset-0 flex items-center justify-center bg-[var(--color-panel-strong)]">
          {!imgError ? (
            <Image
              src={image}
              alt={`${name} project screenshot`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority={priority}
              onError={() => setImgError(true)}
            />
          ) : (
            <div className="flex flex-col items-center gap-2 text-[var(--color-muted)]">
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
                <circle cx="9" cy="9" r="2" />
                <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
              </svg>
              <span className="text-[10px] font-extrabold uppercase tracking-wider">{name}</span>
            </div>
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <div className="p-5 flex flex-col flex-1 gap-3">
        <div>
          <p className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-accent-2)] m-0">
            {type}
          </p>
          <h3 className="text-[1.5rem] leading-tight font-bold m-0 mt-1 max-sm:text-[1.3rem]">
            {name}
          </h3>
        </div>

        <p className="text-[var(--color-muted)] text-sm leading-relaxed m-0 line-clamp-3">
          {description}
        </p>

        {techStack.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-[9px] font-bold uppercase tracking-wider px-2 py-1 border border-[var(--color-line)] bg-[rgba(102,242,194,0.04)] text-[var(--color-muted)]"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex gap-2 pt-1">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-center text-[10px] font-extrabold uppercase tracking-wider px-3 py-2.5 border border-[var(--color-accent)] bg-[var(--color-accent)] text-[#04100c] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_20px_rgba(102,242,194,0.3)]"
          >
            View Live Site
          </a>
          <button
            type="button"
            onClick={onViewDetails}
            className="flex-1 text-center text-[10px] font-extrabold uppercase tracking-wider px-3 py-2.5 border border-[var(--color-line)] bg-white/3 text-[var(--color-text)] transition-all duration-200 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
          >
            View Details
          </button>
        </div>
      </div>
    </motion.article>
  )
}
