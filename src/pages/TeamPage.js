import React from 'react'
import '../styles/TeamPage.css'
import TeamDetails from '../components/TeamDetails'


export default function TeamPage(props) {
  console.log(props.title);
  return (
      <div className='container'>
        <h2><span>Team &nbsp;</span> Page</h2>
     
        {/* Display team details and manage teams */}
        <div className="team-data">
            <TeamDetails title={props.title} />
        </div>
      </div>
  )
}
