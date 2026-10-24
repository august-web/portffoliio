'use client'

import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Menu, X, Terminal } from 'lucide-react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Projects', href: '/projects' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const dialog = menuRef.current
    const previousOverflow = document.body.style.overflow
    dialog?.showModal()
    document.body.style.overflow = 'hidden'
    return () => {
      dialog?.close()
      document.body.style.overflow = previousOverflow
    }
  }, [menuOpen])

  function navigateHome(href: string) {
    setMenuOpen(false)
    if (href === '/' && pathname === '/') {
      window.scrollTo({
        top: 0,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      })
    }
  }

  return (
    <header className="sticky top-4 z-50 pt-2">
      <div className="flex min-h-20 items-center justify-between gap-4 rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)]/95 px-5 backdrop-blur-md max-sm:min-h-18 max-sm:px-4">
        <Link
          href="/"
          onClick={() => navigateHome('/')}
          className="flex shrink-0 items-center gap-3 no-underline"
          aria-label="Go to home"
        >
          <span className="grid size-10 place-items-center rounded-xl bg-[var(--color-accent)] text-[var(--color-on-accent)]">
            <Terminal size={22} strokeWidth={2} aria-hidden="true" />
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-[var(--color-text)]">
              Augustine Chima
            </span>
            <span className="text-xs text-[var(--color-muted)]">Software developer</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => navigateHome(link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-lg px-4 py-3 text-sm font-medium no-underline transition-colors ${isActive ? 'bg-[var(--color-accent)]/8 text-[var(--color-accent)]' : 'text-[var(--color-muted)] hover:text-[var(--color-text)]'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <span className="hidden items-center gap-2 text-xs text-[var(--color-muted)] lg:inline-flex">
          <span className="size-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
          Available for work
        </span>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          className="grid size-11 shrink-0 place-items-center rounded-xl border border-[var(--color-line)] text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)] lg:hidden"
          aria-label="Open menu"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <Menu size={22} aria-hidden="true" />
        </button>
      </div>

      <dialog
        ref={menuRef}
        id="mobile-menu"
        aria-labelledby="mobile-menu-title"
        onCancel={(event) => {
          event.preventDefault()
          setMenuOpen(false)
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setMenuOpen(false)
        }}
        className="m-auto max-h-[90dvh] w-[calc(100%-40px)] max-w-sm rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 text-[var(--color-text)] backdrop:bg-black/70"
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <p id="mobile-menu-title" className="m-0 text-lg font-medium">
            Navigation
          </p>
          <button
            type="button"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
            className="grid size-11 place-items-center rounded-lg border border-[var(--color-line)]"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>
        <nav className="flex flex-col gap-2" aria-label="Mobile navigation">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => navigateHome(link.href)}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-xl px-4 py-4 text-lg font-medium no-underline ${isActive ? 'bg-[var(--color-accent)]/8 text-[var(--color-accent)]' : 'text-[var(--color-text)] hover:bg-[var(--color-panel-strong)]'}`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>
        <p className="mb-0 mt-6 border-t border-[var(--color-line)] pt-5 text-sm text-[var(--color-muted)]">
          Ghana / Remote · Available for opportunities
        </p>
      </dialog>
    </header>
  )
}
