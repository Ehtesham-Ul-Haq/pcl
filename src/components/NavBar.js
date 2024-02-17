import React, { useState } from 'react';
import '../styles/NavBar.css';
import ColorPalette from './ColorPalette.js';
import { Link } from 'react-router-dom';
import teamData from '../data/teamData.json'; // Importing the team data JSON
import playerData from '../data/playerData.json'; // Importing the Players data JSON
import SeasonData from '../data/seasonsData.json'; // Importing the Season data JSON


export default function NavBar(props) {

    const [selectedColor, setSelectedColor] = useState('null');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color;
    document.body.style.color = '#fff';
    document.querySelectorAll('h5').forEach(heading => {
      heading.style.color = '#fff';
    });
  };


        const RankingsArray = ['Batting Ranking', 'Bowling Ranking', 'All Rounder Ranking'];


  return (
    <div>
                
        <nav className="navbar navbar-expand-lg bg-body shadow">
            <div className="container-fluid">
                <Link className="navbar-brand h1 me-4" to="/">
                    <img src={props.logoImage} alt="Logo" width="50" height="30" className="d-inline-block align-text-top me-4" />
                        Paper Cricket League 
                </Link>    
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link h2" aria-current="page" to="/">Home</Link>
                    </li>

                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown dropdown-split h2" to="/All-Teams" role="button" aria-expanded="false">
                          PCL Teams
                      </Link>
                            <ul className="dropdown-menu my-dropdown-bg">

                              {teamData.map((team, index) => (
                                  <li key={index}><Link className="dropdown-item my-dropdown-color" style={{ borderBottom: '1px solid white' }} to={`/team/${team.title}`}>{team.title}</Link></li>
                              ))}

                            </ul>
                   </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown dropdown-split h2" to="/All-Players" role="button" aria-expanded="false">
                            PCL Players
                        </Link>
                          <ul className="dropdown-menu my-dropdown-bg">

                              {playerData.map((player, index) => (
                                  <li key={index}><Link className="dropdown-item my-dropdown-color" style={{borderBottom:'1px solid white'}} to={`/player/${player.title}`}>{player.title}</Link></li>
                              ))}

                        </ul>
                  </li>          
                  <li className="nav-item dropdown">
                      <Link className="nav-link dropdown dropdown-split h2" to="/All-Seasons-List" role="button" aria-expanded="false">
                          PCL Seasons
                      </Link>
                        <ul className="dropdown-menu my-dropdown-bg">

                            {SeasonData.map((season, index) => (
                                  <li key={index}><Link className="dropdown-item my-dropdown-color" style={{borderBottom:'1px solid white'}} to={`/Season/${season.title}`}>{season.title}</Link></li>
                              ))}

                        </ul>
                  </li>          
                  <li className="nav-item dropdown">
                      <Link className="nav-link dropdown dropdown-split h2" to="/Rankings" role="button" aria-expanded="false">
                          PCL Rankings
                      </Link>
                        <ul className="dropdown-menu my-dropdown-bg">

                          {RankingsArray.map((str, index) => (
                            <li><Link className="dropdown-item my-dropdown-color" style={{borderBottom:'1px solid white'}} key={index} to="/">{str}</Link></li>
                          ))}

                        </ul>
                  </li>          


                  <li className="nav-item">
                    <Link className="nav-link h2" aria-current="page" to="https://github.com/Ehtesham-Ul-Haq">Github</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link h2" aria-current="page" to="/Contact-Us">Contact Us</Link>
                  </li>


                </ul>
          

                  <div>
                    <ColorPalette colors={['#020527', '#022310', '#0A0A0A']} onSelectColor={handleColorSelect} />
                  </div>
                
                </div>
            </div>
        </nav>            
    </div>
  )
}


