import React from 'react'
import '../styles/TournamentPage.css';


export default function SeasonDetails( { details } ) {
  return (
    <div>
      <h3>Season Info</h3>
      <div className='season-info-box'>
        <div className='player-pic'>
          <img src={details.SeasonLogo} alt={details.title} />
        </div>
        <div className='season-info'>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Season:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.title}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Winner:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.Winner}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>RunnerUp:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.RunnerUp}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Top Scorer:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.TopScorer}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Top Wicket Taker:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.TopWicketTaker}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i> Player of the Season:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.PotT}</p>
          </div>
          {/* Add more player details as needed */}
        </div>
      </div>
    </div>
  )
}
