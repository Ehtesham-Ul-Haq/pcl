import React from 'react'
import '../styles/TeamPage.css'
import TeamDetails from '../components/TeamDetails'

export default function LittleBash() {
    return (
        <div className='container'>
       
          {/* Display team details and manage teams */}
          <div className="team-data">
              <TeamDetails title={'Little Bash'} />
          </div>
        </div>
    )
  }
