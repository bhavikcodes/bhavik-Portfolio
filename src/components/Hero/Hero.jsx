import React from 'react'
import './Hero.css' 
import profile_img from "../../assets/profile_img.svg"
const Hero = () => {
  return (
    <div className='hero'>
      <img src={profile_img} alt="" />
      <h1><span>Hi, I’m Bhavik Jain</span></h1>
      <p>CS student, MERN stack developer & C++ problem solver who loves building things that work well and look better.</p>
      <div className="hero-action">
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero
