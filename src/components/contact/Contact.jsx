import React from 'react'
import './Contact.css'
import mail_icon from "../../assets/mail_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import call_icon from "../../assets/call_icon.svg"
// import { IoIosSend } from "react-icons/io";

const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact-title">
        <h1>Contac<span>t</span></h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
            
            <h1>Let's talk</h1>
            <p> I'm actively seeking a software development internship where I can apply my technical skills, learn from experienced industry professionals, and gain valuable hands-on experience by working on impactful real-world projects. I'm eager to grow as a developer while contributing meaningfully to the team.</p>
             
            <div className="contact-details">
                 <div className="detail"> <img src={mail_icon} alt="" /><p><a href="mailto:bj541023@gmail.com">bj541023@gmail.com</a></p> </div>
                 <div className="detail"> <img src={call_icon} alt="" /><p>+91 96174 99745</p> </div>
                 <div className="detail"> <img src={location_icon} alt="" /><p>Bhopal, MP</p> </div>
            </div>
        </div>
        <form className="contact-right">
            <label htmlFor="">Your Name</label>
            <input type="text" name="name" placeholder='enter your name' />
            
            <label htmlFor="">Your Email</label>
            <input type="text" name="email" placeholder='enter your email'/>
            <label htmlFor="">Write your message here</label>
            <textarea type="text" name="message" rows="5" cols="30" placeholder='enter your message'/>
            <button className='btn-submit'>Send <i class="fa-solid fa-paper-plane"></i></button>
        </form>
      </div>
    </div>
  )
}

export default Contact
