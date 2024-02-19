import React, { useRef } from 'react'
import SeasonPageNav from '../components/SeasonPageNav';
import SeasonDetails from '../components/SeasonDetails';
import SeasonRecords from '../components/SeasonRecords';
import SeasonStats from '../components/SeasonStats';
import data from '../data/seasonsData.json'; // Import your seasons data from a JSON file
import ErrorPage from './ErrorPage';
import { useParams } from 'react-router-dom';
import '../styles/TournamentPage.css';


export default function TournamentPage( {match} ) {



  const detailsRef = useRef(null);
  const recordsRef = useRef(null);
  const statsRef = useRef(null);

  const scrollToDetails = () => detailsRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToRecords = () => recordsRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToStats = () => statsRef.current.scrollIntoView({ behavior: 'smooth' });



    const { seasonName } = useParams(); // Access route parameter


  // Find the corresponding player data based on the player name
  const seasonData = data.find(season => season.title === seasonName);

  // If playerData is not found, redirect to an error page
  if (!seasonData) {
    return <ErrorPage to="/ErrorPage" />;
  }



  return (
    <div className='container'>
      <div className="seasonpage-nav">
        <SeasonPageNav title={seasonData.title} scrollToDetails={scrollToDetails} 
                    scrollToRecords={scrollToRecords} 
                    scrollToStats={scrollToStats}  />
      </div>
      <div className="season-data" ref={detailsRef}>
        <SeasonDetails details={seasonData.details} />
      </div>
      <div className="season-records-div" ref={recordsRef}>
        <SeasonRecords records={seasonData.records} />
      </div>
      <div className="season-Stats-div" ref={statsRef}>
        <SeasonStats stats={seasonData.SeasonStats}  title={seasonData.title} />
      </div>
    </div>
  )
}
