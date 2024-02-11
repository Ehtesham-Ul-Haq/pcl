import React from 'react'
import '../styles/Footer.css';

export default function Footer() {
  return (
        <footer className="bg-body">
            <p>&copy; 2024 Paper Cricket League | All Rights Reserved</p>
          <div className='social-links'>
            <i className="bi bi-facebook"></i>
            <i className="bi bi-whatsapp"></i>
            <i className="bi bi-github"></i>
            <i className="bi bi-twitter-x"></i>
          </div>
        </footer>
  )
}
