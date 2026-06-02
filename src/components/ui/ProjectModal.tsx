'use client'

import React, { useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import type { Project } from '../../data/projects'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    },
    [onClose],
  )

  useEffect(() => {
    if (project) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [project, handleKeyDown])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 max-sm:p-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[var(--color-line)] bg-[var(--color-bg)] shadow-[0_32px_120px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25 }}
          >
            <div className="flex gap-2 px-4 py-3 border-b border-[var(--color-line)]">
              <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-danger)]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent-2)]" />
              <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent)]" />
              <button
                type="button"
                onClick={onClose}
                className="ml-auto text-[var(--color-muted)] hover:text-[var(--color-text)] transition-colors text-xs font-bold uppercase tracking-wider"
              >
                Close
              </button>
            </div>

            <div className="relative w-full h-56 max-sm:h-44">
              <Image
                src={project.image}
                alt={`${project.name} screenshot`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>

            <div className="p-6 max-sm:p-4">
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-accent-2)] m-0 mb-1">
                {project.type}
              </p>
              <h2 className="text-2xl font-bold m-0 mb-3 max-sm:text-xl">{project.name}</h2>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed m-0 mb-5">
                {project.description}
              </p>

              {project.techStack.length > 0 && (
                <div className="mb-5">
                  <p className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-accent)] m-0 mb-2">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1.5 border border-[var(--color-line)] bg-[rgba(102,242,194,0.04)] text-[var(--color-muted)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[10px] font-extrabold uppercase tracking-wider px-4 py-3 border border-[var(--color-accent)] bg-[var(--color-accent)] text-[#04100c] transition-all duration-200 hover:brightness-110 hover:shadow-[0_0_20px_rgba(102,242,194,0.3)] no-underline"
              >
                Visit Live Site
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" x2="21" y1="14" y2="3" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
