import React from 'react'
import {Link} from 'react-router-dom';
import '../styles/TeamPage.css';

export default function TeamPageNav(props) {
  return (
    <div>
            <h2>{props.title}</h2>
                <nav className="navbar navbar-expand-lg bg-body shadow">
                    <div className="container-fluid">
                        <Link className="navbar-brand h1 me-4" to="/">
                            {props.title} 
                        </Link>    
                    </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link h2" aria-current="page" to="" >Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link h2" aria-current="page" to="#TeamAchievements" >Achievements</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link h2" aria-current="page" to="TeamStats" >Team Stats</Link>
                                </li>
                            </ul>
                        </div>
                   
                </nav>            
    </div>
  )
}
