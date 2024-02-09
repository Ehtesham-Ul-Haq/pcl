import React, { useState } from 'react';
import '../styles/NavBar.css';
import ColorPalette from './ColorPalette.js';
import { Link } from 'react-router-dom';


export default function NavBar(props) {

    const [selectedColor, setSelectedColor] = useState('null');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color;
    document.body.style.color = '#fff';
  };


        const teamsArray = ['Green Stars', 'Ottoman Fighters', 'Vikrians Stars', 'Super Gladiators', 'RedSun', 'Rex Killers', 'Young Stars', 'Conquerors XI', 'Cricket Warriors',
                            'Street Knights', 'XI Stars', 'Tiger Return', 'King Fighters', 'Shinning Stars', 'Burn It Down', 'Shield Stars', 'Little Bash',
                            'Unknown Stars', 'The Champions', 'Thunders XI', 'Hunters XI', 'Super Stars XI', 'Royal Players', 'Dominators XI', 'Haq Fighters',
                            'Blazing Warriors', 'Strikers XI', 'Indian Tigers', 'English Lions', 'Gorkhali Champions'];


        const playersArray = ['Alex Hales', 'Babar Azam', 'Shaheen Shah', 'Virat Kohli', 'Kane Williamson', 'Joe Root', 'Steve Smith', 'Rohit Sharma',
                            'Ben Stokes', 'David Warner', 'Pat Cummins', 'Quinton de Kock', 'Mitchell Starc', 'Faf du Plessis', 'Hardik Pandya',
                            'Mohammad Rizwan', 'Eoin Morgan', 'Rashid Khan', 'KL Rahul', 'Aaron Finch', 'Tim Southee', 'Shadab Khan', 'Shahid Afridi',
                            'Naseem Shah', 'Imad Wasim', 'Marcus Stoinis', 'Shane Watson', 'Joss Buttler', 'Muhammad Hafeez', 'Usman Khawaja', 'Umar Gul',
                            'Haris Rauf', 'Muhammad Amir', 'Fakhar Zaman', 'Luke Ronchi'  ];


        const SeasonsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
                            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40'];


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

                            {teamsArray.map((str, index) => (
                              <li><Link className="dropdown-item my-dropdown-color" style={{borderBottom:'1px solid white'}} key={index} to="/">{str}</Link></li>
                            ))}

                          </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown dropdown-split h2" to="/All-Players" role="button" aria-expanded="false">
                            PCL Players
                        </Link>
                        <ul className="dropdown-menu my-dropdown-bg">

                          {playersArray.map((str, index) => (
                            <li><Link className="dropdown-item my-dropdown-color" style={{borderBottom:'1px solid white'}} key={index} to="/">{str}</Link></li>
                          ))}

                        </ul>
                    </li>          
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown dropdown-split h2" to="/All-Tournament" role="button" aria-expanded="false">
                            PCL Seasons
                        </Link>
                        <ul className="dropdown-menu my-dropdown-bg">

                          {SeasonsArray.map((str, index) => (
                            <li><Link className="dropdown-item my-dropdown-color" style={{borderBottom:'1px solid white'}} key={index} to="/">Season {str}</Link></li>
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
