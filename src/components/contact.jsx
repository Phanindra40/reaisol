import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-20 px-6"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-cyan-400 mb-2">Get in Touch</h2>
        <p className="text-center text-gray-300 mb-12">
          We’re here to help you transform your ideas into reality.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            className="space-y-6 bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative">
              <input
                type="text"
                required
                className="w-full p-4 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 peer placeholder-transparent"
                placeholder="Your Name"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-cyan-400">
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                required
                className="w-full p-4 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 peer placeholder-transparent"
                placeholder="Your Email"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-cyan-400">
                Your Email
              </label>
            </div>
            <div className="relative">
              <textarea
                rows="4"
                required
                className="w-full p-4 bg-transparent border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 peer placeholder-transparent"
                placeholder="Message"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-cyan-400">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition px-6 py-3 rounded-lg text-white font-semibold shadow-lg"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-6 text-gray-300 bg-gray-900/70 backdrop-blur-md p-8 rounded-2xl shadow-lg"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-cyan-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p className="hover:text-cyan-300 transition">+91 *******</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-cyan-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p className="hover:text-cyan-300 transition">hello@reaisol.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-cyan-400 text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p className="hover:text-cyan-300 transition">Hyderabad, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
