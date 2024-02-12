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

import GreenStars from './TeamPages/GreenStars';
import OttomanFighters from './TeamPages/OttomanFighters';
import VikriansStars from './TeamPages/VikriansStars';
import SuperGladiators from './TeamPages/SuperGladiators';
import RedSun from './TeamPages/RedSun';
import RexKillers from './TeamPages/RexKillers';
import YoungStars from './TeamPages/YoungStars';
import ConquerorsXI from './TeamPages/ConquerorsXI';
import CricketWarriors from './TeamPages/CricketWarriors';
import StreetKnights from './TeamPages/StreetKnights';
import XIStars from './TeamPages/XIStars';
import TigerReturn from './TeamPages/TigerReturn';
import KingFighters from './TeamPages/KingFighters';
import ShinningStars from './TeamPages/ShinningStars';
import BurnItDown from './TeamPages/BurnItDown';
import ShieldStars from './TeamPages/ShieldStars';
import LittleBash from './TeamPages/LittleBash';
import UnknownStars from './TeamPages/UnknownStars';
import TheChampions from './TeamPages/TheChampions';
import ThundersXI from './TeamPages/ThundersXI';
import HuntersXI from './TeamPages/HuntersXI';
import SuperStarsXI from './TeamPages/SuperStarsXI';
import RoyalPlayers from './TeamPages/RoyalPlayers';
import DominatorsXI from './TeamPages/DominatorsXI';
import HaqFighters from './TeamPages/HaqFighters';
import BlazingWarriors from './TeamPages/BlazingWarriors';
import StrikersXI from './TeamPages/StrikersXI';
import IndianTigers from './TeamPages/IndianTigers';
import EnglishLions from './TeamPages/EnglishLions';
import GorkhaliChampions from './TeamPages/GorkhaliChampions';



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

                  <Route path="/GreenStars" element={<GreenStars />} />
                  <Route path="/OttomanFighters" element={<OttomanFighters />} />
                  <Route path="/VikriansStars" element={<VikriansStars />} />
                  <Route path="/SuperGladiators" element={<SuperGladiators />} />
                  <Route path="/RedSun" element={<RedSun />} />
                  <Route path="/RexKillers" element={<RexKillers />} />
                  <Route path="/YoungStars" element={<YoungStars />} />
                  <Route path="/ConquerorsXI" element={<ConquerorsXI />} />
                  <Route path="/CricketWarriors" element={<CricketWarriors />} />
                  <Route path="/StreetKnights" element={<StreetKnights />} />
                  <Route path="/XIStars" element={<XIStars />} />
                  <Route path="/TigerReturn" element={<TigerReturn />} />
                  <Route path="/KingFighters" element={<KingFighters />} />
                  <Route path="/ShinningStars" element={<ShinningStars />} />
                  <Route path="/BurnItDown" element={<BurnItDown />} />
                  <Route path="/ShieldStars" element={<ShieldStars />} />
                  <Route path="/LittleBash" element={<LittleBash />} />
                  <Route path="/UnknownStars" element={<UnknownStars />} />
                  <Route path="/TheChampions" element={<TheChampions />} />
                  <Route path="/ThundersXI" element={<ThundersXI />} />
                  <Route path="/HuntersXI" element={<HuntersXI />} />
                  <Route path="/SuperStarsXI" element={<SuperStarsXI />} />
                  <Route path="/RoyalPlayers" element={<RoyalPlayers />} />
                  <Route path="/DominatorsXI" element={<DominatorsXI />} />
                  <Route path="/HaqFighters" element={<HaqFighters />} />
                  <Route path="/BlazingWarriors" element={<BlazingWarriors />} />
                  <Route path="/StrikersXI" element={<StrikersXI />} />
                  <Route path="/IndianTigers" element={<IndianTigers />} />
                  <Route path="/EnglishLions" element={<EnglishLions />} />
                  <Route path="/GorkhaliChampions" element={<GorkhaliChampions />} />
                </Routes>

              </main>
              <Footer />
            </div>
      </BrowserRouter>
    </>
  );
}



export default App;
