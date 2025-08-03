
import React from "react";
import "./project.css";
import AyuCare from '../../assets/project/AyuCare.png'
import SimonSays from '../../assets/project/SimonSays.png'
import SpotifyClone from '../../assets/project/SpotifyClone.png'
import TextUtils from '../../assets/project/TextUtils.png'
import WanderLust from '../../assets/project/WanderLust.png'
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <div>
      <div className="project">
        <div className="project-heading">
          <h1>
            Projec<span>ts</span>
          </h1>
        </div>
        <div className="project-content-fe">

          <div className="card" style={{ width: "18rem" }}>
            <img src={WanderLust} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Wanderlust <a href="https://wanderlust-project-9x1g.onrender.com/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt style={{verticalAlign: "middle"}} className="linkIcon"/></a></h5>
              <p className="card-text">
                A full-stack travel booking web app with CRUD operations, user authentication, and dynamic listings. Developed using <b>Node.js</b>, <b>Express</b>, <b>MongoDB</b>, <b>EJS</b>, and <b>Bootstrap</b>.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={AyuCare} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">AyuCare <a href="https://github.com/bhavikcodes/AyuCare.git" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt style={{verticalAlign: "middle"}} className="linkIcon"/></a></h5>
              <p className="card-text">
                A web platform connecting users with Ayurveda and India’s wellness practices with a modern, responsive UI. Built using the <b>MERN</b> Stack, <b>Tailwind CSS</b>, <b>Clerk Authentication</b>.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={TextUtils} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">TextUtils <a href="https://bhavikcodes.github.io/TextUtils/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt style={{verticalAlign: "middle"}} className="linkIcon"/></a></h5>
              <p className="card-text">
               A simple text utility app that allows users to perform text transformations like uppercase, lowercase, and speech, with Dark mode theme. Made with <b>React.js</b> and <b>Bootstrap</b>.
              </p>
            </div>
          </div>

        </div>
        <div className="project-content-be">

          <div className="card" style={{ width: "18rem" }}>
            <img src={SimonSays} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Simon Says <a href="https://bhavikcodes.github.io/Simon-Says-/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt style={{verticalAlign: "middle"}} className="linkIcon"/></a></h5>
              <p className="card-text">
                A fun interactive Simon Says game that tests user’s memory with color patterns. User can play and track their score. Built using <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>.
              </p>
            </div>
          </div>

          <div className="card" style={{ width: "18rem" }}>
            <img src={SpotifyClone} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Spotify Clone <a href="https://bhavikcodes.github.io/Spotify/" target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt style={{verticalAlign: "middle"}} className="linkIcon"/></a></h5>
              <p className="card-text">
                A frontend clone of Spotify with a sleek UI that mimics music streaming interface. Built using <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, and <b>Bootstrap</b>.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Project;
