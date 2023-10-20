import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import Trip from '../components/Trip'

function Service() {
  return (
    <>
     <Navbar />
    <Hero 
      cName="hero-mid"
      heroImg="https://wallpaperaccess.com/full/4621639.jpg"
      title="Service"
    />
    <Trip/>
    <Footer/>
    </>
  )
}
export default Service
