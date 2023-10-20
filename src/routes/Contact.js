import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'


function Contact() {
  return (
    <>
    <div>
    <Navbar />
    <Hero 
      cName="hero-mid"
      heroImg="https://wallpaperaccess.com/full/1431610.jpg"
      title="Contact Us"
    />
    <ContactForm/>
    <Footer/>
    </div>
    </>
  )
}

export default Contact
