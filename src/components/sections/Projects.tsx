'use client'

import React from 'react'
import { motion } from 'framer-motion'
import ProjectCard from '../ui/ProjectCard'
import { projects } from '../../data/projects'

export default function Projects() {
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

      <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
        {projects.map((project, i) => (
          <ProjectCard key={project.name} {...project} index={i} />
        ))}
      </div>
    </section>
  )
}
