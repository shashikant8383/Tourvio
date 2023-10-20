import React from 'react'
import "./ContactFormStyles.css"

function ContactForm() {
  return (
    <div className='form-container'>
      <h1>Send a message to us!</h1>
      <form>
        <input placeholder=" First Name"/>
        <input placeholder=" Last Name"/>
        <input placeholder="Email"/>
        <input placeholder="Mobile Number"/>
        <input placeholder="Subject for query"/>
        <textarea placeholder='Message' rows="4"></textarea>
        <button>Send Message</button>
      </form>
    </div>
  )
}
export default ContactForm
