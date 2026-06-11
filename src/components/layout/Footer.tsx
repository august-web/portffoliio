'use client'

import React from 'react'
import ViewCounter from '../ui/ViewCounter'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-8 px-4">
      <div className="flex items-center justify-between gap-6 max-sm:flex-col max-sm:text-center">
        <div>
          <p className="text-[var(--color-muted)] text-sm m-0 max-sm:text-xs">
            &copy; {new Date().getFullYear()} Augustine Okechukwu Chima. Built with Next.js.
          </p>
          <p className="text-[var(--color-muted)] text-[10px] font-extrabold uppercase tracking-wider m-0 mt-3">
            <ViewCounter />
          </p>
        </div>
        <a
          href="https://websitelaunches.com/site/augustineportfolio.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 hover:opacity-80 transition-opacity"
        >
          <img
            src="https://websitelaunches.com/badge/augustineportfolio.dev.svg?theme=dark"
            alt="Established online - Public launch record"
            width="255"
            height="55"
          />
        </a>
      </div>
    </footer>
  )
}
