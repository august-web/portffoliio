'use client'

import React from 'react'
import Image from 'next/image'

const lines = [
  { key: 'user', value: 'Augustine Okechukwu Chima' },
  { key: 'status', value: 'Available for opportunities' },
  { key: 'location', value: 'Ghana / Remote' },
  { key: 'focus', value: 'Full-stack, product UI, web systems' },
  { key: 'experience', value: '4+ years building web apps' },
  { key: 'stack', value: 'React, Next.js, TypeScript' },
]

export default function TerminalCard() {
  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)]">
      <div className="flex items-center gap-3 border-b border-[var(--color-line)] px-6 py-5">
        <Image
          src="/images/profile.png"
          alt="Augustine Okechukwu Chima"
          width={56}
          height={56}
          priority
          className="size-14 rounded-xl object-cover object-top"
        />
        <div>
          <p className="m-0 text-sm font-medium">Developer profile</p>
          <p className="mb-0 mt-1 text-xs text-[var(--color-muted)]">
            A little about the person behind the work.
          </p>
        </div>
      </div>
      <dl className="m-0 grid gap-5 p-6 font-mono text-xs leading-relaxed sm:text-sm">
        {lines.map((line) => (
          <div
            key={line.key}
            className="grid grid-cols-[5rem_minmax(0,1fr)] gap-3 sm:grid-cols-[6rem_minmax(0,1fr)]"
          >
            <dt className="text-[var(--color-accent)]">{line.key}</dt>
            <dd className="m-0 break-words text-[var(--color-text)]">{line.value}</dd>
          </div>
        ))}
      </dl>
      <div className="flex items-center gap-2 border-t border-[var(--color-line)] px-6 py-4 text-xs text-[var(--color-muted)]">
        <span className="size-1.5 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
        Available for opportunities
      </div>
    </div>
  )
}
