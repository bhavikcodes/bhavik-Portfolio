import React from 'react'
import './skills.css';
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiCplusplus } from "react-icons/si";
import { FaC } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";
import { IoLogoGithub } from "react-icons/io";
import { useEffect } from 'react';
import DSA from '../../assets/DSA2.png';
import MERN from '../../assets/mm.png';


const Skills = () => {

   useEffect(() => {
    const icons = document.querySelectorAll('.skill-icon');

    icons.forEach(icon => {
      icon.addEventListener('mouseenter', () => {
        icon.classList.add('rotate-once');

        // Remove class after animation completes (1s)
        setTimeout(() => {
          icon.classList.remove('rotate-once');
        }, 2500);
      });
    });
  }, []);

  return (
    <div>
       <div className="skill">
         <div className="skill-heading">
            <h1>My <span>Skills</span></h1>
         </div>
         <div className="skill-section">
            <div className="skill-sec-left">
               <div className="one-skill"><SiCplusplus className="skill-icon"  style={{color:"#3786feff"}}  /></div>
              <div className="one-skill"><FaReact className="skill-icon"  style={{color:"#00dbffff"}}  /> </div>
              <div className="one-skill"><SiExpress className="skill-icon"  style={{color:"white"}}  /></div>
            </div>
            <div className="skill-sec-midL">
                <div className="one-skill"><FaHtml5 className="skill-icon"  style={{color:"#ff5c5cff"}}   /></div>
               <div className="one-skill"><SiTailwindcss className="skill-icon"  style={{color:"#66a3ffff"}}  /></div>
               <div className="one-skill"><SiMongodb className="skill-icon"  style={{color:"#00c61eff"}}  /></div>             
            </div>
            <div className="skill-sec-midR">
              <div className="one-skill"><IoLogoCss3 className="skill-icon"  style={{color:"#1962ffff"}}  /></div >
              <div className="one-skill"><FaBootstrap className="skill-icon"  style={{color:"#7318fbff"}}  /></div>
              <div className="one-skill"><SiMysql className="skill-icon"  style={{color:"#fe6c11ff"}}  /></div>
            </div>
            <div className="skill-sec-right">
               <div className="one-skill"><RiJavascriptFill className="skill-icon"  style={{color:"#fffb00ff"}}   /></div>
               <div className="one-skill"><DiNodejs className="skill-icon"  style={{color:"#008b23ff",fontSize:"8rem"}}  /></div>
               <div className="one-skill"><IoLogoGithub className="skill-icon"  style={{color:"#ffffffff"}}  /></div>             
            </div>  
         </div>
         <div className="skill-img">
            <div className="img-mern">
               <img src={MERN} alt="" />
            </div>
            <div className="img-dsa">
               <img src={DSA} alt="" />
            </div>
         </div>
       </div>
    </div>
  )
}

export default Skills

