import React from 'react'
import './Hero.css'
import heroppp from '../../assets/images/heroppp.jpg'
const Hero = () => {
  return (
    <>
    <div className='hero-section'>
      <span className="hero-content">Unlock your Potential with<br/> <span className='title'>PathPlanPro</span></span>
      <span className='title-description'>Discover the step-by-step roadmaps to master new technologies and skills.</span>
      <button className='explore-button'>Explore</button>
      <button className='signup-button'>Sign Up</button>
      <img className='hero-image' src={heroppp} alt="Hero-image" />
    </div>
    </>
  )
}

export default Hero