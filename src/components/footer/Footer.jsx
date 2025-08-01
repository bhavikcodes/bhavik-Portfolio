import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import './footer.css';
import { FaHeart } from "react-icons/fa6";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      id="Footer"
      className="footer-container"
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
    >

      <div
        className="footer-message"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <h3 className="footer-message-text">Made with &nbsp;&nbsp;<FaHeart style={{color:"red",fontSize:"30px", verticalAlign: "middle" }}/>&nbsp;&nbsp; by&nbsp; <b id="decor">Bhavik Jain</b> &nbsp;: )</h3>
      </div>

      <div
        className="footer-icons"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      >
        <a
          href="mailto:bj541023@gmail.com"
          className="footer-icon-link"
        >
          <MdOutlineEmail size={30} />
        </a>
        <a
          href="https://github.com/bhavikcodes"
          className="footer-icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://linkedin.com/in/bhavikxjain"
          className="footer-icon-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLinkedin size={30} />
        </a>
      </div>
    </div>
  );
};

export default Footer;
