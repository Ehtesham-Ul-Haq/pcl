import React from 'react';
import '../styles/TeamPage.css';
export default function TeamAchievements(props) {
  return (
    <div>
      <h3>Team Achievements</h3>
      <div className='Team-Achievements'>
        <ul>
          <li>{props.a1}</li>
          <li>{props.a2}</li>
          <li>{props.a3}</li>
          <li>{props.a4}</li>
          <li>{props.a5}</li>
          <li>{props.a6}</li>
          <li>{props.a7}</li>
          <li>{props.a8}</li>
          <li>{props.a9}</li>
          <li>{props.a1}</li>
          <li>{props.a2}</li>
          <li>{props.a3}</li>
          <li>{props.a4}</li>
          <li>{props.a5}</li>
          <li>{props.a6}</li>
          <li>{props.a7}</li>
          <li>{props.a8}</li>
          <li>{props.a9}</li>
          <li>{props.a1}</li>
          <li>{props.a2}</li>
          <li>{props.a3}</li>
          <li>{props.a4}</li>
          <li>{props.a5}</li>
          <li>{props.a6}</li>
          <li>{props.a7}</li>
          <li>{props.a8}</li>
          <li>{props.a9}</li>

        </ul> 
        <div className="achievements-img">
          <img src={props.Achievementsimg} alt="Achievementsimg" />
        </div>
      </div>

    </div>
  )
}
