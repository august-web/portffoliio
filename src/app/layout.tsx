import '../styles/globals.css'
import React from 'react'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SkipLink from '../components/ui/SkipLink'
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SkipLink />
        <div className="w-[min(1180px,calc(100%_-_32px))] mx-auto max-md:w-[min(100%_-_24px,720px)] max-sm:w-[min(100%_-_20px,420px)]">
          <Navbar />
          <main id="main-content" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
