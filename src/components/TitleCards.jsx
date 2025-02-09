import React, { useRef } from "react";
import cards_data from "../assets/cards/Cards_data";


const TitleCards = ({ title }) => {
  const cardsRef = useRef(null);

  // Scroll the card list when the arrow button is clicked
  const scrollCards = (direction) => {
    if (cardsRef.current) {
      cardsRef.current.scrollLeft += direction === "right" ? 240 : -240; // Scroll by 240px (or any other value)
    }
  };

  return (
    <div>
      <h2 className="mb-2 text-xl font-semibold">{title ? title : "Popular on Netflix"}</h2>
      <div
        className="flex gap-2 overflow-x-auto scroll-smooth pb-2   "
        ref={cardsRef}
        style={{ scrollbarWidth: "none" }} // Hide scrollbar for Firefox
      >
        {cards_data.map((card, index) => (
          <div key={index} className="relative flex-none w-[240px] rounded-lg bg-gray-800 p-2 text-center">
            <div className="w-full cursor-pointer overflow-hidden rounded-md ">
              <img src={card.image} alt={card.name} className="  w-full rounded-md transition-transform duration-300 ease-in-out hover:scale-105" />
            </div>
            <p className="absolute bottom-2 right-2 text-sm text-white bg-black/60 px-2 py-1 rounded-md">
              {card.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TitleCards;
