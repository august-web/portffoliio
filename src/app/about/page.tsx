import React from 'react'
import Image from 'next/image'
import Button from '../../components/ui/Button'
import SkillIcon from '../../components/ui/SkillIcon'

const stats = [
  { value: '4+', label: 'Years Experience' },
  { value: '30+', label: 'Projects Completed' },
  { value: 'Ghana', label: 'Location' },
  { value: 'Online', label: 'Status' },
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

export default function AboutPage() {
  return (
    <div className="py-12 md:py-16">
      <header className="mb-10 md:mb-12">
        <h1 className="m-0 text-4xl leading-tight tracking-tight md:text-6xl">About me</h1>
      </header>
      <section className="grid items-start gap-8 lg:grid-cols-[300px_1fr] lg:gap-16">
        <div className="w-40 sm:w-60 lg:w-full">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[var(--color-panel)]">
            <Image
              src="/images/profile.png"
              alt="Augustine Okechukwu Chima"
              fill
              sizes="(min-width: 1024px) 300px, (min-width: 640px) 240px, 160px"
              className="object-cover object-top"
              priority
            />
          </div>
          <p className="mt-4 mb-0 flex items-center gap-2 text-sm text-[var(--color-accent)]">
            <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
            Open to Work
          </p>
        </div>

        <div className="min-w-0 lg:pt-3">
          <h2 className="m-0 max-w-xl text-3xl leading-tight font-medium sm:text-4xl lg:text-5xl">
            Augustine Okechukwu Chima
          </h2>
          <p className="mt-5 mb-6 max-w-xl text-base leading-relaxed text-[var(--color-accent)] sm:text-lg">
            Software Developer &bull; Frontend Specialist &bull; UI Architect
          </p>
          <p className="m-0 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
            I design and build responsive web experiences that feel clear, useful, and considered
            from the first screen to the final detail. With a strong foundation in modern frontend
            technologies and a keen eye for interaction design, I craft digital products that are
            both beautiful and functional.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">View my work</Button>
            <Button href="/contact" variant="secondary">
              Reach out
            </Button>
          </div>
        </div>
      </section>

      <dl className="my-12 grid grid-cols-2 gap-x-6 gap-y-8 border-y border-[var(--color-line)] py-8 md:my-16 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-2">
            <dt className="text-sm text-[var(--color-muted)]">{stat.label}</dt>
            <dd className="order-first m-0 text-2xl font-medium tabular-nums">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <section
        aria-labelledby="experience-heading"
        className="grid gap-8 pb-12 md:pb-16 lg:grid-cols-[300px_1fr] lg:gap-16"
      >
        <h2 id="experience-heading" className="section-heading">
          Experience
        </h2>
        <ol className="m-0 list-none p-0">
          {timeline.map((item) => (
            <li
              key={`${item.year}-${item.role}`}
              className="relative border-l border-[var(--color-line)] pb-10 pl-6 last:pb-0 sm:pl-8"
            >
              <span
                className="absolute top-2 -left-[4px] h-2 w-2 rounded-full bg-[var(--color-accent)]"
                aria-hidden="true"
              />
              <p className="m-0 text-sm tabular-nums text-[var(--color-muted)]">{item.year}</p>
              <h3 className="mt-2 mb-0 text-xl font-medium sm:text-2xl">{item.role}</h3>
              <p className="mt-1 mb-0 text-sm text-[var(--color-accent)]">{item.company}</p>
              <p className="mt-3 mb-0 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="skills-heading"
        className="section-spacing grid gap-8 lg:grid-cols-[300px_1fr] lg:gap-16"
      >
        <h2 id="skills-heading" className="section-heading">
          Skills &amp; Tools
        </h2>
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="m-0 border-b border-[var(--color-line)] pb-3 text-lg font-medium">
                {group.category}
              </h3>
              <ul className="mt-4 mb-0 grid list-none gap-3 p-0">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="flex items-center gap-3 text-sm text-[var(--color-muted)]"
                  >
                    <span className="text-[var(--color-accent)]" aria-hidden="true">
                      <SkillIcon name={skill} />
                    </span>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
