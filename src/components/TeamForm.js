import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/TeamList.css';

export default function TeamForm(props) {


  let toValue = '/ErrorPage'; // Default value if no conditions are met


  // Define an array of conditions and their corresponding values
  const conditions = [
    { title: 'Green Stars', value: '/GreenStars' },
    { title: 'Ottoman Fighters', value: '/OttomanFighters' },
    { title: 'Vikrians Stars', value: '/VikriansStars' },
    { title: 'Super Gladiators', value: '/SuperGladiators' },
    { title: 'RedSun', value: '/RedSun' },
    { title: 'Rex Killers', value: '/RexKillers' },
    { title: 'Young Stars', value: '/YoungStars' },
    { title: 'Conquerors XI', value: '/ConquerorsXI' },
    { title: 'Cricket Warriors', value: '/CricketWarriors' },
    { title: 'Street Knights', value: '/StreetKnights' },
    { title: 'XI Stars', value: '/XIStars' },
    { title: 'Tiger Return', value: '/TigerReturn' },
    { title: 'King Fighters', value: '/KingFighters' },
    { title: 'Shinning Stars', value: '/ShinningStars' },
    { title: 'Burn It Down', value: '/BurnItDown' },
    { title: 'Shield Stars', value: '/ShieldStars' },
    { title: 'Little Bash', value: '/LittleBash' },
    { title: 'Unknown Stars', value: '/UnknownStars' },
    { title: 'The Champions', value: '/TheChampions' },
    { title: 'Thunders XI', value: '/ThundersXI' },
    { title: 'Hunters XI', value: '/HuntersXI' },
    { title: 'Super Stars XI', value: '/SuperStarsXI' },
    { title: 'Royal Players', value: '/RoyalPlayers' },
    { title: 'Dominators XI', value: '/DominatorsXI' },
    { title: 'Haq Fighters', value: '/HaqFighters' },
    { title: 'Blazing Warriors', value: '/BlazingWarriors' },
    { title: 'Strikers XI', value: '/StrikersXI' },
    { title: 'Indian Tigers', value: '/IndianTigers' },
    { title: 'English Lions', value: '/EnglishLions' },
    { title: 'Gorkhali Champions', value: '/GorkhaliChampions' },
    // Add more conditions as needed
  ];
  
  // Loop through the conditions array to find the matching title
  for (let i = 0; i < conditions.length; i++) {
    if (props.title === conditions[i].title) {
      toValue = conditions[i].value;
      break; // Exit the loop once a matching title is found
    }
  }



  return (
    <div>
          <div className="btn"> 
                <img src={props.TeamPicture} className='btn-img' alt="" />
                <h5 className="btn-title">{props.title.toUpperCase()}</h5>
                <Link to={toValue} className="btn btn-success">Visit {props.title} Profile</Link>             
          </div>   
    </div>
  )
}

TeamForm.propTypes = {
  title : PropTypes.string.isRequired,
  detail : PropTypes.string.isRequired,
  TeamPicture : PropTypes.string.isRequired
}
