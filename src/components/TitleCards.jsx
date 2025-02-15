import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

const TitleCards = ({ title, movies }) => {
  const cardsRef = useRef(null);
  const navigate = useNavigate();

  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">{title}</h2>
      <div className="flex gap-2 overflow-x-auto scroll-smooth pb-2" ref={cardsRef} style={{ scrollbarWidth: "none" }}>
        {movies.map((movie, index) => (
          <div 
            key={index} 
            className="relative flex-none w-[240px] rounded-lg bg-gray-800 p-2 text-center cursor-pointer"
            onClick={() => navigate(`/player/${movie.videoId}`, { state: movie })}
          >
            <div className="w-full overflow-hidden rounded-md">
              <img 
                src={movie.image} 
                alt={movie.name} 
                className="w-full rounded-md transition-transform duration-300 ease-in-out hover:scale-105"
              />
            </div>
            <p className="absolute bottom-2 right-2 text-sm text-white bg-black/60 px-2 py-1 rounded-md">
              {movie.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
