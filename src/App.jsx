import React from "react";
import Navbar from "./components/navbar/navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./components/skills/Skills";

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero  />
        <About />
        <Skills/>
        <Contact />
        <Footer />
    </div>
  );
};

export default App;
