// services/api.js

// Simulate an API endpoint for fetching teams
export const fetchTeams = () => {
    return new Promise((resolve) => {
      // Simulate API call delay
      setTimeout(() => {
        const teams = [
          { id: 1, name: 'Team A' },
          { id: 2, name: 'Team B' },
          // Add more teams as needed
        ];
        resolve(teams);
      }, 500);
    });
  };
  
  // Simulate an API endpoint for fetching players of a team
  export const fetchPlayersByTeamId = (teamId) => {
    return new Promise((resolve) => {
      // Simulate API call delay
      setTimeout(() => {
        const players = [
          { id: 101, name: 'Player 1', teamId: 1 },
          { id: 102, name: 'Player 2', teamId: 1 },
          // Add more players as needed
        ];
        const filteredPlayers = players.filter(player => player.teamId === teamId);
        resolve(filteredPlayers);
      }, 500);
    });
  };
  
  // Add more API functions as needed for your application
  