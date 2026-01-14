import React from "react";

const CardName = ({ cardName }) => {
    return (
        <div className="absolute top-[25%] left-1/2 -translate-x-1/2 inline-flex bg-gray-100/90 py-2 px-6 rounded-full">
            <p className="font-bold text-xl text-black whitespace-nowrap">
                {cardName}
            </p>
        </div>
    );
};

export default CardName;
