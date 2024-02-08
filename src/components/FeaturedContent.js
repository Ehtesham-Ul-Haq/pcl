import React from 'react'
import '../styles/Home.css';

export default function FeaturedContent(props) {
  return (
    <div className="container">
        <div className="featured-content-container">
            <h3 className="featured-title">{props.heading}</h3>
                <div className="featured-content">
                  
                    <div className="featured-item">
                        <img src={props.TournamentPicture} alt="Featured  1" className="featured-image" />
                        <div className="featured-details">
                            <h3 className="featured-title">{props.title}</h3>
                            <p className="featured-description">{props.description}</p>
                            <button href="/" className="featured-link">{props.title} Profile</button>
                        </div>
                    </div>
                   
                </div>
        </div>
    </div>
  )
}
