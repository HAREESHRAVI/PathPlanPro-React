import React from 'react'
import'./Footer.css'
import logo from '../../assets/images/ppplogo.png'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
  return (
    <>
    <div className="footer">
      <div className="footer-content">
        <div className="footer-left">
            <img className="footer-logo" src={logo} alt="footer-logo" />
            <div className="footer-name">PathPlanPro</div>
        </div>
        <div className="footer-middle">
              <li className="nav-menu-item"><a href='#'></a>Home</li>
              <li className="nav-menu-item"><a href='#'></a>About Us</li>
              <li className="nav-menu-item"><a href='#'></a>Mission</li>
              <li className="nav-menu-item"><a href='#'></a>Contact</li>
              <li className="nav-menu-item"><a href='#'></a>Roadmaps</li>
        </div>
        <div className="footer-right">
              <a className="nav-menu-item"href=""style={{color:'white',width:'25px',height:'auto'}}><FaFacebook /></a>
              <a className="nav-menu-item"href=""style={{color:'white',width:'25px',height:'auto'}}><FaInstagram /></a>
              <a className="nav-menu-item"href=""style={{color:'white',width:'25px',height:'auto'}}><IoLogoYoutube /></a>
              <a className="nav-menu-item"href=""style={{color:'white',width:'25px',height:'auto'}}><BsTwitterX /></a>
        </div>
      </div>
      <div className="line"></div>
      <div className="copyrights">&copy; 2024 PathPlanPro. All rights reserved.</div>
    </div>
    </>
  )
}

export default Footer