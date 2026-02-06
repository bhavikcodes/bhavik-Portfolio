// import React from "react";
// import "./Hero.css";
// import profile_img from "../../assets/face/final.png";
// const Hero = () => {
//   return (
//     <>
//       <div id="home" className="hero">
         
//         <img src={profile_img} alt="" />
//         <h1>
//           <span>Hi, I’m Bhavik Jain</span>
//         </h1>
//         <p>
//           CS student, MERN stack developer & C++ problem solver who loves
//           building things that work well and look better.
//         </p>
//         <div className="hero-action">
//           <div className="hero-resume">My resume</div>
//         </div>
        
//       </div>
//     </>
//   );
// };

// export default Hero;


import React from "react";
import "./Hero.css";
import profile_img from "../../assets/face/final.png";

const Hero = () => {
  return (
    <>
      <div id="home" className="hero">
        <img src={profile_img} alt="Profile" />
        <h1>
          <span>Hi, I’m Bhavik Jain</span>
        </h1>
        <p>
          CSE undergrad, MERN stack developer & C++ problem solver who loves
          building things that work well and look better.
        </p>
        <div className="hero-action">
          <div className="hero-resume"><a href="https://drive.google.com/drive/folders/16RQS0HIfx6HGOm3V2qRDfyOhciWagn1r?usp=drive_link" target="_blank" rel="noopener noreferrer" >My resume</a></div>
        </div>
      </div>
    </>
  );
};

export default Hero;
