import React from 'react'
import PlayerList from '../components/PlayerList';
import PlayerForm from '../components/PlayerForm';

export default function PlayerPage() {
  return (
    <div>
        <h2>Player Page</h2>
        <PlayerList />
        <PlayerForm />
        {/* Display player details and manage players */}
    </div>
  )
}
