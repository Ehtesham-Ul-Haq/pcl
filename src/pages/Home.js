import React from 'react';
import '../styles/Home.css';
import TypedText from '../components/TypedText';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import FeaturedContent from '../components/FeaturedContent';
import TournamentPicture from '../components/img/template image.png'
import NewsAndBlogs from '../components/NewsAndBlogs';



export default function Home() {


    return (
    <div className='container'>
         <h2><span>PCL ! all about&nbsp;</span><TypedText Mind={"Mind"} Planning={"Planning"} Strategy={"Strategy"} /></h2>
        {/* Provide an overview of the tournament */}

          <div className="container">
            <div className="featured-content-container">
              <h2><span>Featured &nbsp;</span>Content</h2>
              <div className='Featured-Home-container'>
                <FeaturedContent heading={"Upcoming Tournament"} TournamentPicture={TournamentPicture} title={"PCL-41"} description={"Come! Participate to the tournament!"} />
                <FeaturedContent heading={"Popular Team"} TournamentPicture={TournamentPicture} title={"Green Stars"} description={"The most Successfull Team of PCL"} />
                <FeaturedContent heading={"Star Player"} TournamentPicture={TournamentPicture} title={"Babar Azam"} description={"The Most Runs Scorer of PCL"} />
              </div>

            </div>
            <AboutUs />
            <NewsAndBlogs TournamentPicture={TournamentPicture} />
            <ContactUs />
          </div>
       
    </div>
  )
}
