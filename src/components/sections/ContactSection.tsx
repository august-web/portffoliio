import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { iconMap } from '../ui/Icons'
import Button from '../ui/Button'

const links = [
  { label: 'GitHub', href: 'https://github.com/august-web' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/august-web/' },
  { label: 'WhatsApp', href: 'https://wa.me/233533027046' },
]

export default function ContactSection() {
  return (
    <section
      className="section-spacing grid gap-8 pb-20 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16"
      id="contact"
    >
      <h2 className="section-heading">Have a role, project, or collaboration in mind?</h2>
      <div>
        <Button variant="primary" href="mailto:augustinechima17@gmail.com">
          Email me <ArrowUpRight size={18} aria-hidden="true" />
        </Button>
        <div className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
          {links.map((link) => {
            const Icon = iconMap[link.label]
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center gap-2 text-sm text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-accent)]"
              >
                {Icon && <Icon />}
                {link.label}
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
