import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/TeamList.css';

export default function TeamForm({ name, logo }) {
  return (
    <div>
      <div className="btn"> 

          <img src={logo} className='btn-img' alt={name} /> 
        

        <h5 className="btn-title">{name.toUpperCase()}</h5>
        <Link to={`/team/${name}`} className="btn btn-success">Visit {name} Profile</Link>             
      </div>   
    </div>
  );
}

