// import React, { useState } from "react";
// import "./Navbar.css";
// import AnchorLink from "react-anchor-link-smooth-scroll";
// import logo from "../../assets/logo.svg";

// const Navbar = () => {

//   const [menu,setMenu] = useState("home");

//   return (
//     <div className="navbar">
//       <h1 className="main-name">BHAVIK<span>.</span></h1>
//       <ul className="nav-menu">
//           <li> <AnchorLink className="anchor-link"  href="#home" > <p onClick={()=>setMenu("home")} className={menu==="home" ? "active" : ""}>Home</p> </AnchorLink> </li>
//           <li> <AnchorLink className="anchor-link" offset={50} href="#about" > <p onClick={()=>setMenu("about")} className={menu==="about" ? "active" : ""}>About Me</p> </AnchorLink> </li>
//           <li> <AnchorLink className="anchor-link" offset={50} href="#skills" > <p onClick={()=>setMenu("skills")} className={menu==="skills" ? "active" : ""}>Skills</p> </AnchorLink> </li>
//           <li> <AnchorLink className="anchor-link" offset={50} href="#project" > <p onClick={()=>setMenu("project")} className={menu==="project" ? "active" : ""}>Projects</p> </AnchorLink> </li>
//           <li> <AnchorLink className="anchor-link" offset={50} href="#contact" > <p onClick={()=>setMenu("contact")} className={menu==="contact" ? "active" : ""}>Contact</p> </AnchorLink> </li>
//       </ul>

//       <div className="nav-connect">Let's Connect!</div>
//     </div>
//   );
// };

// export default Navbar;

import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import logo from "../../assets/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <h1 className="main-name">
        BHAVIK<span>.</span>
      </h1>
      <ul className="nav-menu">
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="anchor-link"
            ease="linear"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="anchor-link"
            ease="linear"
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="anchor-link"
            ease="linear"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="anchor-link"
            ease="linear"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="anchor-link"
            ease="linear"
          >
            Contact
          </Link>
        </li>
      </ul>

      <div className="nav-connect">Let's Connect!</div>
    </div>
  );
};

export default Navbar;
