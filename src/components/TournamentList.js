import React from 'react'
import '../styles/TournamentList.css';
import TournamentForm from './TournamentForm.js'
import SeasonData from '../data/seasonsData.json';


export default function TournamentList() {
  return (
    <div className='container'>
      <h2><span>Tournament </span>List</h2>
            {/* Displaying a list of teams */}
      <div className='cards-container'>


              {SeasonData.map((season) => (
                <TournamentForm
                  key={season.name}
                  name={season.title}
                  logo={season.details.SeasonLogo}
                />
              ))}
      </div>

    </div>
  )
}
