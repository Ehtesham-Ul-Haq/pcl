import React from 'react'
import '../styles/TeamPage.css'
import TeamDetails from '../components/TeamDetails'
import TeamLogo from './img/teamlogo.png'

export default function GreenStars() {
    return (
        <div className='container'>       
        
          {/* Display team details and manage teams */}

          <div className="team-data">
              <TeamDetails title={'Green Stars'} TeamLogo={TeamLogo} owner={'Ehtesham'} remarks={'4 Times Trophy Winner'} TopBatter={'Alex Hales'} TopBowler={'Umar Gul'} BestCaptain={'Misbah Ul Haq'} />
          </div>
        </div>
    )
  }
