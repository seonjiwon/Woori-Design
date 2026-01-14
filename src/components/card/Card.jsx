import React, { useState } from "react";
import Card_Back from "./Card_Back";
import CardFrontBody from "./CardFrontBody";

import CardHistoryList from "./CardHistoryList";
const Card = ({ selectedCard, histories }) => {
  const [rotateDeg, setRotateDeg] = useState(0);
  const handleFlip = () => setRotateDeg((prev) => prev + 180);

  return (
    <div className="perspective-1000 w-full flex justify-center py-10">
      <div
        className="relative w-[400px] h-[600px] transition-transform duration-700 preserve-3d"
        style={{ transform: `rotateY(${rotateDeg}deg)` }}
      >
        <CardFrontBody cardInfo={selectedCard} handleFlip={handleFlip} />
        <div className="absolute inset-0 backface-hidden rotate-y-180">
          <Card_Back
            histories={histories}
            onFlip={handleFlip}
            cardInfo={selectedCard}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
