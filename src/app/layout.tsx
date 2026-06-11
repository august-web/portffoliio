import '../styles/globals.css'
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SkipLink from '../components/ui/SkipLink'
import PageTransition from '../components/layout/PageTransition'
import ScrollProgress from '../components/ui/ScrollProgress'
import BackToTop from '../components/ui/BackToTop'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Augustine Okechukwu Chima | Software Developer',
    template: '%s | Augustine Okechukwu Chima',
  },
  description:
    'Personal software development portfolio for Augustine Okechukwu Chima — frontend, full-stack product UI, and web systems.',
  openGraph: {
    title: 'Augustine Okechukwu Chima | Software Developer',
    description:
      'Personal software developer portfolio for Augustine okechukwu Chima — frontend, full-stack product UI, and web systems.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Augustine Okechukwu Chima',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Augustine Okechukwu Chima | Software Developer',
    description:
      'Personal software developer portfolio for Augustine Okechuwku Chima — frontend, full-stack product UI, and web systems.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Augustine Okechukwu Chima',
  url: 'https://augustineportfolio.dev',
  image: '/images/profile.png',
  jobTitle: 'Software Developer',
  sameAs: ['https://github.com/august-web', 'https://www.linkedin.com/in/august-web/'],
  email: 'augustinechima17@gmail.com',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'GH',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SkipLink />
        <ScrollProgress />
        <div className="w-[min(1180px,calc(100%_-_32px))] mx-auto max-md:w-[min(100%_-_24px,720px)] max-sm:w-[min(100%_-_20px,420px)]">
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            <PageTransition>{children}</PageTransition>
          </main>
          <Footer />
        </div>
        <BackToTop />
      </body>
    </html>
  )
}
