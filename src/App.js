import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import TeamList from './components/TeamList';
import PlayerList from './components/PlayerList';
import TournamentStats from './components/TournamentStats';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import './styles/App.css';
import logoImage from './logo.png';
import ErrorPage from './pages/ErrorPage';
import TeamPage from './pages/TeamPage';
import PlayerPage from './pages/PlayerPage';



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
                  <Route path="/All-Players/*" element={<PlayerList />} />
                  <Route path="/All-Tournament/*" element={<TournamentStats />} />

                  <Route path="/ErrorPage" element={<ErrorPage />} />

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
