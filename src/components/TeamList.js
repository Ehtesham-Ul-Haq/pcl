import React from 'react';
import '../styles/TeamList.css';
// import { Link } from 'react-router-dom';
import TeamForm from './TeamForm.js'
import TeamPicture from './img/template image.png'



export default function TeamList() {

  const teamsArray = ['Green Stars', 'Ottoman Fighters', 'Vikrians Stars', 'Super Gladiators', 'RedSun', 'Rex Killers', 'Young Stars', 'Conquerors XI', 'Cricket Warriors',
                      'Street Knights', 'XI Stars', 'Tiger Return', 'King Fighters', 'Shinning Stars', 'Burn It Down', 'Shield Stars', 'Little Bash',
                      'Unknown Stars', 'The Champions', 'Thunders XI', 'Hunters XI', 'Super Stars XI', 'Royal Players', 'Dominators XI', 'Haq Fighters',
                      'Blazing Warriors', 'Strikers XI', 'Indian Tigers', 'English Lions', 'Gorkhali Champions'];

  const teamDetailsArray = ['4 Times Winning Team'];
  const teamPicArray = [TeamPicture];


  return (
    <div className='container'>
      
      <h2>Team <span>List</span></h2>
            {/* Displaying a list of teams */}
      <div className='cards-container'>

         {/* Map over teamsArray and render TeamForm components */}

         {teamsArray.map((team, index) => (
          <TeamForm
            key={team} // Use a unique key for each component
            TeamPicture={teamPicArray[0]} // Pass TeamPicture from the corresponding index in teamPicArray
            title={team} // Pass title from the current item in teamsArray
            detail={teamDetailsArray[0]} // Assuming teamDetailsArray has a single detail for each team
          />
        ))}
      </div>
      
      

    </div>
  )
}
