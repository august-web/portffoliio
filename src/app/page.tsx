import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Projects from '../components/sections/Projects'
import Testimonials from '../components/sections/Testimonials'
import Skills from '../components/sections/Skills'
import ContactSection from '../components/sections/ContactSection'

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
