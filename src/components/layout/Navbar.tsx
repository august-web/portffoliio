'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

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

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header className="sticky top-4 z-50">
      <div className="flex items-center justify-between min-h-16 px-5 py-2.5 border border-[var(--color-line)] bg-[var(--color-panel)]/90 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur-lg rounded-xl">
        <Link
          href="/"
          className="grid place-items-center w-[42px] h-[42px] bg-[var(--color-accent)] text-[#04100c] no-underline shrink-0 rounded-lg"
          aria-label="Go to home"
        >
          <svg
            viewBox="0 0 24 24"
            className="w-[22px] h-[22px]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7 11 2-2-2-2" />
            <path d="M11 13h4" />
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
          </svg>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
          {navLinks.map((link) => {
            const isActive = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
            return (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => {
                  if (link.href === '/' && pathname === '/') {
                    window.scrollTo({ top: 0, behavior: 'smooth' })
                  }
                }}
                className={`relative px-4 py-2.5 text-xs font-extrabold uppercase tracking-wider no-underline transition-all duration-200 rounded-lg ${
                  isActive
                    ? 'text-[var(--color-accent)]'
                    : 'text-[var(--color-text)]/70 hover:text-[var(--color-text)] hover:bg-white/3'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 border border-[var(--color-line)] bg-[rgba(102,242,194,0.06)] rounded-lg"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <span className="hidden md:inline-flex items-center gap-2 border border-[var(--color-line)] bg-white/3 px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-wider text-[var(--color-accent)] rounded-lg">
            <motion.span
              className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]"
              aria-hidden="true"
              animate={{ opacity: [1, 0.4, 1], scale: [1, 0.8, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            Online
          </span>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center border border-[var(--color-line)] bg-white/3 rounded-lg cursor-pointer hover:border-[var(--color-accent)] transition-colors duration-200"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            <div className="w-5 flex flex-col gap-1.5">
              <motion.span
                className="block h-[2px] bg-[var(--color-text)] rounded-full"
                animate={menuOpen ? { rotate: 45, y: 4.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
              <motion.span
                className="block h-[2px] bg-[var(--color-text)] rounded-full"
                animate={menuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
              />
              <motion.span
                className="block h-[2px] bg-[var(--color-text)] rounded-full"
                animate={menuOpen ? { rotate: -45, y: -4.5 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              className="fixed top-0 right-0 z-40 h-full w-80 max-sm:w-full border-l border-[var(--color-line)] bg-[var(--color-panel)]/95 backdrop-blur-xl px-6 py-8 pt-24 flex flex-col gap-1"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              aria-label="Mobile navigation"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setMenuOpen(false)
                      if (link.href === '/' && pathname === '/') {
                        window.scrollTo({ top: 0, behavior: 'smooth' })
                      }
                    }}
                    className={`px-5 py-4 text-base font-extrabold uppercase tracking-wider no-underline rounded-xl transition-all duration-200 ${
                      isActive
                        ? 'text-[var(--color-accent)] border border-[var(--color-line)] bg-[rgba(102,242,194,0.06)]'
                        : 'text-[var(--color-muted)] hover:text-[var(--color-text)] hover:bg-white/3'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}

              <div className="mt-auto pt-8 border-t border-[var(--color-line)]">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[var(--color-accent)]">
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] shadow-[0_0_12px_var(--color-accent)]"
                    aria-hidden="true"
                  />
                  Available for opportunities
                </span>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
