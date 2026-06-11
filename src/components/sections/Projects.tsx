'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import ProjectModal from '../ui/ProjectModal'
import { projects } from '../../data/projects'
import type { Project } from '../../data/projects'

const categories = ['All', 'Full Stack', 'Frontend', 'Developer Tool']

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <section className="py-[82px] border-t border-[var(--color-line)] max-md:py-[58px]" id="work">
      <motion.div
        className="mb-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-4 m-0 max-sm:text-[0.72rem]">
          Selected Work
        </p>
        <h2 className="text-[5.6rem] leading-[0.9] uppercase m-0 max-md:text-[3.6rem] max-sm:text-[2.8rem]">
          Projects
        </h2>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`relative text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-2 border transition-all duration-200 cursor-pointer ${
              cat === activeCategory
                ? 'border-[var(--color-accent)] bg-[rgba(102,242,194,0.06)] text-[var(--color-accent)]'
                : 'border-[var(--color-line)] bg-white/3 text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]'
            }`}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="grid grid-cols-2 gap-4 max-md:grid-cols-1">
        {filtered.map((project, i) => (
          <ProjectCard
            key={project.name}
            {...project}
            index={i}
            priority={i < 2}
            onViewDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-[var(--color-muted)] text-sm text-center py-12">
          No projects found in this category.
        </p>
      )}

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}
