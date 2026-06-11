import React from 'react'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-[50vh]">
      <div className="flex items-center gap-3 font-mono text-sm text-[var(--color-muted)]">
        <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse shadow-[0_0_12px_var(--color-accent)]" />
        Loading...
      </div>
    </div>
  )
}
