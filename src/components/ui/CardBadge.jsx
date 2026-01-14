import React from "react";

const CardBadge = ({ icon, label }) => {
    return (
        <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded shadow-md border border-white/50 flex items-center justify-center relative">
            <img src={icon} className="w-full h-full object-contain" />
            <p className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-black text-[9px] font-bold whitespace-nowrap">
                {label}
            </p>
        </div>
    );
};

export default CardBadge;
