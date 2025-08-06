import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./components/Skills/Skills";
import Project from "./components/Project/Project";

const App = () => {
  return (
    <div>
        <Navbar />
        <Hero  />
        <About />
        <Skills/>
        <Project/>
        <Contact />
        <Footer />
    </div>
  );
};


export default App;
