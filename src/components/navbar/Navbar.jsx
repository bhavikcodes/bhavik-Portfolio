import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="main-name">BHAVIK<span>.</span></h1>
      <ul className="nav-menu">
        <li>Home</li>
        <li>About Me</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
      <div className="nav-connect">Let's Connect!</div>
    </div>
  );
};

export default Navbar;
