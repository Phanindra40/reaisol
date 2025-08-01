import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaCloud, FaLaptopCode, FaTools, FaRobot, FaMobileAlt, FaChartLine } from "react-icons/fa";

const services = [
  {
    icon: <FaCode size={28} />,
    title: "Custom Web Development",
    description:
      "We craft responsive, SEO-optimized websites and dynamic web applications tailored to your brand and business goals using the latest technologies.",
  },
  {
    icon: <FaCloud size={28} />,
    title: "Cloud Infrastructure & DevOps",
    description:
      "Unlock the power of the cloud with scalable, secure deployment pipelines, CI/CD, cloud migration, and automated infrastructure management.",
  },
  {
    icon: <FaLaptopCode size={28} />,
    title: "Technology Consulting",
    description:
      "Our experienced consultants provide strategic roadmaps, digital transformation blueprints, and architecture assessments for smart tech adoption.",
  },
  {
    icon: <FaTools size={28} />,
    title: "24/7 Technical Support",
    description:
      "From proactive monitoring to real-time issue resolution, we ensure your systems run smoothly—anytime, anywhere.",
  },
  {
    icon: <FaRobot size={28} />,
    title: "AI & Automation",
    description:
      "Integrate AI-powered solutions and automation to boost efficiency, personalize experiences, and unlock new business opportunities.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Mobile App Development",
    description:
      "Build cross-platform mobile apps with stunning UI/UX, robust performance, and seamless integration for iOS and Android.",
  },
  {
    icon: <FaChartLine size={28} />,
    title: "Data Analytics & Insights",
    description:
      "Transform raw data into actionable insights with advanced analytics, dashboards, and reporting tailored to your KPIs.",
  },
];

const featureHighlights = [
  {
    title: "Why Choose ReAiSol?",
    points: [
      "🚀 Fast, reliable delivery",
      "🤝 Collaborative approach",
      "💡 Innovative tech stack",
      "🔒 Security-first mindset",
      "🌍 Global support & scalability",
    ],
  },
  {
    title: "How We Work",
    points: [
      "1. Discovery & Strategy",
      "2. Design & Prototyping",
      "3. Agile Development",
      "4. Testing & QA",
      "5. Launch & Support",
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white py-24 px-6 relative overflow-hidden"
    >
      {/* Animated background shapes */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-brandBlue/20 rounded-full blur-3xl -z-10"
        initial={{ scale: 0.7, opacity: 0.5 }}
        animate={{ scale: 1, opacity: 0.8 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-72 h-72 bg-pink-500/20 rounded-full blur-2xl -z-10"
        initial={{ scale: 0.7, opacity: 0.5 }}
        animate={{ scale: 1.1, opacity: 0.7 }}
        transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold text-center text-brandBlue mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Offer
        </motion.h2>

        <motion.p
          className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          ReAiSol provides a comprehensive suite of digital services designed to drive innovation and deliver exceptional results. Explore how we turn ideas into impactful solutions.
        </motion.p>

        {/* Feature Highlights */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featureHighlights.map((feature, idx) => (
            <motion.div
              key={feature.title}
              className="bg-gray-800/80 rounded-2xl p-6 shadow-lg border border-gray-700"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.3, duration: 0.7 }}
            >
              <h3 className="text-2xl font-bold text-brandBlue mb-4">{feature.title}</h3>
              <ul className="space-y-2 pl-2">
                {feature.points.map((point, i) => (
                  <li key={i} className="text-gray-200 text-base flex items-center gap-2">
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-800 hover:border-brandBlue transition-all duration-300 group"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: "0 8px 32px #3b82f6" }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-brandBlue/10 text-brandBlue rounded-full mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-brandBlue transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h4 className="text-2xl font-bold text-brandBlue mb-4">Ready to transform your business?</h4>
          <p className="text-gray-300 mb-6">Contact us today for a free consultation and discover how ReAiSol can help you achieve your goals.</p>
          <a
            href="/contact"
            className="inline-block px-8 py-3 bg-brandBlue text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 transition"
          >
            Get Started
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
