/**
 * Navbar Component
 * Main navigation bar with responsive mobile menu
 * @module components/layout/Navbar
 */

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO, NAV_LINKS } from "../constants";

/**
 * Navbar component with responsive mobile menu
 * @returns {JSX.Element} Navbar component
 */
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-lg shadow-gray-100/50 py-2 sm:py-3"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl sm:text-2xl font-bold text-gray-900 hover:scale-105 transition-transform"
        >
          <span className="gradient-text-animated">
            {PERSONAL_INFO.shortName}
          </span>
          <span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <DesktopNav scrolled={scrolled} />

        {/* Resume Button - Desktop */}
        <ResumeButton className="hidden md:flex" scrolled={scrolled} />

        {/* Mobile Menu Button */}
        <MobileMenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </nav>
  );
}

/**
 * Desktop navigation links
 * @param {Object} props - Component props
 * @param {boolean} props.scrolled - Whether page is scrolled
 * @returns {JSX.Element} Desktop navigation
 */
function DesktopNav({ scrolled }) {
  return (
    <ul className="hidden md:flex items-center gap-1 lg:gap-2">
      {NAV_LINKS.map((item, index) => (
        <li key={item}>
          <a
            href={`#${item.toLowerCase()}`}
            className={`px-3 lg:px-4 py-2 font-medium transition-all duration-300 rounded-full hover:bg-indigo-50 hover:text-indigo-600 text-sm lg:text-base ${
              scrolled ? "text-gray-700" : "text-gray-600"
            }`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
}

/**
 * Resume download button
 * @param {Object} props - Component props
 * @param {string} props.className - Additional classes
 * @param {boolean} props.scrolled - Whether page is scrolled
 * @returns {JSX.Element} Resume button
 */
function ResumeButton({ className, scrolled }) {
  return (
    <a
      href={PERSONAL_INFO.resumePath}
      download={PERSONAL_INFO.resumeFileName}
      className={`items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 hover:scale-105 text-sm lg:text-base ${className}`}
    >
      <span>📄</span>
      <span>Resume</span>
    </a>
  );
}

/**
 * Mobile menu toggle button
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Menu open state
 * @param {Function} props.setIsOpen - State setter
 * @returns {JSX.Element} Menu button
 */
function MobileMenuButton({ isOpen, setIsOpen }) {
  return (
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
      aria-label="Toggle menu"
    >
      <div className="w-6 h-5 flex flex-col justify-between">
        <span
          className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        ></span>
        <span
          className={`w-full h-0.5 bg-gray-700 transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></span>
      </div>
    </button>
  );
}

/**
 * Mobile navigation menu
 * @param {Object} props - Component props
 * @param {boolean} props.isOpen - Menu open state
 * @param {Function} props.setIsOpen - State setter
 * @returns {JSX.Element} Mobile menu
 */
function MobileMenu({ isOpen, setIsOpen }) {
  return (
    <div
      className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg border-t border-gray-100 shadow-xl transition-all duration-300 ${
        isOpen
          ? "opacity-100 visible translate-y-0"
          : "opacity-0 invisible -translate-y-4"
      }`}
    >
      <ul className="p-4 space-y-1">
        {NAV_LINKS.map((item, index) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-3 text-gray-700 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl font-medium transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {item}
            </a>
          </li>
        ))}
        <li className="pt-2">
          <a
            href={PERSONAL_INFO.resumePath}
            download={PERSONAL_INFO.resumeFileName}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300"
          >
            <span>📄</span>
            <span>Download Resume</span>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
