import React from "react";

const skillGroups = [
  {
    category: "Frontend Development",
    items: [
      "React.js",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 & CSS3",
      "Redux Toolkit",
      "Vite",
    ],
    icon: "⚛️",
    gradient: "from-indigo-500 to-purple-500",
    bgLight: "from-indigo-50 to-purple-50",
  },
  {
    category: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "RESTful APIs",
      "JWT Authentication",
    ],
    icon: "🖥️",
    gradient: "from-emerald-500 to-teal-500",
    bgLight: "from-emerald-50 to-teal-50",
  },
  {
    category: "Tools & Version Control",
    items: ["Git", "GitHub", "VS Code", "Postman", "AI-Assisted Workflow"],
    icon: "🛠️",
    gradient: "from-orange-500 to-rose-500",
    bgLight: "from-orange-50 to-rose-50",
  },
];

const strengths = [
  { trait: "Strong interpersonal skills", icon: "🤝" },
  { trait: "Calm under pressure", icon: "🧘" },
  { trait: "Goal-oriented", icon: "🎯" },
  { trait: "Self-motivated", icon: "🚀" },
  { trait: "Eager to learn", icon: "📚" },
  { trait: "Adaptable", icon: "🔄" },
];

function Skills() {
  return (
    <section
      id="skills"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <div className="hidden md:block absolute top-10 right-20 w-16 sm:w-20 h-16 sm:h-20 border-4 border-indigo-100 rounded-full animate-spin-slow"></div>
      <div className="hidden sm:block absolute bottom-20 left-10 w-12 sm:w-16 h-12 sm:h-16 bg-purple-100 rounded-lg rotate-45 animate-float"></div>
      <div className="hidden md:block absolute top-1/2 right-10 w-6 sm:w-8 h-6 sm:h-8 bg-pink-200 rounded-full animate-bounce"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <p className="text-indigo-600 font-semibold mb-2 uppercase text-xs sm:text-sm tracking-widest animate-slide-up">
            Expertise
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 animate-slide-up delay-100">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded mx-auto mb-3 sm:mb-4 animate-slide-up delay-200"></div>
          <p className="text-sm sm:text-base text-gray-600 max-w-lg mx-auto animate-slide-up delay-300 px-4 sm:px-0">
            Technologies I use to build full-stack web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-10 sm:mb-12 lg:mb-16">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={group.category}
              className={`relative bg-gradient-to-br ${group.bgLight} rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group overflow-hidden animate-scale-up`}
              style={{ animationDelay: `${0.3 + groupIndex * 0.15}s` }}
            >
              {/* Background decoration */}
              <div
                className={`absolute -top-10 -right-10 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-gradient-to-r ${group.gradient} opacity-10 group-hover:scale-150 transition-transform duration-700`}
              ></div>

              {/* Icon */}
              <div className="text-3xl sm:text-4xl lg:text-5xl mb-3 sm:mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 inline-block">
                {group.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
                {group.category}
              </h3>

              <div className="flex flex-wrap gap-2 sm:gap-3">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-medium bg-white text-gray-700 rounded-lg sm:rounded-xl shadow-sm hover:shadow-md hover:bg-indigo-600 hover:text-white transition-all duration-300 cursor-pointer hover:scale-105 hover:-translate-y-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Strengths Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-12">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
            Personal <span className="gradient-text">Strengths</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {strengths.map((item, index) => (
              <div
                key={item.trait}
                className="text-center p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-2 cursor-pointer group animate-scale-up"
                style={{ animationDelay: `${0.5 + index * 0.08}s` }}
              >
                <div className="text-2xl sm:text-3xl mb-1 sm:mb-2 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                  {item.icon}
                </div>
                <p className="text-[10px] sm:text-xs font-medium text-gray-600">
                  {item.trait}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="mt-8 sm:mt-10 lg:mt-12 text-center">
          <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
            Languages Known
          </h3>
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
            <div className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <span className="font-semibold text-gray-900 text-sm sm:text-base">
                English
              </span>
              <span className="text-gray-400 ml-2 text-sm sm:text-base">
                • Proficient
              </span>
            </div>
            <div className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-1">
              <span className="font-semibold text-gray-900 text-sm sm:text-base">
                Hindi
              </span>
              <span className="text-gray-400 ml-2 text-sm sm:text-base">
                • Native
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
