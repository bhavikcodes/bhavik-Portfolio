
// import React from 'react';
// import './skills.css';
// import { FaHtml5, FaBootstrap, FaC, FaGitAlt } from "react-icons/fa6";
// import { IoLogoCss3, IoLogoGithub } from "react-icons/io5";
// import { RiJavascriptFill } from "react-icons/ri";
// import { FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiExpress, SiMongodb, SiCplusplus, SiMysql } from "react-icons/si";
// import { DiNodejs } from "react-icons/di";
// import DSA from '../../assets/DSA2.png';
// import MERN from '../../assets/mm.png';

// const Skills = () => {
//   return (
//     <div id="skills">
//       <div className="skill">
//         <div className="skill-heading">
//           <h1>My <span>Skills</span></h1>
//         </div>
//         <div className="skill-section">

//           <div className="skill-sec-left">
//             <div className="one-skill">
//               <SiCplusplus className="skill-icon" style={{ color: "#3786feff" }} />
//               <span className="skill-name">C++</span>
//             </div>
//             <div className="one-skill">
//               <FaReact className="skill-icon" style={{ color: "#00dbffff" }} />
//               <span className="skill-name">React</span>
//             </div>
//             <div className="one-skill">
//               <SiExpress className="skill-icon" style={{ color: "white" }} />
//               <span className="skill-name">Express</span>
//             </div>
//           </div>

//           <div className="skill-sec-midL">
//             <div className="one-skill">
//               <FaHtml5 className="skill-icon" style={{ color: "#ff5c5cff" }} />
//               <span className="skill-name">HTML</span>
//             </div>
//             <div className="one-skill">
//               <SiTailwindcss className="skill-icon" style={{ color: "#66a3ffff" }} />
//               <span className="skill-name">Tailwind</span>
//             </div>
//             <div className="one-skill">
//               <SiMongodb className="skill-icon" style={{ color: "#00c61eff" }} />
//               <span className="skill-name">MongoDB</span>
//             </div>
//           </div>

//           <div className="skill-sec-midR">
//             <div className="one-skill">
//               <IoLogoCss3 className="skill-icon" style={{ color: "#1962ffff" }} />
//               <span className="skill-name">CSS</span>
//             </div>
//             <div className="one-skill">
//               <FaBootstrap className="skill-icon" style={{ color: "#7318fbff" }} />
//               <span className="skill-name">Bootstrap</span>
//             </div>
//             <div className="one-skill">
//               <SiMysql className="skill-icon" style={{ color: "#fe6c11ff" }} />
//               <span className="skill-name">MySQL</span>
//             </div>
//           </div>

//           <div className="skill-sec-right">
//             <div className="one-skill">
//               <RiJavascriptFill className="skill-icon" style={{ color: "#fffb00ff" }} />
//               <span className="skill-name">JavaScript</span>
//             </div>
//             <div className="one-skill">
//               <DiNodejs className="skill-icon" style={{ color: "#008b23ff", fontSize: "8rem" }} />
//               <span className="skill-name">Node.js</span>
//             </div>
//             <div className="one-skill">
//               <IoLogoGithub className="skill-icon" style={{ color: "#ffffffff" }} />
//               <span className="skill-name">GitHub</span>
//             </div>
//           </div>

//         </div>

//         <div className="skill-img">
//           <div className="img-mern">
//             <img src={MERN} alt="MERN" />
//           </div>
//           <div className="img-dsa">
//             <img src={DSA} alt="DSA" />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;


import React from 'react';
import './skills.css';
import { FaHtml5, FaGitAlt } from "react-icons/fa6";
import { IoLogoCss3, IoLogoGithub } from "react-icons/io5";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { SiExpress, SiMongodb, SiCplusplus, SiMysql, SiTypescript } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import DSA from '../../assets/DSA2.png';
import MERN from '../../assets/mm.png';

const Skills = () => {
  return (
    <div id="skills">
      <div className="skill">
        <div className="skill-heading">
          <h1>My <span>Skills</span></h1>
        </div>
        <div className="skill-section">

          <div className="skill-sec-left">
            <div className="one-skill">
              <SiCplusplus className="skill-icon" style={{ color: "#3786feff" }} />
              <span className="skill-name">C++</span>
            </div>
            <div className="one-skill">
              <FaReact className="skill-icon" style={{ color: "#00dbffff" }} />
              <span className="skill-name">React</span>
            </div>
            <div className="one-skill">
              <SiExpress className="skill-icon" style={{ color: "white" }} />
              <span className="skill-name">Express</span>
            </div>
          </div>

          <div className="skill-sec-midL">
            <div className="one-skill">
              <FaHtml5 className="skill-icon" style={{ color: "#ff5c5cff" }} />
              <span className="skill-name">HTML</span>
            </div>
            <div className="one-skill">
              <SiTypescript className="skill-icon" style={{ color: "#3178c6" ,fontSize: "3.5rem"}} />
              <span className="skill-name">TypeScript</span>
            </div>
            <div className="one-skill">
              <SiMongodb className="skill-icon" style={{ color: "#00c61eff" }} />
              <span className="skill-name">MongoDB</span>
            </div>
          </div>

          <div className="skill-sec-midR">
            <div className="one-skill">
              <IoLogoCss3 className="skill-icon" style={{ color: "#1962ffff" }} />
              <span className="skill-name">CSS</span>
            </div>
            <div className="one-skill">
              <FaGitAlt className="skill-icon" style={{ color: "#f34f29" }} />
              <span className="skill-name">Git</span>
            </div>
            <div className="one-skill">
              <SiMysql className="skill-icon" style={{ color: "#fe6c11ff" }} />
              <span className="skill-name">MySQL</span>
            </div>
          </div>

          <div className="skill-sec-right">
            <div className="one-skill">
              <RiJavascriptFill className="skill-icon" style={{ color: "#fffb00ff" }} />
              <span className="skill-name">JavaScript</span>
            </div>
            <div className="one-skill">
              <DiNodejs className="skill-icon" style={{ color: "#008b23ff", fontSize: "8rem" }} />
              <span className="skill-name">Node.js</span>
            </div>
            <div className="one-skill">
              <IoLogoGithub className="skill-icon" style={{ color: "#ffffffff" }} />
              <span className="skill-name">GitHub</span>
            </div>
          </div>

        </div>

        <div className="skill-img">
          <div className="img-mern">
            <img src={MERN} alt="MERN" />
          </div>
          <div className="img-dsa">
            <img src={DSA} alt="DSA" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
