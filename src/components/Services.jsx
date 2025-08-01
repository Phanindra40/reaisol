import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaLaptopCode, FaTools } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={30} />,
    title: "Web Development",
    description:
      "Custom websites and applications built with the latest technologies to fit your business needs.",
  },
  {
    icon: <FaCloud size={30} />,
    title: "Cloud Solutions",
    description:
      "Scalable and secure cloud services including deployment, integration, and management.",
  },
  {
    icon: <FaLaptopCode size={30} />,
    title: "IT Consulting",
    description:
      "Strategic tech guidance for smarter decisions, digital transformation, and system optimization.",
  },
  {
    icon: <FaTools size={30} />,
    title: "Technical Support",
    description:
      "End-to-end support, monitoring, and troubleshooting to keep your operations running smoothly.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white min-h-screen py-20 px-6"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-brandBlue mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          We offer a range of cutting-edge technology services to help you achieve digital excellence and business growth.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 hover:border-brandBlue transition-all"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="text-brandBlue mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
