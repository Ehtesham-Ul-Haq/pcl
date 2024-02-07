import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Home from './Home'

export default function TeamPage() {
  return (
    <BrowserRouter>
      <div className='container'>
          <Home />
        <h2>Team Page</h2>
     
        {/* Display team details and manage teams */}
        <div className="team-data">
            
        </div>
      </div>
    </BrowserRouter>
  )
}
