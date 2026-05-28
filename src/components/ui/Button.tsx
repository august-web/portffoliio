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
    'inline-flex items-center justify-center text-xs font-extrabold tracking-wider uppercase px-3.5 py-3 border transition-colors duration-200 no-underline max-sm:w-full max-sm:min-h-14'
  const variants = {
    primary:
      'bg-[var(--color-accent)] text-[#04100c] border-[var(--color-accent)] hover:brightness-110',
    secondary:
      'border-[var(--color-line)] bg-white/3 text-[var(--color-text)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]',
  }

  return (
    <a href={href} className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </a>
  )
}
