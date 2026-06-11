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
    'Personal portfolio of Augustine Okechukwu Chima — frontend, full-stack developer and UI architect building responsive web experiences.',
  alternates: {
    canonical: 'https://augustineportfolio.dev',
  },
  openGraph: {
    title: 'Augustine Okechukwu Chima | Software Developer',
    description:
      'Personal portfolio of Augustine Okechukwu Chima — frontend, full-stack developer and UI architect.',
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
