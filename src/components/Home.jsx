import React from "react";
import { motion } from "framer-motion";
import { Brain, Users, Briefcase, Rocket } from "lucide-react";
import Typewriter from "typewriter-effect";
import { useNavigate } from "react-router-dom";
import CountUp from "react-countup";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const zoomInVariant = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen overflow-x-hidden scroll-smooth bg-gradient-to-br from-white via-blue-50 to-blue-100 font-sans">
      {/* Navbar */}
      <motion.nav
        className="fixed top-0 left-0 w-full bg-white shadow-md z-50 backdrop-blur-md"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 80 }}
      >
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 text-blue-600 text-2xl font-extrabold tracking-tight">
            <Brain className="w-7 h-7 animate-spin-slow" />
            ReAiSol
          </div>
          <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
            <a href="#services" className="hover:text-blue-600 transition">Services</a>
            <a href="#about" className="hover:text-blue-600 transition">About</a>
            <button onClick={() => navigate("/contact")} className="hover:text-blue-600 transition">
              Contact
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="pt-32 md:pt-40 text-center px-4 md:px-6">
        <motion.div
          variants={zoomInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-800 leading-tight">
            <Typewriter
              options={{
                strings: [
                  "Build Future-Ready Websites",
                  "Launch Mobile Apps Fast",
                  "Add Intelligence with AI",
                ],
                autoStart: true,
                loop: true,
                delay: 50,
                deleteSpeed: 30,
              }}
            />
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            ReAiSol is a cutting-edge startup building affordable digital solutions using modern technologies like React, Next.js, and AI.
          </p>
          <div className="mt-8">
            <button
              onClick={() => navigate("/contact")}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </button>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="mt-28 px-4 md:px-6 max-w-6xl mx-auto text-center"
        variants={zoomInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          We specialize in delivering efficient, scalable, and intelligent solutions that empower businesses in the digital era.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {["Web Development", "Mobile Apps", "AI Integration"].map((title, i) => (
            <motion.div
              key={title}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-2xl transition"
              whileHover={{ scale: 1.03 }}
              variants={fadeInUp}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">{title}</h3>
              <p className="text-gray-600">
                {title === "Web Development"
                  ? "Responsive websites using React, Vite & Tailwind."
                  : title === "Mobile Apps"
                  ? "Cross-platform apps for Android and iOS."
                  : "Integrate GPT, Gemini, and AI features seamlessly."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        className="mt-32 px-4 md:px-6 max-w-5xl mx-auto text-center"
        variants={zoomInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
        <p className="text-gray-600 text-lg max-w-3xl mx-auto">
          At ReAiSol, we combine the power of human creativity with artificial intelligence to create smart, scalable products that drive business success.
        </p>
        <div className="mt-12 flex flex-col md:flex-row justify-center gap-6">
          {["Innovative", "Fast Delivery", "Collaborative"].map((label, i) => (
            <motion.div
              key={label}
              className="bg-white p-6 rounded-xl shadow-md w-full md:w-1/3"
              variants={fadeInUp}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h4 className="font-bold text-blue-600 mb-2">
                {label === "Innovative" && "💡 "}
                {label === "Fast Delivery" && "⚡ "}
                {label === "Collaborative" && "🤝 "}
                {label}
              </h4>
              <p className="text-gray-600 text-sm">
                {label === "Innovative"
                  ? "We embrace the latest technologies and trends to keep your solution ahead of the curve."
                  : label === "Fast Delivery"
                  ? "Time is money — we deliver high-quality products quickly without sacrificing quality."
                  : "We work closely with you to bring your vision to life, every step of the way."}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Company Growth Section */}
      <motion.section
        className="mt-24 px-4 md:px-6 max-w-6xl mx-auto text-center"
        variants={zoomInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Our Growth</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[{ icon: <Users />, label: "Happy Clients", end: 120 },
            { icon: <Briefcase />, label: "Projects Completed", end: 85 },
            { icon: <Rocket />, label: "Years of Experience", end: 4 }].map(({ icon, label, end }, i) => (
            <motion.div
              key={label}
              className="bg-white rounded-xl p-6 shadow hover:shadow-xl transition"
              variants={fadeInUp}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <div className="text-blue-600 w-10 h-10 mx-auto mb-2">{icon}</div>
              <h3 className="text-4xl font-bold text-blue-600">
                <CountUp end={end} duration={2} />+
              </h3>
              <p className="mt-2 text-gray-600 font-medium">{label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="mt-28 px-4 md:px-6 max-w-6xl mx-auto text-center"
        variants={zoomInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-gray-800 mb-6">What Our Clients Say</h2>
        <p className="text-gray-600 mb-10 max-w-2xl mx-auto">
          Our clients love our dedication, precision, and ability to turn challenges into smart solutions.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {[{ name: "Amit Raj", quote: "ReAiSol helped us go live in record time. Their AI integrations gave our app a competitive edge." },
            { name: "Sarah Williams", quote: "Clean design, top-notch tech stack. We loved the communication and speed of delivery!" },
            { name: "James Tan", quote: "They’re not just developers — they’re problem solvers with vision." }].map(({ name, quote }, i) => (
            <motion.div
              key={name}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl"
              whileHover={{ scale: 1.02 }}
              variants={fadeInUp}
              custom={i + 1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <p className="text-gray-700 italic mb-4">“{quote}”</p>
              <h4 className="font-semibold text-blue-600">{name}</h4>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <motion.section
        className="mt-32 mb-20 px-4 md:px-6 text-center"
        variants={zoomInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="bg-blue-600 text-white py-12 px-6 rounded-2xl max-w-4xl mx-auto shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Ready to build something great?</h2>
          <p className="mb-6">Let’s talk and bring your vision to life — websites, apps, and AI solutions await!</p>
          <button
            onClick={() => navigate("/contact")}
            className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-xl shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
