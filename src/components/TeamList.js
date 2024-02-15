import React from 'react';
import '../styles/TeamList.css';
import TeamForm from './TeamForm.js'
import teamData from '../data/teamData.json';



export default function TeamList() {


  return (
    <div className='container'>
      <h2><span>Team </span>List</h2>
            {/* Displaying a list of teams */}
      <div className='cards-container'>

         {/* Map over teamsArray and render TeamForm components */}

              {teamData.map((team) => (
                <TeamForm
                  key={team.name}
                  name={team.title}
                  logo={team.details.TeamLogo}
                />
              ))}
      </div>

    </div>
  )
}