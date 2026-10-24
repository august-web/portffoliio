import React from 'react'

interface ButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: 'primary' | 'secondary'
  href: string
}

export default function Button({
  variant = 'secondary',
  href,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const base =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold border transition-colors duration-200 no-underline'
  const variants = {
    primary:
      'bg-[var(--color-accent)] text-[var(--color-on-accent)] border-[var(--color-accent)] hover:brightness-110',
    secondary:
      'border-[var(--color-line)] bg-[var(--color-panel)] text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  }

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
