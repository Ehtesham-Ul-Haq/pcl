import React from 'react'
import RankingsData from '../data/rankingsData.json';
import '../styles/RankingPage.css';


export default function RankingPage() {
  return (
    <div className='container'>
        <h2>Rankings</h2>
        {RankingsData.map((rankingType, index) => (
        <div key={index}>
            <h3>{rankingType.rankingType}</h3>
            <table>
            <thead>
                <tr>
                <th>Rank</th>
                <th>Name</th>
                <th>Country</th>
                <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {rankingType.rankings.map((ranking, index) => (
                <tr key={index}>
                    <td>{ranking.rank}</td>
                    <td>{ranking.player || ranking.team}</td>
                    <td>{ranking.country}</td>
                    <td>{ranking.rating}</td>
                </tr>
                ))}
            </tbody>
            </table>
        </div>
        ))}
  </div>  
  )
}
