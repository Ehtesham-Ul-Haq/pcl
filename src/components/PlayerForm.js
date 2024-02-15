import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/PlayerList.css';

export default function PlayerForm({title , PlayerImage}) {
  return (
      <div className="player-card"> 
          <div className="player-img">
            <img src={PlayerImage} className='card-img' alt={title} /> 
          </div>
          <h5 className="player-title">{title.toUpperCase()}</h5>
          <Link to={`/player/${title}`} className="btn btn-danger">Visit {title} Profile</Link>             
      </div>   
  );
}

