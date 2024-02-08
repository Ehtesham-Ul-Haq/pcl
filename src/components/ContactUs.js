import React from 'react'
import '../styles/Home.css';

export default function ContactUs() {
  return (
    <div id='Contact-Us'>
      <h2><span>PCL -</span> - Contact Us</h2>
      <div className="container">
        <div className='contact-info'>
          <h3>Contact Info</h3>
          <div className="info-details">
            <address>
              <p>Name:Babar Azam</p>
              <p>123 Main Street, Gujranwala, Punjab, 52330</p>
              <p>Email: babar123@example.com</p>
              <p>Phone: 123-456-7890</p>
            </address>
          </div>
        </div>
        <div className="contact-form">
        
          <form action="SubmitForm">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject:</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
      </div>
    </div>
    </div>
  )
}
