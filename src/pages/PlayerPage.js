import React, { useRef } from 'react'
import PlayerPageNav from '../components/PlayerPageNav';
import PlayerDetails from '../components/PlayerDetails';
import PlayerAchievements from '../components/PlayerAchievements';
import PlayerStats from '../components/PlayerStats';
import data from '../data/playerData.json'; // Import your data from a JSON file
import ErrorPage from './ErrorPage';
import { useParams } from 'react-router-dom';
import '../styles/PlayerPage.css';

export default function PlayerPage({ match }) {

  const detailsRef = useRef(null);
  const achievementsRef = useRef(null);
  const statsRef = useRef(null);

  const scrollToDetails = () => detailsRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToAchievements = () => achievementsRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToStats = () => statsRef.current.scrollIntoView({ behavior: 'smooth' });



    const { playerName } = useParams(); // Access route parameter


  // Find the corresponding player data based on the player name
  const playerData = data.find(player => player.title === playerName);

  // If playerData is not found, redirect to an error page
  if (!playerData) {
    return <ErrorPage to="/ErrorPage" />;
  }


  return (
    <div className='container'>
      <div className="playerpage-nav">
        <PlayerPageNav title={playerData.title} scrollToDetails={scrollToDetails} 
                    scrollToAchievements={scrollToAchievements} 
                    scrollToStats={scrollToStats}  />
      </div>
      <div className="player-data" ref={detailsRef}>
        <PlayerDetails details={playerData.details} />
      </div>
      <div className="player-Achievements-div" ref={achievementsRef}>
        <PlayerAchievements achievements={playerData.achievements} />
      </div>
      <div className="player-Stats-div" ref={statsRef}>
        <PlayerStats stats={playerData.stats}  title={playerData.title} />
      </div>
    </div>
  )
}
