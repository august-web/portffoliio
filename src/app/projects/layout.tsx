import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Explore the software development projects by Augustine Okechukwu Chima — full-stack platforms, frontend interfaces, and developer tools.',
  alternates: {
    canonical: 'https://augustineportfolio.dev/projects',
  },
  openGraph: {
    title: 'Projects | Augustine Okechukwu Chima',
    description:
      'Explore software development projects by Augustine Okechukwu Chima — full-stack platforms, frontend interfaces, and developer tools.',
  },
}

export default function ProjectsLayout({ children }: { children: React.ReactNode }) {
  return children
}
