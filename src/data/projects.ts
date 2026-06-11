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
    image:
      'https://iad.microlink.io/1w_Nx7WKz4pfYOSG0M3ZxpTSfwvz0HEdF-8fw8q3_0DlI5fHzHyi7HvJ_eeU5VzHCLnv_fZNJv1tydwX7QwvEQ.png',
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
    image:
      'https://iad.microlink.io/3gF9jZXO4VMxAabNf5ORxbAJfA1oPPZkMVL8bVtpUssVRJOtKsfivXZOxnuItmYeaEPH9icz7F4TPIf9ip0Atw.png',
    url: 'https://www.itlmakershub.com/',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Sanity CMS'],
    featured: true,
    category: 'Full Stack',
  },
  {
    name: 'Chambey',
    type: 'Organization',
    description:
      'A professional organizational website built to strengthen brand presence, communicate impact, and provide visitors with a clear pathway to engage with the organization.',
    image:
      'https://iad.microlink.io/UvDDUptgFgqgQ0NBdkwLxX32IaMygW3EV5vHTTug1t83meXPfu7y0aqSxdgi-tymiXQ07vQGgUnPkLi6ik-LqQ.png',
    url: 'https://chambeyorg.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Full Stack',
  },
  {
    name: 'Personal Portfolio',
    type: 'Portfolio',
    description:
      'A responsive portfolio website showcasing my skills, projects, achievements, and professional journey as a Full-Stack Developer and technology enthusiast.',
    image:
      'https://iad.microlink.io/ZONd7WsmzPw_dnfEKzZLWDltfXTffZTaktGtX2b344gPWayoxQhSLtCrcvDNBbokmvhvqESzIyWevDqJg5yDMA.png',
    url: 'https://ac-portfolio-khaki.vercel.app/',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    category: 'Frontend',
  },
  {
    name: 'TechCrew',
    type: 'Landing Page',
    description:
      'A modern landing page developed for a technology-focused initiative, designed to attract users, communicate value, and drive engagement through strong visual storytelling.',
    image:
      'https://iad.microlink.io/6Um8LQf74i4_KV6sS1CBuL_GPIfDbDcH_kvRcPrk5B0ZOEmxJPqjX8Z0n7A2btIesyrbiNejX90PV0o1Uud6nQ.png',
    url: 'https://techcrew-landing.vercel.app/',
    techStack: ['React', 'JavaScript', 'CSS'],
    category: 'Frontend',
  },
  {
    name: 'Pragia Connect',
    type: 'Platform',
    description:
      'A digital networking and community platform created to connect individuals, foster collaboration, and simplify communication through an intuitive user experience.',
    image:
      'https://iad.microlink.io/PX5uDFtFG9xhyxljTtOaFUzVBDrtpleD7ljHJ5rBFlU0eSRy5tr2gBWD9m8ttp-5mWIYCSmhcJRZNtLju31C5A.png',
    url: 'https://pragia-connect.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Full Stack',
  },
  {
    name: 'Grid Capture',
    type: 'Developer Tool',
    description:
      'A utility tool designed to capture, organize, and manage screen content with an intuitive grid-based interface, streamlining visual workflows for developers and designers.',
    image:
      'https://iad.microlink.io/QEs9ewsxkPhEc-tw7smh98laCYtu9oAI3mVDrjq8H4U91bPkRu0MzzMClpkaw1v5eBPqEEKMY4KmaWTXClFnpA.png',
    url: 'https://grid-capture.onrender.com/',
    techStack: ['React', 'JavaScript', 'CSS', 'Node.js'],
    category: 'Developer Tool',
  },
  {
    name: 'TechCrew Platform',
    type: 'Platform',
    description:
      'A comprehensive platform built for a technology-focused community, offering tools and resources to connect members, share knowledge, and drive collaborative innovation.',
    image:
      'https://iad.microlink.io/yvJjxhd0fGv5yrEGwiHEc8NuSjXBVWxCoGNzrFFGKpeV0O75_g_VDivYOHO2HP5XpiwWqWSOlnmTpQIjEfwOFg.png',
    url: 'https://techcrew-five.vercel.app/',
    techStack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    category: 'Full Stack',
  },
  {
    name: 'Typing Assessment',
    type: 'Education',
    description:
      'An interactive typing practice tool built for students to improve their typing speed and accuracy through structured exercises, real-time feedback, and performance tracking.',
    image:
      'https://iad.microlink.io/yfeIka8Cyscy6CEZBk1UHqnxCROS3AlB_yzRFjLvkE-OsTuh2_fy1Cua1hzrcJOmXs_7rmvKt_CivWApYzlfzQ.png',
    url: 'https://high-priest-academy.vercel.app/',
    techStack: ['JavaScript', 'HTML', 'CSS'],
    category: 'Frontend',
  },
]
