import React, { useRef }  from 'react';
import PropTypes from 'prop-types';
import TeamPageNav from '../components/TeamPageNav';
import TeamDetails from '../components/TeamDetails';
import TeamAchievements from '../components/TeamAchievements';
import TeamStats from '../components/TeamStats';
import data from '../data/teamData.json'; // Import your data from a JSON file
import ErrorPage from './ErrorPage';
import { useParams } from 'react-router-dom';


export default function TeamPage({ match }) {


  const detailsRef = useRef(null);
  const achievementsRef = useRef(null);
  const statsRef = useRef(null);

  const scrollToDetails = () => detailsRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToAchievements = () => achievementsRef.current.scrollIntoView({ behavior: 'smooth' });
  const scrollToStats = () => statsRef.current.scrollIntoView({ behavior: 'smooth' });



    const { teamName } = useParams(); // Access route parameter


  // Find the corresponding team data based on the team name
  const teamData = data.find(team => team.title === teamName);

  // If teamData is not found, redirect to an error page
  if (!teamData) {
    return <ErrorPage to="/ErrorPage" />;
  }



  return (
    <div className='container'>
      <div className="teampage-nav">
        <TeamPageNav title={teamData.title} scrollToDetails={scrollToDetails} 
                    scrollToAchievements={scrollToAchievements} 
                    scrollToStats={scrollToStats}  />
      </div>
      <div className="team-data" ref={detailsRef}>
        <TeamDetails details={teamData.details} />
      </div>
      <div className="Team-Achievements-div" ref={achievementsRef}>
        <TeamAchievements achievements={teamData.achievements} />
      </div>
      <div className="Team-Stats-div" ref={statsRef}>
        <TeamStats stats={teamData.stats} />
      </div>
    </div>
  );
}

TeamPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      teamName: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};
