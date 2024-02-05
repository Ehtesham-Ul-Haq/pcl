import React from 'react'
import '../styles/Footer.css';

export default function Footer() {
  return (
        <footer  className='bg-body-secondary'>
            <p>&copy; 2024 Cricket Tournament Manager</p>
          <div className='social-links'>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-github"></i>
            <i class="bi bi-twitter-x"></i>
          </div>
        </footer>
  )
}
