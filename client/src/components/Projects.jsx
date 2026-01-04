/**
 * Projects Section Component
 * Displays portfolio projects with interactive cards
 * @module components/sections/Projects
 */

import React from "react";
import { PROJECTS } from "../constants";

/**
 * Projects component displaying all portfolio projects
 * @returns {JSX.Element} Projects section
 */
function Projects() {
  return (
    <section
      id="projects"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="hidden sm:block absolute top-20 left-10 w-24 sm:w-32 h-24 sm:h-32 bg-indigo-100 rounded-full opacity-50 animate-float"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-20 sm:w-24 h-20 sm:h-24 bg-purple-100 rounded-full opacity-50 animate-float-delayed"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-indigo-600 font-semibold mb-2 uppercase text-xs sm:text-sm tracking-widest animate-slide-up">
            My Work
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 animate-slide-up delay-100">
            MERN <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded mx-auto mb-3 sm:mb-4 animate-slide-up delay-200"></div>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto animate-slide-up delay-300 px-4 sm:px-0">
            Full-stack applications built with MongoDB, Express, React, and
            Node.js
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* More projects note */}
        <div className="text-center mt-8 sm:mt-10 lg:mt-12 animate-slide-up delay-700">
          <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm sm:text-base">
            <span className="animate-pulse">🚀</span>
            More MERN projects coming soon...
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Individual project card component
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data
 * @param {number} props.index - Project index for animation delay
 * @returns {JSX.Element} Project card
 */
function ProjectCard({ project, index }) {
  return (
    <article
      className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg shadow-gray-100 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-500 hover:-translate-y-4 cursor-pointer animate-scale-up"
      style={{ animationDelay: `${0.3 + index * 0.15}s` }}
    >
      {/* Card top with gradient */}
      <div
        className={`h-36 sm:h-44 lg:h-52 bg-gradient-to-br ${project.bgLight} flex items-center justify-center relative overflow-hidden`}
      >
        {/* Animated background circles */}
        <div
          className={`absolute w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-r ${project.gradient} opacity-20 -top-10 -right-10 group-hover:scale-150 transition-transform duration-700`}
        ></div>
        <div
          className={`absolute w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-gradient-to-r ${project.gradient} opacity-10 -bottom-5 -left-5 group-hover:scale-150 transition-transform duration-700 delay-100`}
        ></div>

        <span className="text-5xl sm:text-6xl lg:text-7xl relative z-10 group-hover:scale-125 group-hover:-rotate-12 transition-all duration-500 drop-shadow-lg">
          {project.emoji}
        </span>
      </div>

      {/* Card content */}
      <div className="p-4 sm:p-5 lg:p-6">
        <div className="flex items-center justify-between mb-2 sm:mb-3">
          <span
            className={`inline-block px-2 sm:px-3 py-1 rounded-full bg-gradient-to-r ${project.gradient} text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider`}
          >
            {project.category}
          </span>
          <span className="text-xs sm:text-sm text-gray-400">
            {project.year}
          </span>
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed line-clamp-2">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs font-semibold bg-gray-900 text-white rounded"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Features - hidden on mobile */}
        <ul className="hidden sm:block space-y-1 mb-4">
          {project.features.slice(0, 3).map((feature, i) => (
            <li
              key={i}
              className="text-xs text-gray-500 flex items-center gap-2"
            >
              <span className="text-indigo-500">✓</span> {feature}
            </li>
          ))}
        </ul>

        {/* Action buttons */}
        <div className="flex gap-2 sm:gap-3 pt-2 border-t border-gray-100">
          {project.github === "#" ? (
            <div className="flex-1 text-center py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-400 bg-gray-50 rounded-lg cursor-not-allowed">
              📂 Coming Soon
            </div>
          ) : (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
            >
              📂 Code
            </a>
          )}
          {project.live === "#" ? (
            <div className="flex-1 text-center py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-gray-400 bg-gray-50 rounded-lg cursor-not-allowed">
              🔗 Coming Soon
            </div>
          ) : (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center py-1.5 sm:py-2 text-xs sm:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-lg transition-colors"
            >
              🔗 Live
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default Projects;
