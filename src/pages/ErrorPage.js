import React from 'react'
import '../styles/TeamPage.css'
import TeamDetails from '../components/TeamDetails'
import { Link } from 'react-router-dom';


export default function TeamPage(props) {
  console.log(props.title);
  return (
      <div className='container'>
        <h2><span>Error &nbsp;</span> 404</h2>
        <Link to="/">go to homepage</Link>
      </div>
  )
}
