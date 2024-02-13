import React from 'react'
import '../styles/TeamPage.css'
import TeamDetails from '../components/TeamDetails'
import TeamLogo from './img/teamlogo.png'
import Achievementsimg from './img/achievements.png'
import TeamPageNav from '../components/TeamPageNav'
import TeamAchievements from '../components/TeamAchievements'

export default function GreenStars() {
    return (
        <div className='container'>       
        
          {/* Display team details and manage teams */}
          <div className='teampage-nav'>
            <TeamPageNav title={'Green Stars'} />
          </div>
          <div className="team-data">
              <TeamDetails title={'Green Stars'} TeamLogo={TeamLogo} owner={'Ehtesham'} remarks={'4 Times Trophy Winner'} TopBatter={'Alex Hales'} TopBowler={'Umar Gul'} Status={'Active'} ActiveCaptain={'Imad Wasim'} ActiveCoach={'Misbah Ul Haq'} RecentParticipation={'PCL-40'} />
          </div>
          <div className="Team-Achievements-div" id="TeamAchievements">
            <TeamAchievements Achievementsimg={Achievementsimg} a1={'Title Winner'} a2={'Consecutive Title Winner'} a3={'10 Consecutive Matches Winner'} a4={'Title Winner'} a5={'Consecutive Title Winner'} a6={'10 Consecutive Matches Winner'} a7={'Title Winner'} a8={'Consecutive Title Winner'} a9={'10 Consecutive Matches Winner'} />
          </div>
        </div>
    )
  }
