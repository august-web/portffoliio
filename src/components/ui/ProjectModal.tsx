'use client'

import React, { useEffect, useId, useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight, X } from 'lucide-react'
import type { Project } from '../../data/projects'

interface ProjectModalProps {
  project: Project | null
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const headingId = useId()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const isOpen = project !== null

  useEffect(() => {
    if (!isOpen) return
    const dialog = dialogRef.current
    const previousActiveElement =
      document.activeElement instanceof HTMLElement ? document.activeElement : null
    const previousOverflow = document.body.style.overflow
    dialog?.showModal()
    closeButtonRef.current?.focus({ preventScroll: true })
    document.body.style.overflow = 'hidden'
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
      previousActiveElement?.focus({ preventScroll: true })
    }
  }, [isOpen])

  if (!project) return null

  return (
    <dialog
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-labelledby={headingId}
      onCancel={(event) => {
        event.preventDefault()
        onClose()
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
      onKeyDown={(event) => {
        if (event.key !== 'Tab') return
        const focusable = event.currentTarget.querySelectorAll<HTMLElement>('button, a[href]')
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault()
          last.focus()
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault()
          first.focus()
        }
      }}
      className="m-auto max-h-[90dvh] w-[calc(100%-32px)] max-w-2xl overflow-y-auto rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-0 text-[var(--color-text)] backdrop:bg-black/70"
    >
      <div className="flex justify-end border-b border-[var(--color-line)] px-3 py-2">
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="inline-flex min-h-11 min-w-11 items-center justify-center gap-2 rounded-lg px-3 text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-text)]"
        >
          Close <X size={18} aria-hidden="true" />
        </button>
      </div>
      <div className="relative aspect-[16/10] w-full bg-[var(--color-panel-strong)]">
        <Image
          src={project.image}
          alt={`${project.name} screenshot`}
          fill
          className="object-cover object-top"
          sizes="(min-width: 704px) 672px, calc(100vw - 32px)"
        />
      </div>
      <div className="p-5 sm:p-8">
        <p className="mb-2 mt-0 text-sm text-[var(--color-muted)]">{project.type}</p>
        <h2 id={headingId} className="mb-4 mt-0 text-2xl font-semibold leading-tight sm:text-3xl">
          {project.name}
        </h2>
        <p className="mb-6 mt-0 text-base leading-relaxed text-[var(--color-muted)]">
          {project.description}
        </p>
        {project.techStack.length > 0 && (
          <div className="mb-6">
            <h3 className="mb-2 mt-0 text-sm font-semibold">Technologies</h3>
            <ul className="m-0 flex list-none flex-wrap gap-x-4 gap-y-1 p-0 text-sm leading-relaxed text-[var(--color-muted)]">
              {project.techStack.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </div>
        )}
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.name} website`}
          className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-[var(--color-accent)] px-5 py-3 text-sm font-semibold text-[var(--color-on-accent)] no-underline transition-colors hover:brightness-110"
        >
          Visit website <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </div>
    </dialog>
  )
}
