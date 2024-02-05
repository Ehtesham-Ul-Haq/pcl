import React from 'react'
import '../styles/PlayerList.css';
import PlayerForm from '../components/PlayerForm';

export default function PlayerList() {
  return (
    <div>
      <h2>Player List</h2>
      {/* Display a list of players */}
      <PlayerForm />
    </div>
  )
}
