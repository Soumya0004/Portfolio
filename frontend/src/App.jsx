import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Nav from "./Layouts/Nav.jsx";
import Footer from "./Layouts/Footer.jsx";

const App = () => {
  return (
    <div div className="bg-[#1a1a1b] ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
