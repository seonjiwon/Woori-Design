import React from "react";

const CardBadge = ({ icon }) => {
    return (
        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded shadow-md border border-white/50 flex items-center justify-center relative">
            <img
                src={icon}
                alt="교통카드"
                className="w-full h-full object-contain"
            />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-black text-[9px] font-bold whitespace-nowrap">
                후불 교통카드
            </p>
        </div>
    );
};

export default CardBadge;
