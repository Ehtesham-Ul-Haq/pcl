import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import TeamPage from './pages/TeamPage';
import PlayerPage from './pages/PlayerPage';
import TournamentPage from './pages/TournamentPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles/App.css';
import logoImage from './logo.png'

function App() {
  
  

  return (
    <>
      <Router>
            <div className="App">
                <NavBar logoImage={logoImage} />
              <main>
                <Routes>
                  <Route path="/" exact component={Home} />
                  <Route path="/teams/:teamId" component={TeamPage} />
                  <Route path="/players/:playerId" component={PlayerPage} />
                  <Route path="/tournament" component={TournamentPage} />
                </Routes>
              </main>
              <Footer />
            </div>
      </Router>
    </>
  );
}

export default App;
