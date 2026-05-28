import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] py-8 px-4 text-center">
      <p className="text-[var(--color-muted)] text-sm m-0 max-sm:text-xs">
        &copy; {new Date().getFullYear()} Augustine Okechukwu Chima. Built with Next.js.
      </p>
    </footer>
  )
}
