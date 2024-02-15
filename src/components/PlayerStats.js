import React from 'react';
import '../styles/PlayerPage.css';

export default function PlayerStats({ title, stats }) {
  return (
    <div className='player-stats-container'>
      <h3>{title} &nbsp;Career Stats</h3>
      <div className='stats-box'>
        <div className='stats-section'>
          <h5>General Stats</h5>
          <div className='stats-list'>
            <div className='stat-item'>
              <p><strong>Matches:</strong></p>
              <p><strong>{stats.TotalMatches}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>Player of the Season Awards:</strong></p>
              <p><strong>{stats.TotalPotT}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>Player of the Match Awards:</strong></p>
              <p><strong>{stats.TotalPotM}</strong></p>
            </div>
          </div>
        </div>

        <div className='stats-section'>
          <h5>Batting Stats</h5>
          <div className='stats-list'>
            <div className='stat-item'>
              <p><strong>Runs:</strong></p>
              <p><strong>{stats.TotalRuns}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>Batting Average:</strong></p>
              <p><strong>{stats.BatAvg}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>50s:</strong></p>
              <p><strong>{stats.Fifties}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>100s:</strong></p>
              <p><strong>{stats.Hundred}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>Highest Score:</strong></p>
              <p><strong>{stats.HighestScore}</strong></p>
            </div>
          </div>
        </div>

        <div className='stats-section'>
          <h5>Bowling Stats</h5>
          <div className='stats-list'>
            <div className='stat-item'>
              <p><strong>Wickets:</strong></p>
              <p><strong>{stats.TotalWickets}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>Bowling Average:</strong></p>
              <p><strong>{stats.BowlAvg}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>Bowling SR:</strong></p>
              <p><strong>{stats.BowlSR}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>5 Wicket Hauls:</strong></p>
              <p><strong>{stats.FiveWicketHauls}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>Best Bowling Figure:</strong></p>
              <p><strong>{stats.Bbf}</strong></p>
            </div>
          </div>
        </div>

        <div className='stats-section'>
          <h5>Captaincy Stats</h5>
          <div className='stats-list'>
            <div className='stat-item'>
              <p><strong>Matches as Captain:</strong></p>
              <p><strong>{stats.MatchesasCaptain}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>Wins:</strong></p>
              <p><strong>{stats.Wins}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>Lost:</strong></p>
              <p><strong>{stats.Lost}</strong></p>
            </div>
            <div className='stat-item'>
              <p><strong>Trophies Won:</strong></p>
              <p><strong>{stats.TrophiesWon}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
