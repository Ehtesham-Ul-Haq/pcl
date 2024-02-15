import React from 'react'
import '../styles/PlayerPage.css';
import Achievementsimg from '../TeamLogo/achievements.png';

export default function PlayerAchievements({achievements}) {
  return (
    <div>
      <h3>Player Achievements</h3>
      <div className='Player-Achievements'>
        <ul>
          <li>{achievements.a1}</li>
          <li>{achievements.a2}</li>
          <li>{achievements.a3}</li>
          <li>{achievements.a4}</li>
          <li>{achievements.a5}</li>
          <li>{achievements.a6}</li>
          <li>{achievements.a7}</li>
          <li>{achievements.a8}</li>
          <li>{achievements.a9}</li>
          <li>{achievements.a10}</li>
          <li>{achievements.a11}</li>
          <li>{achievements.a12}</li>
          {/* Add more achievements as needed */}
        </ul>
        <div className="achievements-img">
          <img src={Achievementsimg} alt="Achievementsimg" />
        </div>
      </div>
    </div>
  )
}
