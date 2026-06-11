'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../../components/ui/ProjectCard'
import ProjectModal from '../../components/ui/ProjectModal'
import { projects } from '../../data/projects'
import type { Project } from '../../data/projects'

const projectStats = [
  { label: 'Total Projects', value: '8' },
  { label: 'Categories', value: '3' },
  { label: 'Technologies', value: '16+' },
  { label: 'Status', value: 'Active' },
]

const categories = ['All', 'Full Stack', 'Frontend', 'Developer Tool']

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const filtered =
    activeCategory === 'All' ? projects : projects.filter((p) => p.category === activeCategory)

  return (
    <div className="py-12 max-md:py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-4">
          Selected Work
        </p>
        <h1 className="text-[5.6rem] leading-[0.9] uppercase m-0 mb-8 max-md:text-[3.6rem] max-sm:text-[2.8rem]">
          My Projects
        </h1>
      </motion.div>

      <motion.div
        className="border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg overflow-hidden mb-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="flex gap-2 px-4 py-3.5 border-b border-[var(--color-line)]">
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-danger)]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent-2)]" />
          <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent)]" />
        </div>
        <div className="p-5">
          <div className="grid grid-cols-4 gap-4 max-md:grid-cols-2 max-sm:grid-cols-2">
            {projectStats.map((stat) => (
              <motion.div key={stat.label} className="text-center" variants={itemVariants}>
                <p className="text-lg font-black text-[var(--color-accent)] m-0 mb-1">
                  {stat.value}
                </p>
                <p className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-muted)] m-0">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            type="button"
            onClick={() => setActiveCategory(cat)}
            className={`text-[11px] font-extrabold uppercase tracking-wider px-3.5 py-2 border transition-all duration-200 cursor-pointer ${
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
    </div>
  )
}
