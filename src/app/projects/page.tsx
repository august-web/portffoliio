'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../../components/ui/ProjectCard'
import { projects } from '../../data/projects'

export default function ProjectsPage() {
  return (
    <div className="py-12">
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

      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} {...project} index={i} />
        ))}
      </div>
    </div>
  )
}
