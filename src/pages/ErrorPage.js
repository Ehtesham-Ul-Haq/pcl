import React from 'react'
import '../styles/TeamPage.css'
import { Link } from 'react-router-dom';

import errorLogo from '../components/img/error-404.png'


export default function ErrorPage() {
  return (
      <div className='container'>
        <div className="img">
          <img src={errorLogo} alt="Error 404" />
        </div>
        <h2><span>Page Not&nbsp;</span> Find</h2>
        <div className="error-back-page">
          <Link to="/">Click here to<i class="bi bi-arrow-90deg-right">go to homepage</i></Link>
        </div>
      </div>
  )
}
