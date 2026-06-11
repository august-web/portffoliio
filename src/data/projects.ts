export interface Project {
  name: string
  type: string
  description: string
  image: string
  url: string
  techStack: string[]
  featured?: boolean
  category: string
}

export const projects: Project[] = [
  {
    name: 'Nyas3',
    type: 'Platform',
    description:
      'A modern digital platform designed to provide users with a seamless and intuitive online experience, featuring a clean interface, optimized performance, and scalable architecture.',
    image: '/images/projects/nyas3.png',
    url: 'https://nyas3.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    featured: true,
    category: 'Full Stack',
  },
  {
    name: 'InnovoTech Lab',
    type: 'Community Platform',
    description:
      'A community platform empowering young Ghanaian students in robotics, IoT, and embedded systems through STEM education. Contributed to building and shaping the digital presence for this innovation hub.',
    image: '/images/projects/innovotech-lab.png',
    url: 'https://www.itlmakershub.com/',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
    featured: true,
    category: 'Full Stack',
  },
  {
    name: 'Litany',
    type: 'Platform',
    description:
      'A social achievement platform where users track goals, share progress, and celebrate wins. Built to turn everyday accomplishments into a shared, motivating feed.',
    image: '/images/projects/litany.png',
    url: 'https://litany.world/',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Full Stack',
  },
  {
    name: 'Chambey',
    type: 'Organization',
    description:
      'A professional organizational website built to strengthen brand presence, communicate impact, and provide visitors with a clear pathway to engage with the organization.',
    image: '/images/projects/chambey.png',
    url: 'https://chambeyorg.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Full Stack',
  },
  {
    name: 'Personal Portfolio',
    type: 'Portfolio',
    description:
      'A responsive portfolio website showcasing my skills, projects, achievements, and professional journey as a Full-Stack Developer and technology enthusiast.',
    image: '/images/projects/personal-portfolio.png',
    url: 'https://ac-portfolio-khaki.vercel.app/',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
  },
  {
    name: 'TechCrew',
    type: 'Landing Page',
    description:
      'A modern landing page developed for a technology-focused initiative, designed to attract users, communicate value, and drive engagement through strong visual storytelling.',
    image: '/images/projects/techcrew.png',
    url: 'https://techcrew-landing.vercel.app/',
    techStack: ['React', 'JavaScript', 'CSS'],
    category: 'Frontend',
  },
  {
    name: 'Pragia Connect',
    type: 'Platform',
    description:
      'A digital networking and community platform created to connect individuals, foster collaboration, and simplify communication through an intuitive user experience.',
    image: '/images/projects/pragia-connect.png',
    url: 'https://pragia-connect.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Full Stack',
  },
  {
    name: 'Grid Capture',
    type: 'Developer Tool',
    description:
      'A utility tool designed to capture, organize, and manage screen content with an intuitive grid-based interface, streamlining visual workflows for developers and designers.',
    image: '/images/projects/grid-capture.png',
    url: 'https://grid-capture.onrender.com/',
    techStack: ['React', 'JavaScript', 'CSS', 'Node.js'],
    category: 'Developer Tool',
  },
  {
    name: 'TechCrew Platform',
    type: 'Platform',
    description:
      'A comprehensive platform built for a technology-focused community, offering tools and resources to connect members, share knowledge, and drive collaborative innovation.',
    image: '/images/projects/techcrew-platform.png',
    url: 'https://techcrew-five.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Full Stack',
  },
  {
    name: 'Typing Assessment',
    type: 'Education',
    description:
      'An interactive typing practice tool built for students to improve their typing speed and accuracy through structured exercises, real-time feedback, and performance tracking.',
    image: '/images/projects/typing-assessment.png',
    url: 'https://high-priest-academy.vercel.app/',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    category: 'Frontend',
  },
]
