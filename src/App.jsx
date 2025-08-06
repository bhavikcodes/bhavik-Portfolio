import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Skills from "./components/skills/Skills";
import Project from "./components/project/Project";

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
