import React from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../styles/TeamList.css';

export default function TeamForm(props) {
  return (
    <div>
          <div className="card" >
              <img src={props.TeamPicture} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{props.title.toUpperCase()}</h5>
                <p className="card-text">{props.detail}</p>
                <Link to="/" className="btn btn-success">{props.title} Profile</Link>
              </div>
          </div>   
    </div>
  )
}

TeamForm.propTypes = {
  title : PropTypes.string.isRequired,
  detail : PropTypes.string.isRequired,
  TeamPicture : PropTypes.string.isRequired
}
