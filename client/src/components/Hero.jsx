/**
 * Hero Section Component
 * Displays the main hero section with typing animation and profile
 * @module components/sections/Hero
 */

import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { PERSONAL_INFO, HERO_ROLES, HERO_CONTACT_LINKS } from "../constants";

/**
 * Hero component with animated typing effect and profile display
 * @returns {JSX.Element} Hero section
 */
function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation effect
  useEffect(() => {
    const role = HERO_ROLES[currentRoleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setCurrentText(role.substring(0, currentText.length + 1));
          if (currentText === role) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setCurrentText(role.substring(0, currentText.length - 1));
          if (currentText === "") {
            setIsDeleting(false);
            setCurrentRoleIndex((prev) => (prev + 1) % HERO_ROLES.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <>
      <Helmet>
        <title>Mohammad Amaan | Aspiring MERN Developer</title>
        <meta
          name="description"
          content="Mohammad Amaan - BCA Graduate learning MERN stack development. View my portfolio, projects, and skills."
        />
        <meta
          property="og:title"
          content="Mohammad Amaan | Aspiring MERN Developer"
        />
        <meta
          property="og:description"
          content="BCA Graduate learning full-stack web development with React, Node.js, and MongoDB."
        />
        <meta property="og:url" content="https://amaan-dev.vercel.app/" />
        <link rel="canonical" href="https://amaan-dev.vercel.app/" />
      </Helmet>
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-indigo-50/30 to-white pt-20 sm:pt-24 px-4 sm:px-6 relative overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-5 sm:right-10 w-48 sm:w-72 h-48 sm:h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob delay-200"></div>
        <div className="absolute bottom-20 left-1/3 w-48 sm:w-72 h-48 sm:h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob delay-400"></div>

        {/* Floating shapes */}
        <div className="hidden sm:block absolute top-32 left-20 w-4 h-4 bg-indigo-400 rounded-full animate-float opacity-60"></div>
        <div className="hidden sm:block absolute top-48 right-32 w-6 h-6 bg-purple-400 rounded animate-float-delayed opacity-40 rotate-45"></div>
        <div className="hidden sm:block absolute bottom-40 left-40 w-3 h-3 bg-pink-400 rounded-full animate-float opacity-50"></div>
        <div className="hidden md:block absolute top-60 right-20 w-8 h-8 border-2 border-indigo-300 rounded-full animate-spin-slow opacity-40"></div>

        <div className="max-w-3xl mx-auto text-center relative z-10">
          {/* Profile Photo */}
          <div className="w-36 h-36 sm:w-44 sm:h-44 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden shadow-2xl animate-bounce-in animate-pulse-glow ring-4 ring-white bg-gradient-to-br from-indigo-100 to-purple-100">
            <img
              src="/profile.jpg"
              alt={PERSONAL_INFO.name}
              className="w-full h-full object-cover object-center scale-125"
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.innerHTML =
                  '<span class="text-6xl sm:text-7xl flex items-center justify-center h-full">👨‍💻</span>';
              }}
            />
          </div>

          {/* Intro with staggered animation */}
          <p className="text-indigo-600 font-semibold mb-2 sm:mb-3 tracking-widest uppercase text-xs sm:text-sm animate-slide-up">
            Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 animate-slide-up delay-100">
            <span className="gradient-text-animated">{PERSONAL_INFO.name}</span>
          </h1>

          {/* Typing Animation */}
          <h2 className="text-lg sm:text-xl md:text-2xl text-gray-500 mb-4 sm:mb-6 animate-slide-up delay-200 h-8 sm:h-10">
            <span className="text-gray-900 font-semibold">BCA Graduate</span> |{" "}
            <span className="text-indigo-600 font-semibold">
              {currentText}
              <span className="animate-pulse text-indigo-400">|</span>
            </span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-lg mx-auto leading-relaxed animate-slide-up delay-300 px-4 sm:px-0">
            Passionate about building scalable web applications. Transforming
            ideas into reality using MongoDB, Express, React, and Node.js.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-gray-500 mb-6 sm:mb-8 animate-slide-up delay-300 text-sm sm:text-base">
            <span>📍</span>
            <span>{PERSONAL_INFO.location}</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-slide-up delay-400 px-4 sm:px-0">
            <a
              href="#projects"
              className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-300 hover:-translate-y-2 hover:scale-105 overflow-hidden text-sm sm:text-base"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 animate-shimmer"></div>
            </a>
            <a
              href="#contact"
              className="border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 text-gray-700 hover:text-indigo-600 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:-translate-y-2 text-sm sm:text-base"
            >
              Get in Touch
            </a>
          </div>

          {/* Contact links */}
          <div className="flex justify-center gap-3 sm:gap-4 mt-8 sm:mt-12">
            {HERO_CONTACT_LINKS.map((item, i) => (
              <a
                key={i}
                href={item.link}
                title={item.label}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-lg sm:text-xl hover:scale-125 hover:rotate-12 transition-all duration-300 animate-bounce-in"
                style={{ animationDelay: `${0.5 + i * 0.1}s` }}
              >
                {item.icon}
              </a>
            ))}
          </div>

          {/* Scroll indicator */}
          <div className="mt-12 sm:mt-16 animate-bounce">
            <div className="w-5 h-8 sm:w-6 sm:h-10 mx-auto border-2 border-gray-300 rounded-full flex justify-center pt-1.5 sm:pt-2">
              <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-indigo-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
