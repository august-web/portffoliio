import React from 'react'
import Image from 'next/image'
import Button from '../../components/ui/Button'
import SkillIcon from '../../components/ui/SkillIcon'

const facts = [
  { label: 'Location', value: 'Ghana', note: 'Remote worldwide' },
  { label: 'Experience', value: '4+ years' },
  { label: 'Projects', value: '30+ completed' },
  { label: 'Status', value: 'Open to work', live: true },
]

const timeline = [
  {
    year: 'Current Focus',
    role: 'Building TechCrew',
    company: 'TechCrew',
    current: true,
    description:
      'Building TechCrew, a tech education startup helping schools, students, and teachers develop skills in AI, robotics, cybersecurity, and coding through training and mentorship.',
  },
  {
    year: 'Present',
    role: 'Mentee & Website Contributor',
    company: 'InnovoTech Lab',
    current: true,
    description:
      "Participating as a mentee and contributing to the lab's website by adding new pages and fixing bugs.",
  },
  {
    year: '2024 — Present',
    role: 'Software Engineer',
    company: 'Independent',
    current: true,
    description:
      'Building responsive web applications and software with React, Next.js, and TypeScript. Focused on clean architecture, accessible UIs, and performant frontends.',
  },
  {
    year: '2023 — Present',
    role: 'Full Stack Developer',
    company: 'Freelance & Projects',
    current: true,
    description:
      'Developing client-facing dashboards, e-commerce interfaces, and reusable component libraries. Collaborated remotely with teams on product UI.',
  },
  {
    year: '2026',
    role: 'AI Facilitator',
    company: 'KONOV Technologies',
    current: false,
    description:
      'Facilitated hands-on AI learning sessions, guiding learners through practical AI tools and concepts.',
  },
  {
    year: '2025',
    role: 'Frontend Developer',
    company: 'Intern @Codeveda',
    current: false,
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
    <div className="py-12 md:py-16 lg:grid lg:grid-cols-[280px_minmax(0,1fr)] lg:items-start lg:gap-20">
      <aside
        aria-label="Profile"
        className="[@media(min-width:1024px)_and_(min-height:800px)]:sticky lg:top-28"
      >
        <div className="flex items-center gap-5 lg:block">
          <div className="relative aspect-square w-24 shrink-0 overflow-hidden rounded-2xl bg-[var(--color-panel)] ring-1 ring-[var(--color-line)] sm:w-32 lg:aspect-[4/3] lg:w-full">
            <Image
              src="/images/profile.png"
              alt=""
              fill
              sizes="(min-width: 1024px) 280px, (min-width: 640px) 128px, 96px"
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="min-w-0 lg:mt-6">
            <h1 className="m-0 text-2xl leading-tight font-medium tracking-tight text-balance sm:text-3xl">
              Augustine Okechukwu Chima
            </h1>
            <p className="mt-2 mb-0 text-sm leading-relaxed text-[var(--color-accent)]">
              Software Developer &middot; Frontend Specialist &middot; UI Architect
            </p>
          </div>
        </div>

        <dl className="mt-6 mb-0 grid grid-cols-2 gap-x-6 border-t border-[var(--color-line)] text-sm lg:grid-cols-1">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-col gap-1 border-b border-[var(--color-line)] py-3 lg:flex-row lg:items-baseline lg:justify-between lg:gap-4"
            >
              <dt className="text-[var(--color-muted)]">{fact.label}</dt>
              <dd
                className={`m-0 lg:text-right ${fact.live ? 'flex items-center gap-2 text-[var(--color-accent)] lg:justify-end' : ''}`}
              >
                {fact.live && (
                  <span className="h-1.5 w-1.5 rounded-full bg-current" aria-hidden="true" />
                )}
                <span className="tabular-nums">{fact.value}</span>
                {fact.note && (
                  <span className="block text-xs text-[var(--color-muted)]">{fact.note}</span>
                )}
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button href="/projects" variant="primary">
            View my work
          </Button>
          <Button href="/contact">Reach out</Button>
        </div>
      </aside>

      <div className="mt-14 min-w-0 lg:mt-0 lg:pt-1">
        <p className="m-0 max-w-3xl text-2xl leading-snug font-normal tracking-tight text-balance sm:text-3xl lg:text-[2.125rem]">
          I design and build responsive web experiences that feel{' '}
          <span className="text-[var(--color-accent)]">clear, useful, and considered</span> from the
          first screen to the final detail.
        </p>
        <p className="mt-6 mb-0 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
          With a strong foundation in modern frontend technologies and a keen eye for interaction
          design, I craft digital products that are both beautiful and functional.
        </p>

        <section aria-labelledby="experience-heading" className="mt-16 md:mt-20">
          <h2
            id="experience-heading"
            className="m-0 border-b border-[var(--color-line)] pb-4 text-2xl font-medium tracking-tight"
          >
            Experience
          </h2>
          <ol className="m-0 list-none p-0">
            {timeline.map((item) => (
              <li
                key={`${item.year}-${item.role}`}
                className="grid gap-x-8 gap-y-2 border-b border-[var(--color-line)] py-7 sm:grid-cols-[minmax(0,1fr)_auto]"
              >
                <div className="min-w-0">
                  <h3 className="m-0 text-lg leading-snug font-medium sm:text-xl">{item.role}</h3>
                  <p className="mt-1 mb-0 text-sm text-[var(--color-accent)]">{item.company}</p>
                </div>
                <p className="order-first m-0 flex items-center gap-2 text-sm text-[var(--color-muted)] tabular-nums sm:order-none sm:self-start sm:justify-end sm:pt-1">
                  {item.current && (
                    <span
                      className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"
                      aria-hidden="true"
                    />
                  )}
                  {item.year}
                </p>
                <p className="mt-2 mb-0 max-w-2xl text-base leading-relaxed text-[var(--color-muted)] sm:col-span-2">
                  {item.description}
                </p>
              </li>
            ))}
          </ol>
        </section>

        <section aria-labelledby="skills-heading" className="mt-16 md:mt-20">
          <h2
            id="skills-heading"
            className="m-0 border-b border-[var(--color-line)] pb-4 text-2xl font-medium tracking-tight"
          >
            Skills &amp; Tools
          </h2>
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="grid gap-4 border-b border-[var(--color-line)] py-6 sm:grid-cols-[120px_minmax(0,1fr)] sm:gap-8"
            >
              <h3 className="m-0 pt-1.5 text-base font-medium">{group.category}</h3>
              <ul className="m-0 flex list-none flex-wrap gap-2 p-0">
                {group.items.map((skill) => (
                  <li
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] bg-[var(--color-panel)] px-3 py-1.5 text-sm"
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
        </section>
      </div>
    </div>
  )
}
