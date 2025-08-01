// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Services from "./components/Services";
import About from "./components/About";

const App = () => {
  return (
    <div className="bg-darkBg text-white">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
