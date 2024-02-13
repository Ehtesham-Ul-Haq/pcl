import React from 'react'
import '../styles/TeamPage.css'
export default function TeamDetails(props) {


  return (
    <div>
      <h3>Team Details</h3>
      <div className='detail-box'>

          <div className='team-logo'>
            <img src={props.TeamLogo} alt={props.title} />
          </div>
            <div className='team-info'>
              <div className='info-div'>
                <p><strong><i class="bi bi-diamond-fill"></i>Team Name:</strong></p> 
                <p><i class="bi bi-diamond-fill"></i> {props.title}</p>
              </div>
              <div className='info-div'>
                <p><strong><i class="bi bi-diamond-fill"></i>Team Owner:</strong></p> 
                <p><i class="bi bi-diamond-fill"></i> {props.owner}</p>
              </div>
              <div className='info-div'>
                <p><strong><i class="bi bi-diamond-fill"></i>Remarks:</strong></p> 
                <p><i class="bi bi-diamond-fill"></i> {props.remarks}</p>
              </div>
              <div className='info-div'>
                <p><strong><i class="bi bi-diamond-fill"></i>Top Batter:</strong></p> 
                <p><i class="bi bi-diamond-fill"></i> {props.TopBatter}</p>
              </div>
              <div className='info-div'>
                <p><strong><i class="bi bi-diamond-fill"></i>Top Bowler:</strong></p> 
                <p><i class="bi bi-diamond-fill"></i> {props.TopBowler}</p>
              </div>
              <div className='info-div'>
                <p><strong><i class="bi bi-diamond-fill"></i>Status:</strong></p> 
                <p><i class="bi bi-diamond-fill"></i> {props.Status}</p>
              </div>
              <div className='info-div'>
                <p><strong><i class="bi bi-diamond-fill"></i>Active Captain:</strong></p> 
                <p><i class="bi bi-diamond-fill"></i> {props.ActiveCaptain}</p>
              </div>
              <div className='info-div'>
                <p><strong><i class="bi bi-diamond-fill"></i>Active Coach:</strong></p> 
                <p><i class="bi bi-diamond-fill"></i> {props.ActiveCoach}</p>
              </div>
              <div className='info-div'>
                <p><strong><i class="bi bi-diamond-fill"></i>Recent Participation:</strong></p> 
                <p><i class="bi bi-diamond-fill"></i> {props.RecentParticipation}</p>
              </div>

              {/* Add more team details as needed */}
            </div>
      
      </div>
    </div>

  )
}
