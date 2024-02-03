import React from 'react'
import TeamList from '../components/TeamList';
import TeamForm from '../components/TeamForm';

export default function TeamPage() {
  return (
    <div>
      <h2>Team Page</h2>
      <TeamList />
      <TeamForm />
      {/* Display team details and manage teams */}
    </div>
  )
}
