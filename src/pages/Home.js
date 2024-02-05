import React from 'react'
import { Link } from 'react-router-dom';
import '../styles/Home.css';
import TypedText from '../components/TypedText';



export default function Home() {
                          // 1st 13 seasons abhi check krne hai
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


    return (
    <div className='container'>
         <h2>PCL ! all about&nbsp;<TypedText Mind={"Mind"} Planning={"Planning"} Strategy={"Strategy"} /></h2>
        {/* Provide an overview of the tournament */}
        <nav className="navbar navbar-expand-sm team-nav">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse team-nav-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                          <Link className="nav-link dropdown dropdown-split h2" style={{color:'white'}} to="/All-Teams" role="button" aria-expanded="false">
                              Teams
                          </Link>
                          <ul className="dropdown-menu my-dropdown-bg">

                            {teamsArray.map((str, index) => (
                              <li><Link className="dropdown-item my-dropdown-color" style={{borderBottom:'1px solid white'}} key={index} to="/">{str}</Link></li>
                            ))}

                          </ul>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown dropdown-split h2" style={{color:'white'}} to="/All-Players" role="button" aria-expanded="false">
                            Players
                        </Link>
                        <ul className="dropdown-menu my-dropdown-bg">

                          {playersArray.map((str, index) => (
                            <li><Link className="dropdown-item my-dropdown-color" style={{borderBottom:'1px solid white'}} key={index} to="/">{str}</Link></li>
                          ))}

                        </ul>
                    </li>          
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown dropdown-split h2" style={{color:'white'}} to="/All-Tournament" role="button" aria-expanded="false">
                            Seasons
                        </Link>
                        <ul className="dropdown-menu my-dropdown-bg">

                          {SeasonsArray.map((str, index) => (
                            <li><Link className="dropdown-item my-dropdown-color" style={{borderBottom:'1px solid white'}} key={index} to="/">Season {str}</Link></li>
                          ))}

                        </ul>
                    </li>          
          
                </ul>
                </div>
            </div>
        </nav>
    </div>
  )
}
