// import React from "react";
// import "./Navbar.css";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   return (
//     <div className="navbar">
//       <h1 className="main-name">
//         BHAVIK<span>.</span>
//       </h1>
//       <ul className="nav-menu">
//         <li>
//           <Link
//             activeClass="active"
//             to="home"
//             spy={true}
//             smooth={true}
//             offset={-80}
//             duration={500}
//             className="anchor-link"
//             ease="linear"
//           >
//             Home
//           </Link>
//         </li>
//         <li>
//           <Link
//             activeClass="active"
//             to="about"
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={500}
//             className="anchor-link"
//             ease="linear"
//           >
//             About Me
//           </Link>
//         </li>
//         <li>
//           <Link
//             activeClass="active"
//             to="skills"
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={500}
//             className="anchor-link"
//             ease="linear"
//           >
//             Skills
//           </Link>
//         </li>
//         <li>
//           <Link
//             activeClass="active"
//             to="project"
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={500}
//             className="anchor-link"
//             ease="linear"
//           >
//             Projects
//           </Link>
//         </li>
//         <li>
//           <Link
//             activeClass="active"
//             to="contact"
//             spy={true}
//             smooth={true}
//             offset={-50}
//             duration={500}
//             className="anchor-link"
//             ease="linear"
//           >
//             Contact
//           </Link>
//         </li>
//       </ul>

//       <div className="nav-connect">Let's Connect!</div>
//     </div>
//   );
// };

// export default Navbar;


import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="navbar">
      <h1 className="main-name">
        BHAVIK<span>.</span>
      </h1>

      <div className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>

      <ul className={menuOpen ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
            className="anchor-link"
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
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
            onClick={closeMenu}
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
