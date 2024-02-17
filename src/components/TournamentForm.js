import React from 'react'
import '../styles/TournamentList.css';
import { Link } from 'react-router-dom';

export default function TournamentForm( { name, logo } ) {
  return (
    <div>
        <div className="btn"> 

            <img src={logo} className='btn-img' alt={name} /> 


            <h5 className="btn-title">{name.toUpperCase()}</h5>
            <Link to={`/Season/${name}`} className="btn btn-success">Visit {name} Page</Link>             
        </div>   

    </div>
  )
}
