# 💼 Mohammad Amaan - Portfolio

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

A modern, responsive portfolio website built with React and Tailwind CSS.

🔗 **Live Demo:** [amaan-dev.vercel.app](https://amaan-dev.vercel.app/)

---

## ✨ Features

- 🎨 **Modern UI** - Clean, gradient-rich design with smooth animations
- 📱 **Responsive** - Works on all devices (mobile, tablet, desktop)
- ⚡ **Fast** - Built with Vite for lightning-fast performance
- 📧 **Contact Form** - Working email integration with EmailJS
- 🔍 **SEO Optimized** - React Helmet, sitemap.xml, robots.txt
- 🔄 **Auto-Deploy** - GitHub to Vercel continuous deployment

---

## 🛠️ Tech Stack

| Category       | Technologies                |
| -------------- | --------------------------- |
| **Frontend**   | React 19, JavaScript (ES6+) |
| **Styling**    | Tailwind CSS 3.4            |
| **Build Tool** | Vite 7                      |
| **Email**      | EmailJS                     |
| **SEO**        | React Helmet Async          |
| **Deployment** | Vercel                      |

---

## 📁 Project Structure

```
portfolio-mern/
├── client/
│   ├── public/
│   │   ├── profile.jpg
│   │   ├── resume.pdf
│   │   ├── sitemap.xml
│   │   └── robots.txt
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── LoadingScreen.jsx
│   │   │   └── BackToTop.jsx
│   │   ├── constants/
│   │   │   ├── index.js
│   │   │   ├── personalInfo.js
│   │   │   ├── projects.js
│   │   │   ├── skills.js
│   │   │   └── about.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   └── package.json
└── README.md
```

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/amaan-tech-101/portfolio-mern.git

# Navigate to client folder
cd portfolio-mern/client

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view in browser.

### Build for Production

```bash
npm run build
```

---

## 📧 Contact Form Setup

This project uses [EmailJS](https://www.emailjs.com/) for the contact form.

1. Create free account at emailjs.com
2. Create email service and template
3. Update credentials in `src/components/Contact.jsx`

---

## 🌐 Deployment

The site is deployed on Vercel with automatic deployments from GitHub.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/amaan-tech-101/portfolio-mern)

---

## 📝 Customization

To use this as your own portfolio:

1. Update `src/constants/personalInfo.js` with your details
2. Update `src/constants/projects.js` with your projects
3. Update `src/constants/skills.js` with your skills
4. Replace `public/profile.jpg` with your photo
5. Replace `public/resume.pdf` with your resume

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Connect

- 💼 [LinkedIn](https://www.linkedin.com/in/mohammad-amaan-74115b3a2)
- 💻 [GitHub](https://github.com/amaan-tech-101)
- 🌐 [Portfolio](https://amaan-dev.vercel.app/)
- 📧 amaan.work101@gmail.com

---

<p align="center">Made with ❤️ by Mohammad Amaan</p>
