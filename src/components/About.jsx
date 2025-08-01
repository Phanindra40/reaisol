// src/pages/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaCloud, FaLaptopCode, FaLightbulb } from "react-icons/fa";

const features = [
  {
    icon: <FaLightbulb size={32} className="text-brandBlue" />,
    title: "Innovative Vision",
    desc: "We pioneer intelligent digital strategies tailored to your unique business goals."
  },
  {
    icon: <FaLaptopCode size={32} className="text-brandBlue" />,
    title: "Tech Expertise",
    desc: "From web and mobile apps to scalable cloud systems, we build the future."
  },
  {
    icon: <FaCloud size={32} className="text-brandBlue" />,
    title: "Cloud Solutions",
    desc: "Empowering businesses with cloud-native, secure, and future-ready deployments."
  }
];

const About = () => {
  return (
    <section className="min-h-screen bg-[#0B0F19] text-gray-300 px-6 py-20 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-6"
        >
          Who We Are
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-lg text-gray-400 mb-12 max-w-3xl"
        >
          At <span className="text-brandBlue font-semibold">ReAiSol</span>, we combine innovation, AI-powered systems, and deep tech knowledge to create impactful digital products. We believe in problem-solving through design thinking, modern architecture, and seamless experiences.
        </motion.p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#141A2A] rounded-xl p-6 text-center shadow-lg hover:shadow-brandBlue/40 hover:scale-105 transition"
            >
              <div className="mb-4 flex justify-center">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
