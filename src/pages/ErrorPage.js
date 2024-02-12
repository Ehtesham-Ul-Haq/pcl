import React from 'react'
import '../styles/TeamPage.css'
import { Link } from 'react-router-dom';


export default function ErrorPage() {
  return (
      <div className='container'>
        <h2><span>Page Not&nbsp;</span> Find</h2>
        <Link to="/">go to homepage</Link>
      </div>
  )
}
