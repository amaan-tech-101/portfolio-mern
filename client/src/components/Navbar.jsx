import React, { useState } from "react";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-gray-100/50 animate-slide-up">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <a
          href="#"
          className="text-lg sm:text-xl font-bold text-gray-900 hover:scale-110 transition-transform"
        >
          <span className="gradient-text-animated">MA</span>
          <span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6 lg:space-x-8">
            {["About", "Projects", "Skills", "Contact"].map((item, i) => (
              <li
                key={item}
                style={{ animationDelay: `${i * 0.1}s` }}
                className="animate-slide-up"
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-indigo-600 text-sm font-medium transition-all duration-300 relative group py-2"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Desktop CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Resume Download Button */}
          <a
            href="/resume.pdf"
            download="Mohammad_Amaan_Resume.pdf"
            className="flex items-center gap-2 px-4 py-2 rounded-full border-2 border-gray-200 text-gray-700 hover:border-indigo-500 hover:text-indigo-600 text-sm font-medium transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>📄</span>
            <span className="hidden lg:inline">Resume</span>
          </a>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="group relative bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-indigo-200 hover:-translate-y-0.5 overflow-hidden"
          >
            <span className="relative z-10">Hire Me</span>
            <div className="absolute inset-0 animate-shimmer"></div>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 relative flex flex-col justify-between">
            <span
              className={`w-full h-0.5 bg-gray-600 rounded transition-all ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-gray-600 rounded transition-all ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`w-full h-0.5 bg-gray-600 rounded transition-all ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <nav className="px-4 pb-4 bg-white/95 backdrop-blur-xl border-t border-gray-100">
          <ul className="space-y-2 pt-4">
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block py-3 px-4 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl text-base font-medium transition-all"
                >
                  {item}
                </a>
              </li>
            ))}
            {/* Mobile Resume Download */}
            <li>
              <a
                href="/resume.pdf"
                download="Mohammad_Amaan_Resume.pdf"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center gap-2 py-3 px-4 text-gray-600 hover:text-indigo-600 hover:bg-indigo-50 rounded-xl text-base font-medium transition-all"
              >
                <span>📄</span> Download Resume
              </a>
            </li>
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold"
              >
                Hire Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
