import React from 'react'
import '../styles/PlayerPage.css';

export default function PlayerDetails({ details }) {
  return (
    <div>
      <h3>Player Info</h3>
      <div className='Info-box'>
        <div className='player-pic'>
          <img src={details.PlayerImage} alt={details.title} />
        </div>
        <div className='player-info'>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Player Name:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.title}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Country:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.country}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Role:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.role}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Status:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.Status}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Active Team:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.ActiveTeam}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Total Player of the Season Awards:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.TotalPotT}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Total Runs:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.TotalRuns}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Total Wickets:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.TotalWickets}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Total Player of the Match Awards:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.TotalPotM}</p>
          </div>
          {/* Add more player details as needed */}
        </div>
      </div>
    </div>
  );
}
