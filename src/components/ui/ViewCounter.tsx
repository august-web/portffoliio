'use client'

import React, { useEffect, useState } from 'react'

export default function ViewCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    const key = 'view_recorded'
    const needsIncrement = !sessionStorage.getItem(key)

    const req = needsIncrement ? fetch('/api/views', { method: 'POST' }) : fetch('/api/views')

    req
      .then((r) => r.json())
      .then((d) => {
        setCount(d.count)
        if (needsIncrement) sessionStorage.setItem(key, '1')
      })
      .catch(() => {})
  }, [])

  return (
    <span className="inline-flex items-center gap-1.5">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
      <span className={count === null ? 'opacity-0' : ''}>
        {count !== null ? count.toLocaleString() : '0'} views
      </span>
    </span>
  )
}
