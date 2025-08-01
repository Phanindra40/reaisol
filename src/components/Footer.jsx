import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-tr from-[#0f172a] via-[#020617] to-[#0f172a] text-white pt-16 pb-10 px-6 md:px-12 rounded-t-3xl shadow-[0_-5px_30px_rgba(0,0,0,0.4)] border-t border-gray-700">
      <div className="max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 md:grid-cols-4">

        {/* Brand */}
        <div>
          <h2 className="text-3xl font-extrabold text-white mb-4 tracking-wide">
            ReAiSol<span className="text-brandBlue">.ai</span>
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering your digital journey with tailored IT solutions, innovative cloud infrastructure, and web excellence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-brandBlue mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            {["home", "about", "services", "projects", "contact"].map((link) => (
              <li key={link}>
                <a
                  href={`#${link}`}
                  className="hover:text-white text-gray-400 transition duration-300 ease-in-out block"
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-xl font-semibold text-brandBlue mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {["IT Consulting", "Web Development", "Cloud Solutions", "Tech Support"].map((service) => (
              <li
                key={service}
                className="text-gray-400 hover:text-white transition duration-300 ease-in-out"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold text-brandBlue mb-4">Connect with Us</h3>
          <div className="flex items-center gap-4 mt-2">
            {[FaFacebookF, FaLinkedinIn, FaTwitter, FaGithub].map((Icon, idx) => (
              <a
                key={idx}
                href="#"
                className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white hover:bg-brandBlue transition duration-300 transform hover:scale-110 shadow-md"
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className="my-10 border-gray-700" />

      <div className="text-center text-sm text-gray-400">
        &copy; {year} <span className="text-white font-semibold">ReAiSol.ai</span>. All rights reserved.
        <div className="text-xs text-gray-500 mt-1 italic opacity-70">
          Built for development and demonstration purposes only.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
