import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import AbouUs from '../components/AbouUs'

function About() {
  return (
    <>
    <div>
    <Navbar />
    <Hero 
      cName="hero-mid"
      heroImg="https://wallpaperaccess.com/full/191335.jpg"
      title="About Us"
    />
    <AbouUs/>
    <Footer/>
    </div>
    </>
  )
}
export default About

