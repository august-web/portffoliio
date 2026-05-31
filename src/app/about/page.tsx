'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import SkillIcon from '../../components/ui/SkillIcon'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Completed' },
  { value: 'Ghana', label: 'Location' },
  { value: 'Online', label: 'Status' },
]

const contactInfo = [
  { label: 'role', value: 'Software Developer' },
  { label: 'focus', value: 'Frontend, UI, Full-stack' },
  { label: 'location', value: 'Ghana / Remote' },
  { label: 'status', value: 'Open to opportunities' },
]

const timeline = [
  {
    year: '2024 — Present',
    role: 'Software Engineer',
    company: 'Current Focus',
    description:
      'Building responsive web applications and softwares with React, Next.js, and TypeScript. Focused on clean architecture, accessible UIs, and performant frontends.',
  },
  {
    year: '2026 — Present',
    role: 'AI Facilitator',
    company: 'Current Focus',
    description:
      'Building responsive web applications with React, Next.js, and TypeScript. Focused on clean architecture, accessible UIs, and performant frontends.',
  },
  {
    year: '2023 — Present',
    role: 'Full Stack Developer',
    company: 'Freelance & Projects',
    description:
      'Developing client-facing dashboards, e-commerce interfaces, and reusable component libraries. Collaborated remotely with teams on product UI.',
  },
  {
    year: '2025 — 2025',
    role: 'Frontend Developer',
    company: 'Intern @Codeveda',
    description:
      'Started building web applications with JavaScript and React. Developed strong foundations in responsive design, APIs, and version control with Git.',
  },
]

const skillGroups = [
  {
    category: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'Framer Motion'],
  },
  { category: 'Backend', items: ['Node.js', 'Python', 'REST APIs', 'PostgreSQL', 'Firebase'] },
  {
    category: 'Tools',
    items: [
      'Git',
      'VS Code',
      'Zed',
      'Cursor',
      'Copilot',
      'Codex',
      'Figma',
      'Vercel',
      'Netlify',
      'Supabase',
    ],
  },
  {
    category: 'Design',
    items: ['Responsive UI', 'Accessibility', 'System Design', 'Interaction Design'],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export default function AboutPage() {
  return (
    <div className="py-12 max-md:py-8">
      <motion.div
        className="grid grid-cols-[auto_1fr] gap-12 items-start max-md:grid-cols-1 max-md:gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div className="shrink-0 max-md:mx-auto" variants={itemVariants}>
          <div className="relative w-[260px] h-[260px] max-md:w-[200px] max-md:h-[200px] max-sm:w-[180px] max-sm:h-[180px]">
            <Image
              src="/images/profile.png"
              alt="Augustine Okechukwu Chima"
              fill
              className="object-cover rounded-2xl"
              priority
            />
            <div className="absolute -bottom-2.5 -right-2.5 border border-[var(--color-line)] bg-[var(--color-panel)]/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl max-sm:px-2.5 max-sm:py-1">
              <span className="flex items-center gap-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-accent)] max-sm:text-[8px]">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]" />
                Open to Work
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div className="min-w-0" variants={itemVariants}>
          <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-4">
            About Me
          </p>
          <h1 className="text-[4.5rem] leading-[0.9] uppercase m-0 mb-6 max-md:text-[3.2rem] max-sm:text-[2.4rem] max-[400px]:text-[1.9rem]">
            Augustine
            <br />
            Okechukwu
            <br />
            Chima
          </h1>
          <p className="text-[var(--color-accent-2)] text-lg font-black uppercase tracking-wider mb-6 break-words max-sm:text-base max-sm:mb-4">
            Software Developer &bull; Frontend Specialist &bull; UI Architect
          </p>
          <p className="text-[var(--color-muted)] text-base leading-relaxed m-0 max-w-[640px] max-sm:text-sm">
            I design and build responsive web experiences that feel clear, useful, and considered
            from the first screen to the final detail. With a strong foundation in modern frontend
            technologies and a keen eye for interaction design, I craft digital products that are
            both beautiful and functional.
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="py-12 my-14 border-y border-[var(--color-line)] max-md:py-10 max-md:my-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-4 gap-6 max-md:grid-cols-2 max-sm:gap-4">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="border border-[var(--color-line)] bg-[var(--color-panel)]/80 backdrop-blur-lg p-5 text-center"
              variants={itemVariants}
            >
              <p className="text-2xl font-black text-[var(--color-accent)] m-0 mb-1.5">
                {stat.value}
              </p>
              <p className="text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-muted)] m-0">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <section className="mb-16 max-md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-2">
            Career
          </p>
          <h2 className="text-[3.2rem] leading-[0.95] uppercase m-0 mb-10 max-md:text-[2.4rem] max-sm:text-[1.9rem] max-sm:mb-8">
            Experience
          </h2>
        </motion.div>

        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-px bg-[var(--color-line)]" />

          {timeline.map((item, i) => (
            <motion.div
              key={item.year}
              className="relative pl-14 pb-12 last:pb-0 max-sm:pl-12 max-sm:pb-10"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="absolute left-[12px] top-1 w-[15px] h-[15px] rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-panel)]" />
              <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider m-0 mb-2">
                {item.year}
              </p>
              <h3 className="text-xl font-bold m-0 mb-0.5 max-sm:text-lg">{item.role}</h3>
              <p className="text-[var(--color-accent-2)] text-sm font-bold uppercase tracking-wider m-0 mb-2">
                {item.company}
              </p>
              <p className="text-[var(--color-muted)] text-sm leading-relaxed m-0 max-w-[600px]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-2">
            Capabilities
          </p>
          <h2 className="text-[3.2rem] leading-[0.95] uppercase m-0 mb-10 max-md:text-[2.4rem] max-sm:text-[1.9rem] max-sm:mb-8">
            Skills &amp; Tools
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 gap-6 max-md:grid-cols-1">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              className="border border-[var(--color-line)] bg-[var(--color-panel)]/80 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <div className="flex gap-2 px-4 py-3 border-b border-[var(--color-line)]">
                <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-danger)]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent-2)]" />
                <span className="w-[11px] h-[11px] rounded-full bg-[var(--color-accent)]" />
              </div>
              <div className="p-5">
                <p className="text-[var(--color-accent-2)] text-[10px] font-black uppercase tracking-wider m-0 mb-4">
                  {group.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider px-3 py-2 border border-[var(--color-line)] bg-[rgba(102,242,194,0.04)] text-[var(--color-muted)]"
                    >
                      <SkillIcon name={skill} />
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}
