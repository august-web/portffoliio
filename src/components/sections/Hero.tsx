import React from 'react'
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react'
import Button from '../ui/Button'
import TerminalCard from '../ui/TerminalCard'

export default function Hero() {
  return (
    <section className="py-[var(--section-space)]" id="home">
      <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.9fr] lg:gap-16">
        <div className="min-w-0">
          <h1 className="m-0 text-[clamp(2.75rem,6.2vw,5.25rem)] font-medium leading-[1.04] text-[var(--color-text)]">
            Augustine
            <br />
            Okechukwu Chima
          </h1>
          <p className="mb-6 mt-5 text-xl font-medium text-[var(--color-accent)] sm:text-2xl">
            Software Developer
          </p>
          <p className="m-0 max-w-xl text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
            I build web experiences that drive results — from revenue growth and search dominance to
            clear, lasting design that users trust.
          </p>
          <div className="mt-8 flex flex-wrap gap-3" aria-label="Portfolio links">
            <Button variant="primary" href="#work">
              View my work <ArrowDownRight size={18} aria-hidden="true" />
            </Button>
            <Button variant="secondary" href="/contact">
              Reach out <ArrowUpRight size={18} aria-hidden="true" />
            </Button>
          </div>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex min-h-11 items-center gap-2 text-sm text-[var(--color-muted)] no-underline transition-colors hover:text-[var(--color-text)]"
          >
            <Download size={16} aria-hidden="true" /> Download resume
          </a>
        </div>
        <TerminalCard />
      </div>
      <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-[var(--color-line)] pt-6 text-sm text-[var(--color-muted)] lg:mt-16">
        <span className="font-medium text-[var(--color-text)]">Recent client work</span>
        <a
          className="inline-flex min-h-11 items-center gap-2 text-inherit no-underline hover:text-[var(--color-accent)]"
          href="https://basukaenergy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          BaSuka Energy <ArrowUpRight size={14} aria-hidden="true" />
        </a>
        <a
          className="inline-flex min-h-11 items-center gap-2 text-inherit no-underline hover:text-[var(--color-accent)]"
          href="https://ferocefashionff.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          FÉROCE Fashion <ArrowUpRight size={14} aria-hidden="true" />
        </a>
      </div>
    </section>
  )
}
