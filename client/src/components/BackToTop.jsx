/**
 * Back to Top Button Component
 * Floating button that scrolls page to top
 * @module components/common/BackToTop
 */

import React, { useState, useEffect } from "react";

/** Scroll threshold to show button (in pixels) */
const SCROLL_THRESHOLD = 300;

/**
 * BackToTop component - floating scroll to top button
 * @returns {JSX.Element} Back to top button
 */
function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  /**
   * Scroll to top of page
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-full shadow-2xl hover:shadow-indigo-300 hover:scale-110 transition-all duration-300 flex items-center justify-center group animate-bounce-in"
      aria-label="Back to top"
    >
      <svg
        className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 10l7-7m0 0l7 7m-7-7v18"
        />
      </svg>
    </button>
  );
}

export default BackToTop;
