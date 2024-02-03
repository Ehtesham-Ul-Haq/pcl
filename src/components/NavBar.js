import React, { useState } from 'react';
import '../styles/NavBar.css';
import ColorPalette from './ColorPalette.js';
import { Link } from 'react-router-dom';


export default function NavBar(props) {

    const [selectedColor, setSelectedColor] = useState('null');

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    document.body.style.backgroundColor = color;
  };

  return (
    <div>
                
        <nav className="navbar navbar-expand-lg bg-body-secondary">
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
                    <li className="nav-item">
                    <Link className="nav-link h2" aria-current="page" to="/All-Teams">Teams</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link h2" aria-current="page" to="/All-Players">Players</Link>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle dropdown-toggle-split h2" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Tournament
                        </Link>
                        <ul className="dropdown-menu my-dropdown-bg">
                            <li><Link className="dropdown-item my-dropdown-color" to="/">Tournament</Link></li>
                            <li><Link className="dropdown-item my-dropdown-color" to="/">Tournament</Link></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><Link className="dropdown-item my-dropdown-color" to="/All-Tournament">Click to See All</Link></li>
                        </ul>
                    </li>          
                </ul>
                </div>
                <div>
                <ColorPalette colors={['#020527', '#022310', '#320202']} onSelectColor={handleColorSelect} />
                </div>
            </div>
        </nav>            
    </div>
  )
}