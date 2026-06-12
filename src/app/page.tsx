import type { Metadata } from 'next'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Testimonials from '../components/sections/Testimonials'
import Skills from '../components/sections/Skills'
import ContactSection from '../components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Augustine Okechukwu Chima | Software Developer',
  description:
    'Frontend engineer & web developer who builds results-driven digital experiences — driving revenue growth, search visibility (AEO/GEO/SEO), and measurable business impact.',
  alternates: {
    canonical: 'https://augustineportfolio.dev',
  },
  openGraph: {
    title: 'Augustine Okechukwu Chima | Software Developer',
    description:
      'Frontend engineer & web developer who builds results-driven digital experiences — driving revenue, SEO, and business impact.',
  },
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Skills />
      <ContactSection />
    </>
  )
}
