import React from "react";

function Footer() {
  return (
    <footer className="py-10 sm:py-12 lg:py-16 px-4 sm:px-6 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100 relative overflow-hidden">
      {/* Decorative elements - hidden on mobile */}
      <div className="hidden sm:block absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-indigo-100 rounded-full -translate-x-1/2 translate-y-1/2 opacity-50"></div>
      <div className="hidden sm:block absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-purple-100 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo */}
          <div className="text-center">
            <a
              href="#"
              className="text-xl sm:text-2xl font-bold group inline-block"
            >
              <span className="gradient-text-animated">Mohammad Amaan</span>
            </a>
            <p className="text-gray-500 text-xs sm:text-sm mt-1">
              MERN Stack Developer | Lucknow, India
            </p>
          </div>

          {/* Links */}
          <nav>
            <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 lg:gap-8">
              {["About", "Projects", "Skills", "Contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-500 hover:text-indigo-600 text-xs sm:text-sm transition-all duration-300 hover:-translate-y-1 inline-block"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Icons */}
          <div className="flex gap-3 sm:gap-4">
            <a
              href="mailto:amaan.work101@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center text-base sm:text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-lg hover:bg-indigo-100 hover:text-indigo-600"
            >
              📧
            </a>
            <a
              href="tel:+918604302007"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center text-base sm:text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-lg hover:bg-emerald-100 hover:text-emerald-600"
            >
              📞
            </a>
            <a
              href="https://www.linkedin.com/in/mohammad-amaan-74115b3a2"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gray-100 flex items-center justify-center text-base sm:text-lg transition-all duration-300 hover:scale-110 hover:-translate-y-2 hover:shadow-lg hover:bg-blue-100 hover:text-blue-600"
            >
              💼
            </a>
          </div>
        </div>

        {/* Divider with gradient */}
        <div className="my-6 sm:my-8 lg:my-10 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-400 text-xs sm:text-sm">
            © {new Date().getFullYear()} Mohammad Amaan. Built with{" "}
            <span className="inline-block animate-pulse text-red-500">❤️</span>{" "}
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
