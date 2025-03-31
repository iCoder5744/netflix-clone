import React from 'react';
import Navbar from '../components/Navbar.jsx';
import TitleCards from '../components/TitleCards.jsx';
import Footer from '../components/Footer.jsx';
import hero_banner from '../assets/hero_banner.jpg';
import hero_title from '../assets/hero_title.png';
import play_icon from '../assets/play_icon.png';
import info_icon from '../assets/info_icon.png';
import cardsData from '../assets/cards/cardsData.js';

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="relative overflow-hidden">
        <img
          src={hero_banner}
          alt="Hero Banner"
          className="w-full h-screen object-cover"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 75%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 75%)',
          }}
        />
        <div className="absolute flex flex-col gap-y-6 bottom-2 left-4 md:left-10 lg:left-18 w-full">
          <img src={hero_title} alt="Hero Title" className="w-11/12 max-w-[420px]" />
          <p className="max-w-[700px] text-lg  mb-2 pr-6 ">
            Discovering his ties to a secret ancient order, a young man living in modern Istanbul
            embarks on a quest to save the city from an immortal enemy.
          </p>
          <div className="flex gap-3">
            <button className="flex items-center gap-2 px-6 py-3 text-black font-semibold bg-white rounded-md hover:bg-opacity-75">
              <img src={play_icon} alt="Play Icon" className="w-6" />
              Play
            </button>
            <button className="flex items-center gap-2 px-6 py-3 border text-white font-semibold bg-gray-600 rounded-md hover:bg-gray-500">
              <img src={info_icon} alt="Info Icon" className="w-6" />
              More Info
            </button>
          </div>
          <TitleCards title="Blockbuster Movies" movies={cardsData.blockbusterMovies} />
        </div>
      </div>

      {/* Different Categories of Movies */}
      <div className="pl-4 md:pl-10 lg:pl-18">
        <TitleCards title="Only on Netflix" movies={cardsData.netflixOriginals} />
        <TitleCards title="Upcoming" movies={cardsData.upcomingMovies} />
        <TitleCards title="Top Picks for You" movies={cardsData.topPicks} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
