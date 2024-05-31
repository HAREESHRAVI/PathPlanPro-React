import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Explore from '../components/Explore/Explore'
import Features from '../components/Features/Features'
import Mission from '../components/Mission/Mission'
import Services from '../components/Services/Services'
const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Explore/>
    <Features/>
    <Mission/>
    <Services/>
    </>
  )
}

export default Home