import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/TeamList.css';

export default function TeamForm(props) {


  return (
    <div>
          <div className="btn" > 
                <img src={props.TeamPicture} className='btn-img' alt="" />
                <h5 className="btn-title">{props.title.toUpperCase()}</h5>
                <Link to='/TeamPage' className="btn btn-success">Visit {props.title} Profile</Link>             
          </div>   
    </div>
  )
}

TeamForm.propTypes = {
  title : PropTypes.string.isRequired,
  detail : PropTypes.string.isRequired,
  TeamPicture : PropTypes.string.isRequired
}
