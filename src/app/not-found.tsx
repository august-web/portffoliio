import React from 'react'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center py-24">
      <h1 className="text-[8.75rem] leading-[0.88] uppercase m-0 mb-4 max-md:text-[5.2rem] max-sm:text-[3.55rem]">
        404
      </h1>
      <p className="text-[var(--color-accent-2)] text-[2.1rem] font-black uppercase mb-6 max-md:text-[1.55rem] max-sm:text-[1.2rem]">
        Page not found
      </p>
      <p className="text-[var(--color-muted)] text-lg mb-8 max-w-[480px]">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="border border-[var(--color-line)] bg-white/3 px-[14px] py-3 text-xs font-extrabold uppercase tracking-wider no-underline text-inherit hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
      >
        Go Home
      </Link>
    </div>
  )
}
