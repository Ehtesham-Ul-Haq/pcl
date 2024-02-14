import React from 'react'
import '../styles/TeamPage.css'
import TeamDetails from '../components/TeamDetails'
import TeamLogo from './img/teamlogo.png'
import Achievementsimg from './img/achievements.png'
import TeamPageNav from '../components/TeamPageNav'
import TeamAchievements from '../components/TeamAchievements'
import TeamStats from '../components/TeamStats'

export default function GreenStars() {

  const data = [
    { SrNo: 1, scorer: 'Alex Hales', wicketTaker: 'Umar Gul', mostPotM: 'Umar Gul' },
    { SrNo: 2, scorer: 'Misbah Ul Haq', wicketTaker: 'Tim Southee', mostPotM: 'Imad Wasim' },
    { SrNo: 3, scorer: 'Rohit Sharma', wicketTaker: 'Imad Wasim', mostPotM: 'Tim Southee' },
    { SrNo: 4, scorer: 'Imad Wasim', wicketTaker: 'Rumman Raees', mostPotM: 'Adam Zampa' },
    { SrNo: 5, scorer: 'Umar Amin', wicketTaker: 'Adam Zampa', mostPotM: 'Alex Hales' },
    // Add more data as needed
  ];


    return (
        <div className='container'>       
        
          <div className="teampage-nav">
            <TeamPageNav title={'Green Stars'} />
          </div>
          <div className="team-data">
            <TeamDetails title={'Green Stars'} TeamLogo={TeamLogo} owner={'Ehtesham'} remarks={'4 Times Trophy Winner'} TopBatter={'Alex Hales'} TopBowler={'Umar Gul'} Status={'Active'} ActiveCaptain={'Imad Wasim'} ActiveCoach={'Misbah Ul Haq'} RecentParticipation={'PCL-40'} />
          </div>
          <div className="Team-Achievements-div">
            <TeamAchievements Achievementsimg={Achievementsimg} a1={'Title Winner'} a2={'Consecutive Title Winner'} a3={'10 Consecutive Matches Winner'} a4={'Title Winner'} a5={'Consecutive Title Winner'} a6={'10 Consecutive Matches Winner'} a7={'Title Winner'} a8={'Consecutive Title Winner'} a9={'10 Consecutive Matches Winner'} />
          </div>
          <div className="Team-Stats-div">
            <TeamStats data={data} />
          </div>
        </div>
    )
  }
