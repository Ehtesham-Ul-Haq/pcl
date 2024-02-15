import React from 'react';
import '../styles/PlayerList.css';
import playerData from '../data/playerData.json';
import PlayerForm from './PlayerForm.js';



export default function PlayerList() {


  return (
    <div className='container'>
      <h2><span>Players&nbsp;</span>List</h2>
            {/* Displaying a list of Players */}
      <div className='cards-grid'>


              {playerData.map((player) => (
                <PlayerForm
                  key={player.name}
                  title={player.title}
                  PlayerImage={player.details.PlayerImage}
                />
              ))}
      </div>

    </div>
  )
}