/**
 * Skills Data Configuration
 * All skills and strengths displayed in the Skills section
 */

export const SKILL_GROUPS = [
  {
    category: 'Frontend Development',
    items: [
      'React.js',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'HTML5 & CSS3',
      'Redux Toolkit',
      'Vite',
    ],
    icon: '⚛️',
    gradient: 'from-indigo-500 to-purple-500',
    bgLight: 'from-indigo-50 to-purple-50',
  },
  {
    category: 'Backend Development',
    items: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Mongoose',
      'RESTful APIs',
      'JWT Authentication',
    ],
    icon: '🖥️',
    gradient: 'from-emerald-500 to-teal-500',
    bgLight: 'from-emerald-50 to-teal-50',
  },
  {
    category: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'VS Code', 'Postman', 'AI-Assisted Workflow'],
    icon: '🛠️',
    gradient: 'from-orange-500 to-rose-500',
    bgLight: 'from-orange-50 to-rose-50',
  },
];

export const STRENGTHS = [
  { trait: 'Strong interpersonal skills', icon: '🤝' },
  { trait: 'Calm under pressure', icon: '🧘' },
  { trait: 'Goal-oriented', icon: '🎯' },
  { trait: 'Self-motivated', icon: '🚀' },
  { trait: 'Eager to learn', icon: '📚' },
  { trait: 'Adaptable', icon: '🔄' },
];

export const LANGUAGES = [
  { name: 'English', level: 'Proficient' },
  { name: 'Hindi', level: 'Native' },
];
