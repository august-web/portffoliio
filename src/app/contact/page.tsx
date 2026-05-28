'use client'

import React, { useState, FormEvent } from 'react'
import { motion } from 'framer-motion'

export default function ContactPage() {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError('')

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formState),
    })

    if (res.ok) {
      setSubmitted(true)
      setFormState({ name: '', email: '', message: '' })
    } else {
      const data = await res.json()
      setError(data.error || 'Something went wrong. Please try again.')
    }
  }

  return (
    <div className="py-12 max-w-[720px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-[var(--color-accent)] text-xs font-black uppercase tracking-wider mb-4">
          Get in touch
        </p>
        <h1 className="text-[5.6rem] leading-[0.9] uppercase m-0 mb-4 max-md:text-[3.6rem] max-sm:text-[2.8rem]">
          Contact
        </h1>
        <p className="text-[var(--color-muted)] text-lg mb-10">
          Have a role, project, or collaboration in mind? Send me a message.
        </p>
      </motion.div>

      {submitted ? (
        <motion.div
          className="border border-[var(--color-accent)] bg-[rgba(102,242,194,0.06)] p-8 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <p className="text-[var(--color-accent)] font-bold text-xl m-0 mb-2">Message sent!</p>
          <p className="text-[var(--color-muted)] m-0">
            I&apos;ll get back to you as soon as possible.
          </p>
        </motion.div>
      ) : (
        <motion.form
          className="grid gap-6"
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-2 gap-4 max-sm:grid-cols-1">
            <div className="grid gap-2">
              <label
                htmlFor="name"
                className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-muted)]"
              >
                Your Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={formState.name}
                onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                className="border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200"
              />
            </div>
            <div className="grid gap-2">
              <label
                htmlFor="email"
                className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-muted)]"
              >
                Your Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={formState.email}
                onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                className="border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200"
              />
            </div>
          </div>
          <div className="grid gap-2">
            <label
              htmlFor="message"
              className="text-xs font-extrabold uppercase tracking-wider text-[var(--color-muted)]"
            >
              Your Message
            </label>
            <textarea
              id="message"
              required
              rows={6}
              value={formState.message}
              onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
              className="border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-[var(--color-text)] outline-none focus:border-[var(--color-accent)] transition-colors duration-200 resize-y"
            />
          </div>
          {error && <p className="text-[var(--color-danger)] text-sm m-0">{error}</p>}
          <button
            type="submit"
            className="bg-[var(--color-accent)] text-[#04100c] border border-[var(--color-accent)] px-[14px] py-3 text-xs font-extrabold uppercase tracking-wider cursor-pointer hover:brightness-110 transition-all duration-200 w-fit"
          >
            Send Your Message
          </button>
        </motion.form>
      )}
    </div>
  )
}
