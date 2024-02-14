import React from 'react';
import '../styles/TeamPage.css';

export default function TeamAchievements({ achievements }) { 
  return (
    <div>
      <h3>Team Achievements</h3>
      <div className='Team-Achievements'>
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
          {/* Add more achievements as needed */}
        </ul>
        <div className="achievements-img">
          <img src={achievements.Achievementsimg} alt="Achievementsimg" />
        </div>
      </div>
    </div>
  );
}
