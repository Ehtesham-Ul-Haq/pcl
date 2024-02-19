import React, { useState } from 'react'
import { FaSort, FaSortAlphaUp, FaSortAlphaDown } from 'react-icons/fa';

export default function SeasonStats({stats , title}) {

    const [sortField, setSortField] = useState(null);
    const [sortDirection, setSortDirection] = useState('asc');
  
    const handleSort = (field) => {
      if (sortField === field) {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
      } else {
        setSortField(field);
        setSortDirection('asc');
      }
    };
  
    const renderSortIcon = (field) => {
      if (sortField === field) {
        return sortDirection === 'asc' ? <FaSortAlphaUp /> : <FaSortAlphaDown />;
      } else {
        return <FaSort onClick={() => handleSort(field)} />;
      }
    };
  
    const sortedPlayers = sortField
      ? stats.players.slice().sort((a, b) => {
          if (sortDirection === 'asc') {
            return a[sortField] > b[sortField] ? 1 : -1;
          } else {
            return a[sortField] < b[sortField] ? 1 : -1;
          }
        })
      : stats.players;

  return (
    <div>
      <h3>{title}&nbsp; Statistics</h3>
      <table>
        <thead>
            <tr>
              <th onClick={() => handleSort('name')}>Player {sortField === 'name' && renderSortIcon('name')}</th>
              <th onClick={() => handleSort('Matches')}>Matches {sortField === 'Matches' && renderSortIcon('Matches')}</th>
              <th onClick={() => handleSort('Runs')}>Runs  {sortField === 'Runs' && renderSortIcon('Runs')}</th>
              <th onClick={() => handleSort('BatAverage')}>Bat Avg {sortField === 'BatAverage' && renderSortIcon('BatAverage')}</th>
              <th onClick={() => handleSort('Ducks')}>Ducks {sortField === 'Ducks' && renderSortIcon('Ducks')}</th>
              <th onClick={() => handleSort('50s')}>50s {sortField === '50s' && renderSortIcon('50s')}</th>
              <th onClick={() => handleSort('100s')}>100s {sortField === '100s' && renderSortIcon('100s')}</th>
              <th onClick={() => handleSort('HighestScore')}>HS {sortField === 'HighestScore' && renderSortIcon('HighestScore')}</th>
              <th onClick={() => handleSort('Wickets')}>Wickets {sortField === 'Wickets' && renderSortIcon('Wickets')}</th>
              <th onClick={() => handleSort('BowlAverage')}>Bowl Avg {sortField === 'BowlAverage' && renderSortIcon('BowlAverage')}</th>
              <th onClick={() => handleSort('BowlStrikeRate')}>Bowl SR {sortField === 'BowlStrikeRate' && renderSortIcon('BowlStrikeRate')}</th>
              <th onClick={() => handleSort('5fers')}>5fers {sortField === '5fers' && renderSortIcon('5fers')}</th>
              <th onClick={() => handleSort('BestBowlingFigure')}>BBF {sortField === 'BestBowlingFigure' && renderSortIcon('BestBowlingFigure')}</th>
            </tr>        
        </thead>
        <tbody>
          {sortedPlayers.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.Matches}</td>
              <td>{player.Runs}</td>
              <td>{player.BatAverage}</td>
              <td>{player.Ducks}</td>
              <td>{player['50s']}</td>
              <td>{player['100s']}</td>
              <td>{player.HighestScore}</td>
              <td>{player.Wickets}</td>
              <td>{player.BowlAverage}</td>
              <td>{player.BowlStrikeRate}</td>
              <td>{player['5fers']}</td>
              <td>{player.BestBowlingFigure}</td>
            </tr>          
          ))}
        </tbody>
      </table>
      <div><p><strong>Note:</strong></ p>
      <p>Stats can be sort by clicking the category.</p>
      <p>Avg is Average, SR is StrikeRate, BBF is Best Bowling Figure</p></div>
    </div>
  )
}