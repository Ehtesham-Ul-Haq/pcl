import React from 'react'
import RecordsImg from '../TeamLogo/achievements.png';

export default function SeasonRecords({records}) {
  return (
    <div>
      <h3>Season Records</h3>
      <div className='season-records-container'>
        <div className='season-records'>
            <div className='info-div'>
              <p><strong><i className="bi bi-diamond-fill"></i>Total 50s:</strong></p>
              <p><i className="bi bi-diamond-fill"></i> {records.Total50s}</p>
            </div>
            <div className='info-div'>
              <p><strong><i className="bi bi-diamond-fill"></i>Total 100s:</strong></p>
              <p><i className="bi bi-diamond-fill"></i> {records.Total100s}</p>
            </div>
            <div className='info-div'>
              <p><strong><i className="bi bi-diamond-fill"></i>Total 5 Wicket Hauls:</strong></p>
              <p><i className="bi bi-diamond-fill"></i> {records.Total5fers}</p>
            </div>
            <div className='info-div'>
              <p><strong><i className="bi bi-diamond-fill"></i>Best Bowling Figure:</strong></p>
              <p><i className="bi bi-diamond-fill"></i> {records.IndividualBBF}</p>
            </div>
            <div className='info-div'>
              <p><strong><i className="bi bi-diamond-fill"></i>Highest Inning Scorer :</strong></p>
              <p><i className="bi bi-diamond-fill"></i> {records.IndividualHighestScorer}</p>
            </div>
            <div className='info-div'>
              <p><strong><i className="bi bi-diamond-fill"></i>Most Player of the Match:</strong></p>
              <p><i className="bi bi-diamond-fill"></i> {records.MostPotM}</p>
            </div>
            {/* Add more player details as needed */}
        </div>
        <div className="achievements-img">
          <img src={RecordsImg} alt="Achievementsimg" />
        </div>
      </div>
    </div>
  )
}
