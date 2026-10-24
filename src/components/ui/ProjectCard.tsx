'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowUpRight, ImageIcon } from 'lucide-react'
import type { Project } from '../../data/projects'

interface ProjectCardProps extends Project {
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
  priority,
  onViewDetails,
}: ProjectCardProps) {
  const [imgError, setImgError] = React.useState(false)

  return (
    <article className="group flex flex-col rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] overflow-hidden transition-colors motion-reduce:transition-none hover:border-[var(--color-accent)]/50">
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[var(--color-panel-strong)]">
        {!imgError ? (
          <Image
            src={image}
            alt={`${name} project screenshot`}
            fill
            className="object-cover object-top"
            sizes="(min-width: 1244px) 572px, (min-width: 768px) calc((100vw - 100px) / 2), calc(100vw - 42px)"
            priority={priority}
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-[var(--color-muted)]">
            <ImageIcon size={32} strokeWidth={1.5} aria-hidden="true" />
            <span className="text-sm text-center">{name}</span>
          </div>
        )}
        {featured && (
          <span className="absolute top-4 left-4 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-1 text-xs font-medium text-[var(--color-accent)]">
            Featured
          </span>
        )}
      </div>

      <div className="p-5 md:p-6 flex flex-col flex-1 gap-4">
        <div>
          <p className="text-sm text-[var(--color-muted)] m-0">{type}</p>
          <h3 className="text-2xl md:text-[1.75rem] leading-tight font-semibold tracking-tight m-0 mt-2">
            {name}
          </h3>
        </div>

        <p className="text-[var(--color-muted)] text-base leading-relaxed m-0">{description}</p>

        {techStack.length > 0 && (
          <ul
            className="flex flex-wrap gap-x-4 gap-y-1 list-none p-0 m-0 text-sm leading-relaxed text-[var(--color-muted)]"
            aria-label="Technologies"
          >
            {techStack.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 mt-auto pt-2">
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${name} website`}
            className="inline-flex min-h-11 items-center gap-2 rounded-sm text-sm font-semibold text-[var(--color-accent)] hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)]"
          >
            Visit website
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={onViewDetails}
            aria-label={`View details for ${name}`}
            className="inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--color-line)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition-colors motion-reduce:transition-none hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-panel)]"
          >
            View details
          </button>
        </div>
      </div>
    </article>
  )
}
