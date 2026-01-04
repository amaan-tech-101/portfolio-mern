/**
 * Loading Screen Component
 * Displays animated loading screen on initial page load
 * @module components/common/LoadingScreen
 */

import React, { useState, useEffect } from "react";
import { PERSONAL_INFO } from "../constants";

/**
 * LoadingScreen component with animated progress bar
 * @returns {JSX.Element|null} Loading screen or null when complete
 */
function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Smooth progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    // Hide loading screen after progress completes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(timer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
      <div className="text-center max-w-md w-full px-8">
        {/* Animated logo */}
        <div className="mb-12 animate-bounce-in">
          <h1 className="text-6xl sm:text-7xl font-bold gradient-text-animated mb-2">
            {PERSONAL_INFO.shortName}
            <span className="text-indigo-600">.</span>
          </h1>
          <p className="text-gray-500 text-sm font-medium">
            {PERSONAL_INFO.name}
          </p>
        </div>

        {/* Progress bar */}
        <div className="relative w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-shimmer"></div>
          </div>
        </div>

        {/* Loading text */}
        <p className="mt-6 text-gray-400 text-sm font-medium">
          {progress < 100 ? "Loading portfolio..." : "Ready!"}
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
