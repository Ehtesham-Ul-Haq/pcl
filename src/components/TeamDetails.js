import React from 'react';
import '../styles/TeamPage.css';

export default function TeamDetails({ details }) { 
  return (
    <div>
      <h3>Team Details</h3>
      <div className='detail-box'>
        <div className='team-logo'>
          <img src={details.TeamLogo} alt={details.title} />
        </div>
        <div className='team-info'>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Team Name:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.title}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Team Owner:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.owner}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Remarks:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.remarks}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Top Batter:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.TopBatter}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Top Bowler:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.TopBowler}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Status:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.Status}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Active Captain:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.ActiveCaptain}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Active Coach:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.ActiveCoach}</p>
          </div>
          <div className='info-div'>
            <p><strong><i className="bi bi-diamond-fill"></i>Recent Participation:</strong></p>
            <p><i className="bi bi-diamond-fill"></i> {details.RecentParticipation}</p>
          </div>
          {/* Add more team details as needed */}
        </div>
      </div>
    </div>
  );
}
