'use client'

import React from 'react'

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ReactNode
}

interface ErrorBoundaryState {
  hasError: boolean
}

export default class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div className="flex flex-col items-center justify-center min-h-[30vh] p-8 text-center">
            <p className="text-[var(--color-danger)] text-sm font-extrabold uppercase tracking-wider m-0 mb-3">
              Something went wrong
            </p>
            <p className="text-[var(--color-muted)] text-sm m-0 max-w-[400px]">
              An unexpected error occurred. Try refreshing the page.
            </p>
          </div>
        )
      )
    }

    return this.props.children
  }
}
