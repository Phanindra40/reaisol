// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./components/Home";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <div className="bg-darkBg text-white">
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
