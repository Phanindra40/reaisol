import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#0f172a] text-white py-20 px-4"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl font-bold text-center text-brandBlue mb-2">Get in Touch</h2>
        <p className="text-center text-gray-300 mb-12">
          We’re here to help you transform your ideas into reality.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            className="space-y-6"
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="relative">
              <input
                type="text"
                required
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg peer focus:outline-none focus:border-brandBlue"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-brandBlue">
                Your Name
              </label>
            </div>
            <div className="relative">
              <input
                type="email"
                required
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg peer focus:outline-none focus:border-brandBlue"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-brandBlue">
                Your Email
              </label>
            </div>
            <div className="relative">
              <textarea
                rows="4"
                required
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg peer focus:outline-none focus:border-brandBlue"
              />
              <label className="absolute left-4 top-3 text-gray-400 text-sm transition-all peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-brandBlue">
                Message
              </label>
            </div>
            <button
              type="submit"
              className="bg-brandBlue hover:bg-blue-700 transition px-6 py-3 rounded-lg text-white font-semibold"
            >
              Send Message
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            className="space-y-6 text-gray-300"
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <FaPhoneAlt className="text-brandBlue mt-1" />
              <div>
                <h4 className="font-semibold text-white">Phone</h4>
                <p>+91 *******</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaEnvelope className="text-brandBlue mt-1" />
              <div>
                <h4 className="font-semibold text-white">Email</h4>
                <p>Hello.reaisol.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-brandBlue mt-1" />
              <div>
                <h4 className="font-semibold text-white">Location</h4>
                <p>Hyderabad, India</p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
