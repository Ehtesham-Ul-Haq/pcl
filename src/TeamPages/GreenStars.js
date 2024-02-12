import React from 'react'
import '.../styles/TeamPage.css'
import TeamDetails from '../components/TeamDetails'

export default function GreenStars() {
    return (
        <div className='container'>
          <h2><span>Green &nbsp;</span> Stars</h2>
       
          {/* Display team details and manage teams */}
          <div className="team-data">
              <TeamDetails title={'Green Stars'} />
          </div>
        </div>
    )
  }
