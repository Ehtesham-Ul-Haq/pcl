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
  const teamPicArray = [{TeamPicture}];


  return (
    <div className='container'>
      <h2>Team List</h2>
            {/* Displaying a list of teams */}
      <div className='cards-container'>
        <TeamForm TeamPicture={TeamPicture} title={"Green Stars"} detail={"4 Times Winning Team"} />
        <TeamForm TeamPicture={TeamPicture} title={"Ottoman Fighters"} detail={"4 Times Winning Team"} />
        <TeamForm TeamPicture={TeamPicture} title={"Virkians Stars"} detail={"4 Times Winning Team"} />
        <TeamForm TeamPicture={TeamPicture} title={"RedSun"} detail={"4 Times Winning Team"} />
        <TeamForm TeamPicture={TeamPicture} title={"Rex Killer"} detail={"4 Times Winning Team"} />
        <TeamForm TeamPicture={TeamPicture} title={"Cricket Warriors"} detail={"4 Times Winning Team"} />
        <TeamForm TeamPicture={TeamPicture} title={"Young Stars"} detail={"4 Times Winning Team"} />
        <TeamForm TeamPicture={TeamPicture} title={"Super Gladiators"} detail={"4 Times Winning Team"} />
        <TeamForm TeamPicture={TeamPicture} title={"Shield Stars"} detail={"4 Times Winning Team"} />
        <TeamForm TeamPicture={TeamPicture} title={"Street Knights"} detail={"4 Times Winning Team"} />
        <TeamForm TeamPicture={TeamPicture} title={"Little Bash"} detail={"4 Times Winning Team"} />
        <TeamForm TeamPicture={TeamPicture} title={"Conquerors XI"} detail={"4 Times Winning Team"} />
      </div>
      
      

    </div>
  )
}
