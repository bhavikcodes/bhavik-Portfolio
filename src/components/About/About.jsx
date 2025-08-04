import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/about_profile.svg";

const About = () => {
  return (
    <div id="about" className="about">

      <div className="about-title">
        <h1>About <span id="blue-text">Me</span></h1>
      </div>
      <div className="about-section">
        <div className="about-img">
            <img src={profile_img} alt="" />
        </div>
        <div className="about-para">
            
          <p>
            <b style={{fontSize:"25px",fontWeight:"600"}}>Hello people!👋😃</b> I’m a 3<sup>rd</sup> B.Tech student at UIT RGPV, Bhopal, specializing in Computer Science and Engineering. I have a strong foundation in C++ and Data Structures & Algorithms, and I enjoy solving real-world problems through efficient code.<br/> I’m also a MERN stack developer, having built and deployed a few basic level front-end projects to advanced full-stack projects from scratch, handling both frontend and backend development. I actively practice on platforms like LeetCode, have solved over 200 DSA problems, and hold a 5-star C++ badge on HackerRank. My long-term goal is to become a skilled software engineer, contributing to impactful projects and innovations. I’m currently seeking internship opportunities to gain hands-on experience and grow as a developer.
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default About;


