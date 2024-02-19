import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import TeamList from './components/TeamList';
import PlayerList from './components/PlayerList';
import TournamentPage from './pages/TournamentPage';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles/App.css';
import logoImage from './logo.png';
import ErrorPage from './pages/ErrorPage';
import TeamPage from './pages/TeamPage';
import PlayerPage from './pages/PlayerPage';
import TournamentList from './components/TournamentList';
import RankingPage from './pages/RankingPage';
import ContactUs from './components/ContactUs';



function App() {



  return (
    <>
      <BrowserRouter>
            <div className="App">
                <NavBar logoImage={logoImage} />
              <main>
                <Routes>
                  <Route path="/" exact element={<Home />} />
                  <Route path="/All-Teams" element={<TeamList />} />
                  <Route path="/All-Players" element={<PlayerList />} />
                  <Route path="/All-Seasons-List" element={<TournamentList />} />
                  <Route path="/Top-Rankings" element={<RankingPage />} />
                  <Route path="/Season/:seasonName" element={<TournamentPage />} />

                  <Route path="/ErrorPage" element={<ErrorPage />} />
                  <Route path="/Contact-Us" element={<ContactUs />} />

                  <Route path="/team/:teamName" element={<TeamPage />} />
                  <Route path="/player/:playerName" element={<PlayerPage />} />

                </Routes>

              </main>
              <Footer />
            </div>
      </BrowserRouter>
    </>
  );
}



export default App;
