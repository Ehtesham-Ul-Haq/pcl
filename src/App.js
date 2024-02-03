import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TeamPage from './pages/TeamPage';
import PlayerPage from './pages/PlayerPage';
import TournamentPage from './pages/TournamentPage';
import './styles/App.css';

function App() {
  return (
    <>
      <Router>
            <div className="App">
              <header>
                <nav>
                  <div>
                  <h1>Paper Cricket League</h1>
                  <div><img src="" alt="" /></div>
                  </div>
                </nav>
              </header>
              <main>
                <Routes>
                  <Route path="/" exact component={Home} />
                  <Route path="/teams/:teamId" component={TeamPage} />
                  <Route path="/players/:playerId" component={PlayerPage} />
                  <Route path="/tournament" component={TournamentPage} />
                </Routes>
              </main>
              <footer>
                <p>&copy; 2024 Cricket Tournament Manager</p>
              </footer>
            </div>
      </Router>
    </>
  );
}

export default App;
