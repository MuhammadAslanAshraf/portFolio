import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { SiIndeed } from "react-icons/si";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
      <div className="container my-4" id='contact'>
        <h1>Contact Me</h1>
        <div className="contact-icon" data-aos="zoom-in-up"
          data-aos-duration="1000">

          <a href="https://www.linkedin.com/in/muhammad-aslan-ashraf-8883032ba/" target="_blank" className="item">
            <CiLinkedin className='icon' />
          </a>
          <a href="https://pk.indeed.com/" target="_blank" className="item">
            <SiIndeed className='icon' />
          </a>
          <a href="https://github.com/Muhammad11Aslan" target="_blank" className="item">
            <FaGithubSquare className='icon' />
          </a>
          <a href="mailto:muhammadaslan4013@gmail.com" target="_blank" className="item">
            <SiGmail className='icon' />
          </a>
          <a href="https://www.instagram.com/accounts/login/?hl=en" target="_blank" className="item">
            <FaInstagram className='icon' />
          </a>
          <a href="https://www.facebook.com/checkpoint/828281030927956/?next=https%3A%2F%2Fwww.facebook.com%2F" target="_blank" className="item">
            <CiFacebook className='icon' />
          </a>
        </div>
      </div>
    </>
  )
}

export default Contact;
