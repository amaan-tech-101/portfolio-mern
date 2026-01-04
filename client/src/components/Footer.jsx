/**
 * Footer Component
 * Site footer with navigation and social links
 * @module components/layout/Footer
 */

import React from "react";
import { PERSONAL_INFO, NAV_LINKS } from "../constants";

/**
 * Footer component with navigation and social links
 * @returns {JSX.Element} Footer component
 */
function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-white to-gray-50 pt-12 sm:pt-16 pb-6 sm:pb-8 px-4 sm:px-6 border-t border-gray-100">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <a
              href="#"
              className="text-2xl sm:text-3xl font-bold inline-block hover:scale-105 transition-transform"
            >
              <span className="gradient-text-animated">
                {PERSONAL_INFO.name}
              </span>
            </a>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              {PERSONAL_INFO.title} | {PERSONAL_INFO.location}
            </p>
          </div>

          {/* Navigation Links */}
          <FooterNav />

          {/* Social Links */}
          <SocialLinks />
        </div>

        {/* Copyright */}
        <Copyright year={currentYear} />
      </div>
    </footer>
  );
}

/**
 * Footer navigation links
 * @returns {JSX.Element} Navigation links
 */
function FooterNav() {
  return (
    <nav className="flex flex-wrap justify-center gap-4 sm:gap-6">
      {NAV_LINKS.map((item) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          className="text-xs sm:text-sm text-gray-500 hover:text-indigo-600 transition-colors font-medium"
        >
          {item}
        </a>
      ))}
    </nav>
  );
}

/**
 * Social media links
 * @returns {JSX.Element} Social links
 */
function SocialLinks() {
  const socialLinks = [
    {
      icon: "💼",
      href: PERSONAL_INFO.linkedin,
      hoverClass: "hover:bg-blue-100 hover:text-blue-600",
    },
    {
      icon: "📧",
      href: `mailto:${PERSONAL_INFO.email}`,
      hoverClass: "hover:bg-red-100 hover:text-red-600",
    },
    {
      icon: "📞",
      href: "#",
      hoverClass: "hover:bg-emerald-100 hover:text-emerald-600",
    },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center text-base sm:text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-lg ${link.hoverClass}`}
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
}

/**
 * Copyright section
 * @param {Object} props - Component props
 * @param {number} props.year - Current year
 * @returns {JSX.Element} Copyright section
 */
function Copyright({ year }) {
  return (
    <div className="pt-6 sm:pt-8 border-t border-gray-100 text-center">
      <p className="text-xs sm:text-sm text-gray-400">
        © {year}{" "}
        <span className="font-semibold text-gray-600">
          {PERSONAL_INFO.name}
        </span>
        . All rights reserved.
      </p>
      <p className="text-[10px] sm:text-xs text-gray-400 mt-2 flex items-center justify-center gap-1">
        Made with <span className="text-red-500 animate-pulse">❤️</span> using
        React & Tailwind CSS
      </p>
    </div>
  );
}

export default Footer;
