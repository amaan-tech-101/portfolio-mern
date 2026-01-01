import React, { useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const [focused, setFocused] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // 'sending', 'success', 'error'

  const contactInfo = [
    { icon: "📍", label: "Location", value: "Lucknow, India" },
    {
      icon: "📞",
      label: "Phone",
      value: "+91 86043 02007",
      link: "tel:+918604302007",
    },
    {
      icon: "📧",
      label: "Email",
      value: "amaan.work101@gmail.com",
      link: "mailto:amaan.work101@gmail.com",
    },
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // EmailJS configuration
    const serviceID = "service_fenlle8";
    const templateID = "template_iiwapid";
    const publicKey = "gxFbaQTwFqa7E-8QH";

    emailjs
      .send(
        serviceID,
        templateID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: "Mohammad Amaan",
        },
        publicKey
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus(""), 5000);
      })
      .catch((error) => {
        console.error("EmailJS Error:", error);
        setStatus("error");
        setTimeout(() => setStatus(""), 5000);
      });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-indigo-50 relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 sm:left-20 w-32 sm:w-40 h-32 sm:h-40 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 sm:right-20 w-32 sm:w-40 h-32 sm:h-40 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob delay-200"></div>
        <div className="hidden sm:block absolute bottom-20 left-1/2 w-40 h-40 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob delay-400"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <p className="text-indigo-600 font-semibold mb-2 uppercase text-xs sm:text-sm tracking-widest animate-slide-up">
            Get in Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 animate-slide-up delay-100">
            Let's <span className="gradient-text-animated">Connect</span>
          </h2>
          <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded mx-auto mb-3 sm:mb-4 animate-slide-up delay-200"></div>
          <p className="text-sm sm:text-base text-gray-600 animate-slide-up delay-300 px-4 sm:px-0">
            Open to opportunities and collaborations. Feel free to reach out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Contact Information
            </h3>

            {contactInfo.map((info, index) => (
              <a
                key={info.label}
                href={info.link || "#"}
                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group animate-slide-left"
                style={{ animationDelay: `${0.3 + index * 0.1}s` }}
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-xl sm:text-2xl group-hover:scale-110 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <p className="text-xs sm:text-sm text-gray-400 font-medium">
                    {info.label}
                  </p>
                  <p className="text-sm sm:text-base text-gray-900 font-semibold group-hover:text-indigo-600 transition-colors">
                    {info.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Availability */}
            <div className="p-4 sm:p-6 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl border border-emerald-100 animate-slide-left delay-500">
              <div className="flex items-center gap-2 sm:gap-3 mb-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-emerald-700 text-sm sm:text-base">
                  Available for Opportunities
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600">
                I am currently available for Full Stack Web Development,
                Frontend (React), and MERN stack opportunities. Open to both
                remote and on-site roles.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl sm:rounded-3xl shadow-2xl shadow-indigo-100 p-5 sm:p-6 lg:p-8 animate-scale-up delay-300 order-1 lg:order-2">
            <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4 sm:mb-6">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label
                  className={`block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 transition-colors ${
                    focused === "name" ? "text-indigo-600" : "text-gray-700"
                  }`}
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused("")}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-100 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  className={`block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 transition-colors ${
                    focused === "email" ? "text-indigo-600" : "text-gray-700"
                  }`}
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-100 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-300 text-sm sm:text-base"
                />
              </div>
              <div>
                <label
                  className={`block text-xs sm:text-sm font-semibold mb-1.5 sm:mb-2 transition-colors ${
                    focused === "message" ? "text-indigo-600" : "text-gray-700"
                  }`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Your message..."
                  onFocus={() => setFocused("message")}
                  onBlur={() => setFocused("")}
                  required
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl border-2 border-gray-100 bg-gray-50 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-50 outline-none transition-all duration-300 resize-none text-sm sm:text-base"
                ></textarea>
              </div>

              {/* Status Messages */}
              {status === "success" && (
                <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-700 text-sm">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  ❌ Failed to send message. Please try again or email me
                  directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="group w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold transition-all duration-300 hover:shadow-xl hover:shadow-indigo-200 hover:-translate-y-1 relative overflow-hidden text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {status === "sending" ? "Sending..." : "Send Message"}
                  {status !== "sending" && (
                    <span className="group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  )}
                </span>
                <div className="absolute inset-0 animate-shimmer"></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
