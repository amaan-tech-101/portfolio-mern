/**
 * About Section Component
 * Displays personal info, career objective, and education
 * @module components/sections/About
 */

import React from "react";
import { STATS, EDUCATION, ABOUT_DESCRIPTION } from "../constants";

/**
 * About component displaying career objective and education timeline
 * @returns {JSX.Element} About section
 */
function About() {
  return (
    <section
      id="about"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-32 sm:w-48 lg:w-64 h-32 sm:h-48 lg:h-64 bg-purple-50 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-start">
          {/* Left Side - About & Education */}
          <div className="order-2 lg:order-1">
            <p className="text-indigo-600 font-semibold mb-2 uppercase text-xs sm:text-sm tracking-widest animate-slide-right">
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 animate-slide-right delay-100">
              Career <span className="gradient-text">Objective</span>
            </h2>
            <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded mb-4 sm:mb-6 animate-slide-right delay-200"></div>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8 animate-slide-right delay-300">
              {ABOUT_DESCRIPTION}
            </p>

            {/* Education Timeline */}
            <EducationTimeline education={EDUCATION} />
          </div>

          {/* Right Side - Image & Stats */}
          <div className="relative group order-1 lg:order-2">
            <div className="aspect-square max-w-xs sm:max-w-sm mx-auto lg:max-w-none rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center overflow-hidden hover-lift hover-glow">
              <span className="text-7xl sm:text-8xl lg:text-9xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                💻
              </span>
            </div>
            {/* Decorative elements */}
            <div className="hidden sm:block absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-br from-indigo-200 to-indigo-100 rounded-xl sm:rounded-2xl -z-10 animate-float"></div>
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -left-4 sm:-left-6 w-24 sm:w-36 h-24 sm:h-36 bg-gradient-to-br from-purple-200 to-purple-100 rounded-xl sm:rounded-2xl -z-10 animate-float-delayed"></div>
            <div className="hidden md:block absolute top-1/2 -right-4 w-6 sm:w-8 h-6 sm:h-8 bg-indigo-400 rounded-full animate-pulse"></div>
            <div className="hidden md:block absolute -bottom-2 left-1/3 w-4 sm:w-6 h-4 sm:h-6 bg-purple-400 rounded-full animate-bounce"></div>

            {/* Stats */}
            <StatsGrid stats={STATS} />
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Education timeline component
 * @param {Object} props - Component props
 * @param {Array} props.education - Education data array
 * @returns {JSX.Element} Education timeline
 */
function EducationTimeline({ education }) {
  return (
    <div className="mt-6 sm:mt-8">
      <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6 flex items-center gap-2">
        <span className="text-xl sm:text-2xl">🎓</span> Education
      </h3>
      <div className="space-y-3 sm:space-y-4">
        {education.map((edu, index) => (
          <div
            key={index}
            className="relative pl-5 sm:pl-6 border-l-2 border-indigo-200 hover:border-indigo-500 transition-colors group animate-slide-right"
            style={{ animationDelay: `${0.4 + index * 0.1}s` }}
          >
            <div className="absolute left-[-7px] sm:left-[-9px] top-0 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-indigo-100 border-2 border-indigo-500 group-hover:scale-125 transition-transform"></div>
            <p className="text-xs sm:text-sm text-indigo-600 font-semibold">
              {edu.year}
            </p>
            <p className="font-semibold text-gray-900 text-sm sm:text-base">
              {edu.degree}
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              {edu.institution}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Stats grid component
 * @param {Object} props - Component props
 * @param {Array} props.stats - Stats data array
 * @returns {JSX.Element} Stats grid
 */
function StatsGrid({ stats }) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-6 sm:mt-8">
      {stats.map((stat, index) => (
        <div
          key={stat.label}
          className="text-center p-3 sm:p-5 bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl shadow-lg shadow-gray-100 hover-lift cursor-pointer group animate-scale-up"
          style={{ animationDelay: `${0.5 + index * 0.1}s` }}
        >
          <div className="text-lg sm:text-2xl mb-1 sm:mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
            {stat.icon}
          </div>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold gradient-text">
            {stat.number}
          </div>
          <div className="text-[10px] sm:text-xs text-gray-500 mt-1 font-medium">
            {stat.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default About;
