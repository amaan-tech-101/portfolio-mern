/**
 * Personal Information Configuration
 * Central location for all personal data used across the portfolio
 */

export const PERSONAL_INFO = {
  name: 'Mohammad Amaan',
  shortName: 'MA',
  title: 'Aspiring MERN Developer',
  email: 'amaan.work101@gmail.com',
  location: 'India',
  
  // Social Links
  linkedin: 'https://www.linkedin.com/in/mohammad-amaan-74115b3a2',
  github: 'https://github.com/amaan-tech-101',
  
  // Resume
  resumePath: '/resume.pdf',
  resumeFileName: 'Mohammad_Amaan_Resume.pdf',
};

/**
 * Typing animation roles displayed in Hero section
 */
export const HERO_ROLES = [
  'MERN Stack Enthusiast',
  'Junior Web Developer',
  'React Enthusiast',
  'Problem Solver',
];

/**
 * Navigation links
 */
export const NAV_LINKS = ['About', 'Projects', 'Skills', 'Contact'];

/**
 * Contact information displayed in Contact section
 */
export const CONTACT_INFO = [
  { 
    icon: '📍', 
    label: 'Location', 
    value: 'India',
    link: null,
  },
  {
    icon: '📞',
    label: 'Phone',
    value: 'Available on request',
    link: null,
  },
  {
    icon: '📧',
    label: 'Email',
    value: 'amaan.work101@gmail.com',
    link: 'mailto:amaan.work101@gmail.com',
  },
];

/**
 * Hero section contact links (social icons)
 */
export const HERO_CONTACT_LINKS = [
  {
    icon: '📧',
    link: 'mailto:amaan.work101@gmail.com',
    label: 'Email',
  },
  { 
    icon: '📞', 
    link: '#', 
    label: 'Phone' 
  },
  {
    icon: '💼',
    link: 'https://www.linkedin.com/in/mohammad-amaan-74115b3a2',
    label: 'LinkedIn',
  },
];
