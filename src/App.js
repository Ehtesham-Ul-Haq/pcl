import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import TeamList from './components/TeamList';
import PlayerList from './components/PlayerList';
import TournamentStats from './components/TournamentStats';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles/App.css';
import logoImage from './logo.png'
import TeamPage from './pages/TeamPage';

function App(props) {



  return (
    <>
      <BrowserRouter>
            <div className="App">
                <NavBar logoImage={logoImage} />
              <main>
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/All-Teams" element={<TeamList />} />
                  <Route path="/All-Players/*" element={<PlayerList />} />
                  <Route path="/All-Tournament/*" element={<TournamentStats />} />
                  <Route path="/TeamPage" element={<TeamPage  />} />
                </Routes>

              </main>
              <Footer />
            </div>
      </BrowserRouter>
    </>
  );
}



export default App;
