import '../styles/globals.css'
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SkipLink from '../components/ui/SkipLink'
import PageTransition from '../components/layout/PageTransition'
import ScrollProgress from '../components/ui/ScrollProgress'
import BackToTop from '../components/ui/BackToTop'
import type { Metadata, Viewport } from 'next'

const baseUrl = 'https://augustineportfolio.dev'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Augustine Okechukwu Chima | Software Developer',
    template: '%s | Augustine Okechukwu Chima',
  },
  description:
    'Personal software development portfolio for Augustine Okechukwu Chima — frontend, full-stack product UI, and web systems.',
  openGraph: {
    title: 'Augustine Okechukwu Chima | Software Developer',
    description:
      'Personal software developer portfolio for Augustine Okechukwu Chima — frontend, full-stack product UI, and web systems.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Augustine Okechukwu Chima',
    url: baseUrl,
    images: [{ url: '/opengraph-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Augustine Okechukwu Chima | Software Developer',
    description:
      'Personal software developer portfolio for Augustine Okechukwu Chima — frontend, full-stack product UI, and web systems.',
    images: ['/opengraph-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.png', type: 'image/png' },
    ],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#04100c',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': `${baseUrl}/#person`,
      name: 'Augustine Okechukwu Chima',
      url: baseUrl,
      image: `${baseUrl}/images/profile.png`,
      jobTitle: 'Software Developer',
      sameAs: ['https://github.com/august-web', 'https://www.linkedin.com/in/august-web/'],
      email: 'augustinechima17@gmail.com',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'GH',
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${baseUrl}/#website`,
      url: baseUrl,
      name: 'Augustine Okechukwu Chima | Software Developer',
      description:
        'Personal software development portfolio for Augustine Okechukwu Chima — frontend, full-stack product UI, and web systems.',
      publisher: { '@id': `${baseUrl}/#person` },
    },
  ],
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
