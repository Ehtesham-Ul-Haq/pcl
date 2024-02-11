import React from 'react'
import '../styles/TeamPage.css'
export default function TeamDetails(props) {

    const handleEditTeam = () => {
        // Handle edit team functionality
        console.log('Edit team details');
      };

  return (
    <div>
      <h3>Team Details</h3>
      
        <div>
          <img src={props.TeamLogo} alt={props.title} />
          <p><strong>Team Name:</strong> {props.title}</p>
          <p><strong>Team Owner:</strong> {props.owner}</p>
          <p><span>Remarks:</span> {props.description}</p>
          {/* Add more team details as needed */}
          <button onClick={handleEditTeam}>Edit Team Details</button>
        </div>
    
    </div>
  )
}
