import React from 'react'

const posts = [
  {
    title: 'Building a Performant Next.js Portfolio',
    date: 'May 2026',
    category: 'Engineering',
    excerpt:
      'Lessons learned from architecting a modern portfolio with Next.js 15, React 19, and Tailwind CSS v4.',
  },
  {
    title: 'Accessible UI: Beyond ARIA Labels',
    date: 'April 2026',
    category: 'Accessibility',
    excerpt:
      'A practical guide to building interfaces that work for everyone, from keyboard navigation to screen readers.',
  },
  {
    title: 'Why I Care About Calm Software',
    date: 'March 2026',
    category: 'Design',
    excerpt:
      'Thoughts on designing interfaces that reduce cognitive load and create a sense of ease.',
  },
]

const blogStats = [
  { label: 'Articles', value: String(posts.length) },
  { label: 'Topics', value: String(new Set(posts.map((post) => post.category)).size) },
  { label: 'Latest', value: posts[0].date },
  { label: 'Status', value: 'Writing' },
]

export default function BlogPage() {
  return (
    <div className="py-12 md:py-16">
      <header className="mb-10 md:mb-12">
        <h1 className="m-0 text-4xl leading-tight tracking-tight md:text-6xl">Blog</h1>
        <p className="mt-4 mb-0 max-w-xl text-base leading-relaxed text-[var(--color-muted)]">
          Engineering, accessibility, and design.
        </p>
      </header>

      <dl className="mb-4 grid grid-cols-2 gap-x-8 gap-y-6 border-y border-[var(--color-line)] py-6 sm:grid-cols-4">
        {blogStats.map((stat) => (
          <div key={stat.label}>
            <dt className="text-sm text-[var(--color-muted)]">{stat.label}</dt>
            <dd className="mt-2 mb-0 text-base font-medium tabular-nums">{stat.value}</dd>
          </div>
        ))}
      </dl>

      <div>
        {posts.map((post) => (
          <article
            key={post.title}
            className="grid gap-4 border-b border-[var(--color-line)] py-8 md:grid-cols-[180px_1fr] md:gap-10 md:py-10"
          >
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2 text-sm md:flex-col">
              <span className="text-[var(--color-accent)]">{post.category}</span>
              <span className="tabular-nums text-[var(--color-muted)]">{post.date}</span>
            </div>
            <div className="min-w-0 max-w-3xl">
              <h2 className="m-0 text-2xl leading-snug font-medium md:text-3xl">{post.title}</h2>
              <p className="mt-4 mb-0 max-w-2xl text-base leading-relaxed text-[var(--color-muted)]">
                {post.excerpt}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
