import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function TeamPage() {
  return (
    <BrowserRouter>
      <div className='container'>

        <h2>Team Page</h2>
     
        {/* Display team details and manage teams */}
        <div className="team-data">
            <Routes>
                <Route path="/" exact element={<Home />} />
            </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
