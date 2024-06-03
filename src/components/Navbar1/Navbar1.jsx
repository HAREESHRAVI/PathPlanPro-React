import React from 'react'
import './Navbar1.css'
import logo from '../../assets/images/ppplogo.png'
const Navbar1 = () => {
  return (
    <>
    <div className="navbar1">
        <div className='navbar-left'> 
            <img src={logo} alt="navbar logo" className="navbar-logo" />
            <h1>PathPlanPro</h1>
        </div>
    
    <div className='navbar-right'>
        <ul className="nav-menu">
            <li className="nav-menu-item">Home</li>
            <li className="nav-menu-item">About Us</li>
            <li className="nav-menu-item">Mission</li>
            <li className="nav-menu-item">Contact</li>
        </ul>
    </div>
    </div>
    </>
  )
}

export default Navbar1