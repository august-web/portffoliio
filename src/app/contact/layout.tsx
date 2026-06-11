import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Augustine Okechukwu Chima for project collaborations, freelance work, or software development opportunities.',
  alternates: {
    canonical: 'https://augustineportfolio.dev/contact',
  },
  openGraph: {
    title: 'Contact | Augustine Okechukwu Chima',
    description:
      'Get in touch with Augustine Okechukwu Chima for project collaborations, freelance work, or software development opportunities.',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
