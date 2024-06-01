import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Explore from '../components/Explore/Explore'
import Features from '../components/Features/Features'
import Mission from '../components/Mission/Mission'
import Services from '../components/Services/Services'
import Testimonials from '../components/Testimonials/Testimonials'
import CTA from '../components/CTA/CTA'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Explore/>
    <Features/>
    <Mission/>
    <Services/>
    <Testimonials/>
    <CTA/>
    </>
  )
}

export default Home