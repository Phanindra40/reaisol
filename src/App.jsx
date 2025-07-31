import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./components/Home";
import contact from "./components/contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <div className="bg-darkBg text-white">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contact" element={<contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
