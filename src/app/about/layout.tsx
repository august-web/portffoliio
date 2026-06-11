import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn more about Augustine Okechukwu Chima — a software developer, frontend specialist, and UI architect from Ghana with 4+ years of experience.',
  alternates: {
    canonical: 'https://augustineportfolio.dev/about',
  },
  openGraph: {
    title: 'About | Augustine Okechukwu Chima',
    description:
      'Learn more about Augustine Okechukwu Chima — a software developer, frontend specialist, and UI architect from Ghana.',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children
}
