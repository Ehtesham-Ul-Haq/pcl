import React from 'react';
import '../styles/PlayerPage.css';

export default function PlayerStats({ title, stats }) {
  return (
    <div className='player-stats-container'>
      <h3>{title} &nbsp;Career Stats</h3>
      <div className='stats-table'>
        <table>
          <thead>
            <tr>
              <th colSpan="8">PCL Career Stats</th>
            </tr>

            <tr>
              <th colSpan="2">General Stats</th>
              <th colSpan="2">Batting Stats</th>
              <th colSpan="2">Bowling Stats</th>
              <th colSpan="2">Captaincy Stats</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Matches</td>
              <td>{stats.TotalMatches}</td>
              <td>Runs</td>
              <td>{stats.TotalRuns}</td>
              <td>Wickets</td>
              <td>{stats.TotalWickets}</td>
              <td>Matches as Captain</td>
              <td>{stats.MatchesasCaptain}</td>
            </tr>
            <tr>
              <td>Player of the Season Awards</td>
              <td>{stats.TotalPotT}</td>
              <td>Batting Average</td>
              <td>{stats.BatAvg}</td>
              <td>Bowling Average</td>
              <td>{stats.BowlAvg}</td>
              <td>Wins</td>
              <td>{stats.Wins}</td>
            </tr>
            <tr>
              <td>Player of the Match Awards</td>
              <td>{stats.TotalPotM}</td>
              <td>Ducks</td>
              <td>{stats.Ducks}</td>
              <td>Bowling Strike Rate</td>
              <td>{stats.BowlSR}</td>
              <td>Lost</td>
              <td>{stats.Lost}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>50s</td>
              <td>{stats.Fifties}</td>
              <td>5 Wicket Hauls</td>
              <td>{stats.FiveWicketHauls}</td>
              <td>Trophies Won</td>
              <td>{stats.TrophiesWon}</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>100s</td>
              <td>{stats.Hundred}</td>
              <td>Best Bowling Figure</td>
              <td>{stats.Bbf}</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td>Highest Score</td>
              <td>{stats.HighestScore}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>


          </tbody>
        </table>
      </div>
    </div>
  );
}
