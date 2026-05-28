export interface Project {
  name: string
  type: string
  description: string
  image?: string
}

export const projects: Project[] = [
  {
    name: 'Portfolio Console',
    type: 'Frontend',
    description:
      'A personal web presence built around clarity, speed, responsive design, and a strong first impression.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Interface Lab',
    type: 'Web App',
    description:
      'Reusable UI patterns for dashboards, content-heavy pages, forms, and focused product workflows.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Developer Utilities',
    type: 'Developer Tool',
    description:
      'Small tools and scripts for reducing repeated work, improving structure, and making builds easier to maintain.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'E-Commerce Dashboard',
    type: 'Full Stack',
    description:
      'A comprehensive analytics dashboard for tracking sales, inventory, and customer metrics in real time.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Weather CLI Tool',
    type: 'Developer Tool',
    description:
      'A command-line weather application that fetches live forecasts and displays them in a clean terminal UI.',
    image: '/images/placeholder.svg',
  },
  {
    name: 'Accessible Component Library',
    type: 'UI Library',
    description:
      'A growing collection of accessible, reusable React components following WAI-ARIA best practices.',
    image: '/images/placeholder.svg',
  },
]
