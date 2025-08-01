import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Users, Briefcase, Rocket, Menu, X, MessageCircle } from "lucide-react";
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

const prebuiltPrompts = [
  "What services do you offer?",
  "How can I get a quote?",
  "Tell me about your AI solutions.",
  "How fast can you deliver a project?",
];

const HomePage = () => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { from: "bot", text: "👋 Hi! How can we help you today?" }
  ]);
  const [chatInput, setChatInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  const chatEndRef = useRef(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, botTyping]);

  // Enhanced send handler with typing indicator
  const handleSend = () => {
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, { from: "user", text: chatInput }]);
      setBotTyping(true);
      setTimeout(() => {
        setChatMessages(msgs => [
          ...msgs,
          { from: "bot", text: "🤖 Thanks for your message! We'll get back to you soon." }
        ]);
        setBotTyping(false);
      }, 1200);
      setChatInput("");
    }
  };

  // When a prompt is clicked, send it as a message
  const handlePromptClick = (prompt) => {
    setChatInput("");
    setChatMessages([...chatMessages, { from: "user", text: prompt }]);
    setBotTyping(true);
    setTimeout(() => {
      setChatMessages(msgs => [
        ...msgs,
        { from: "bot", text: "🤖 Here's more info: " + prompt }
      ]);
      setBotTyping(false);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 font-sans overflow-x-hidden scroll-smooth">
      {/* Navbar */}
      <motion.nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] md:w-[85%] lg:w-[70%] bg-white/80 backdrop-blur-md shadow-xl z-50 rounded-full px-6 py-3 flex items-center justify-between transition-all duration-500" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ type: "spring", stiffness: 80 }}>
        <div className="flex items-center gap-2 text-blue-600 text-xl font-extrabold tracking-tight">
          <Brain className="w-6 h-6 animate-spin-slow" />
          ReAiSol
        </div>
        <div className="hidden md:flex items-center space-x-6 text-gray-700 font-medium">
          <a onClick={()=>navigate("/services")} className="hover:text-blue-600 transition">Services</a>
          <a onClick={()=>navigate("/about")} className="hover:text-blue-600 transition">About</a>
          <button onClick={() => navigate("/contact")} className="hover:text-blue-600 transition">Contact</button>
        </div>
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-blue-600">
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="fixed top-20 left-1/2 -translate-x-1/2 w-[85%] bg-white rounded-xl shadow-md py-4 px-6 z-40 text-center space-y-4 text-gray-800 font-medium">
            <a href="#services" className="block hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>Services</a>
            <a href="#about" className="block hover:text-blue-600" onClick={() => setMobileMenuOpen(false)}>About</a>
            <button onClick={() => { setMobileMenuOpen(false); navigate("/contact"); }} className="block w-full text-left hover:text-blue-600">Contact</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Buttons Container */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
        {/* Contact Us Button */}
        <motion.button onClick={() => navigate("/contact")} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 60, delay: 1 }} className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-3 rounded-full shadow-lg hover:from-blue-600 hover:to-indigo-700 transition">
          Contact Us
        </motion.button>

        {/* Chat Button */}
        {!chatOpen && (
          <motion.button onClick={() => setChatOpen(true)} initial={{ x: 100, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ type: "spring", stiffness: 60, delay: 1.2 }} className="bg-gradient-to-r from-pink-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:from-pink-600 hover:to-purple-700 transition flex items-center">
            <MessageCircle className="w-6 h-6" />
          </motion.button>
        )}
      </div>

      {/* Chatbox */}
      {chatOpen && (
        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="fixed bottom-24 right-6 z-50 w-80 bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border border-blue-100 flex flex-col">
          <div className="flex items-center justify-between px-4 py-3 border-b border-blue-100 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-t-2xl">
            <span className="font-bold text-white">Chat with ReAiSol</span>
            <button onClick={() => setChatOpen(false)} className="text-white hover:text-gray-200" aria-label="Close chat">×</button>
          </div>
          <div className="flex-1 px-4 py-3 space-y-2 overflow-y-auto max-h-64">
            {chatMessages.map((msg, i) => (
              <div key={i} className={`text-sm ${msg.from === "bot" ? "text-blue-600" : "text-gray-800 text-right"}`}>{msg.text}</div>
            ))}
            {botTyping && (
              <div className="text-blue-600 text-sm flex items-center gap-2">
                <span className="animate-bounce">...</span>
                <span>ReAiSol is typing</span>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          {/* Prebuilt Prompts */}
          <div className="px-4 py-2 border-t border-blue-100 bg-white flex flex-wrap gap-2">
            {prebuiltPrompts.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handlePromptClick(prompt)}
                className="bg-gradient-to-r from-blue-100 to-blue-200 text-blue-700 px-3 py-1 rounded-full text-xs font-medium hover:from-blue-200 hover:to-blue-300 transition"
              >
                {prompt}
              </button>
            ))}
          </div>
          {/* Input */}
          <div className="px-4 py-3 border-t border-blue-100 bg-white rounded-b-2xl flex gap-2">
            <input
              type="text"
              value={chatInput}
              onChange={e => setChatInput(e.target.value)}
              onKeyDown={e => e.key === "Enter" && handleSend()}
              placeholder="Type your message..."
              className={`flex-1 px-3 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 ${chatInput ? "bg-white text-gray-800" : "bg-transparent text-transparent"}`}
              style={{ transition: "background 0.2s, color 0.2s" }}
            />
            <button onClick={handleSend} className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition">
              Send
            </button>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <section className="pt-36 md:pt-44 text-center px-4 md:px-6">
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

      {/* Testimonials */}
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
        <div className="bg-blue-600 text-white py-12 px-8 rounded-3xl max-w-4xl mx-auto shadow-xl">
          <h2 className="text-3xl font-bold mb-4">Ready to build something great?</h2>
          <p className="mb-6">Let’s talk and bring your vision to life — websites, apps, and AI solutions await!</p>
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-2xl shadow hover:bg-gray-100 transition"
          >
            Contact Us
          </button>
        </div>
      </motion.section>
    </div>
  );
};

export default HomePage;
