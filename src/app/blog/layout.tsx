import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Read articles by Augustine Okechukwu Chima about software development, frontend engineering, accessible UI design, and building calm, performant web experiences.',
  alternates: {
    canonical: 'https://augustineportfolio.dev/blog',
  },
  openGraph: {
    title: 'Blog | Augustine Okechukwu Chima',
    description:
      'Read articles by Augustine Okechukwu Chima about software development, frontend engineering, and accessible UI design.',
  },
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children
}
