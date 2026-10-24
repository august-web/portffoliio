import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <section
      className="section-spacing grid items-start gap-10 lg:grid-cols-2 lg:gap-16"
      id="about"
    >
      <div>
        <h2 className="section-heading">
          Engineering interfaces that feel sharp, fast, and intentional.
        </h2>
        <Image
          src="/images/profile.png"
          alt="Augustine Okechukwu Chima"
          width={96}
          height={112}
          className="mt-8 rounded-xl object-cover"
        />
      </div>
      <div className="max-w-prose space-y-6 text-base leading-relaxed text-[var(--color-muted)] sm:text-lg">
        <p className="m-0">
          I care about the details people notice and the structure they do not have to think about:
          readable layouts, responsive behavior, accessible interactions, and code that can keep
          growing after launch.
        </p>
        <p className="m-0">
          With experience across the full stack &mdash; from React and Next.js on the frontend to
          Node.js, PostgreSQL, and cloud deployment &mdash; I bring ideas to life with clean
          architecture and thoughtful interaction design.
        </p>
      </div>
    </section>
  )
}
