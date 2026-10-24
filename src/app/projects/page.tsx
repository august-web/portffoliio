'use client'

import React, { useState } from 'react'
import ProjectCard from '../../components/ui/ProjectCard'
import ProjectModal from '../../components/ui/ProjectModal'
import { projects, projectCategories } from '../../data/projects'
import type { Project } from '../../data/projects'

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="py-12 md:py-16">
      <header className="mb-10">
        <h1 className="text-4xl md:text-6xl leading-tight tracking-tight m-0">Projects</h1>
        <p className="max-w-xl text-base leading-relaxed text-[var(--color-muted)] mt-4 mb-0">
          Explore client websites, personal projects, and developer tools.
        </p>
      </header>

      <div
        className="flex flex-wrap gap-2 mb-5"
        role="group"
        aria-label="Filter projects by category"
      >
        {projectCategories.map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={cat === activeCategory}
            onClick={() => setActiveCategory(cat)}
            className={`min-h-11 rounded-lg text-sm font-medium px-4 py-2 border transition-colors motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-bg)] ${
              cat === activeCategory
                ? 'border-[var(--color-accent)] bg-[var(--color-accent)]/10 text-[var(--color-accent)]'
                : 'border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-text)]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <p className="text-sm text-[var(--color-muted)] mb-6" aria-live="polite" aria-atomic="true">
        Showing {filtered.length} of {projects.length} projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {filtered.map((project) => (
          <ProjectCard
            key={project.name}
            {...project}
            onViewDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-[var(--color-muted)] text-base text-center py-12">
          No projects found in this category.
        </p>
      )}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  )
}
