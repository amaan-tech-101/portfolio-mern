/**
 * Main Application Component
 * Root component that composes all sections
 * @module App
 */

import React from "react";

// Layout Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Section Components
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

// Common Components
import LoadingScreen from "./components/LoadingScreen";
import BackToTop from "./components/BackToTop";

/**
 * App component - main application entry point
 * @returns {JSX.Element} Complete application
 */
function App() {
  return (
    <>
      <LoadingScreen />
      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
        <BackToTop />
      </div>
    </>
  );
}

export default App;
