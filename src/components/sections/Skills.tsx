import React from 'react'
import SkillIcon from '../ui/SkillIcon'

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'JavaScript',
  'CSS',
  'Tailwind CSS',
  'Node.js',
  'PostgreSQL',
  'REST APIs',
  'Responsive UI',
  'Accessibility',
  'Git',
  'Figma',
  'System Design',
]

export default function Skills() {
  return (
    <section
      className="section-spacing grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
      id="skills"
    >
      <h2 className="section-heading">
        Modern web stack, careful interaction design, and practical delivery.
      </h2>
      <div className="grid grid-cols-2 gap-x-6 gap-y-1">
        {skills.map((skill) => (
          <span
            key={skill}
            className="inline-flex items-center gap-3 border-b border-[var(--color-line)] py-4 text-sm font-medium text-[var(--color-text)] sm:text-base"
          >
            <SkillIcon name={skill} />
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
