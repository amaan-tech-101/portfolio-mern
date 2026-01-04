/**
 * Projects Data Configuration
 * All project information displayed in the Projects section
 */

export const PROJECTS = [
  {
    id: 1,
    title: 'Build and Barter',
    category: 'Full Stack',
    year: '2025',
    description:
      'A skill exchange web platform where users can offer and request skills from each other. Features user authentication, skill listings, and a matching system.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'User authentication & profiles',
      'Skill listing & search',
      'User-to-user messaging',
      'Responsive UI design',
    ],
    emoji: '🔄',
    gradient: 'from-indigo-400 to-purple-500',
    bgLight: 'from-indigo-50 to-purple-50',
    github: '#',
    live: '#',
  },
  {
    id: 2,
    title: 'Password Generator',
    category: 'Frontend',
    year: '2025',
    description:
      'A secure password generator tool built with React that creates strong, customizable passwords with options for length, symbols, and numbers.',
    techStack: ['React', 'CSS', 'JavaScript'],
    features: [
      'Customizable password length',
      'Include/exclude symbols & numbers',
      'One-click copy to clipboard',
      'Password strength indicator',
    ],
    emoji: '🔐',
    gradient: 'from-cyan-400 to-blue-500',
    bgLight: 'from-cyan-50 to-blue-50',
    github: 'https://github.com/amaan-tech-101/password-generator',
    live: 'https://password--generator.vercel.app/',
  },
  {
    id: 3,
    title: 'Task Tracker Pro',
    category: 'MERN App',
    year: '2025',
    description:
      'A full-stack task management application with CRUD operations, user authentication, and drag-and-drop functionality for organizing tasks.',
    techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'JWT authentication',
      'Create, edit, delete tasks',
      'Drag & drop organization',
      'Filter & search tasks',
    ],
    emoji: '✅',
    gradient: 'from-emerald-400 to-teal-500',
    bgLight: 'from-emerald-50 to-teal-50',
    github: '#',
    live: '#',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    category: 'Frontend',
    year: '2025',
    description:
      'This responsive portfolio website built with React and Tailwind CSS, featuring smooth animations and modern UI design.',
    techStack: ['React', 'Tailwind CSS', 'Vite', 'JavaScript'],
    features: [
      'Responsive design',
      'CSS animations',
      'Component-based architecture',
      'Contact form integration',
    ],
    emoji: '💼',
    gradient: 'from-orange-400 to-rose-500',
    bgLight: 'from-orange-50 to-rose-50',
    github: 'https://github.com/amaan-tech-101/portfolio-mern',
    live: '#',
  },
];
