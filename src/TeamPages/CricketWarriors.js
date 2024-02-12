import React from 'react'
import '../styles/TeamPage.css'
import TeamDetails from '../components/TeamDetails'

export default function CricketWarriors() {
    return (
        <div className='container'>
       
          {/* Display team details and manage teams */}
          <div className="team-data">
              <TeamDetails title={'Cricket Warriors'} />
          </div>
        </div>
    )
  }
