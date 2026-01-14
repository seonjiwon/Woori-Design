import React from "react";

const CardInfo = ({ maskedCardNumber, linkedAccount }) => {
    return (
        <div className="absolute bottom-6 left-6">
            <div className="bg-white/90 text-black py-3 px-5 rounded shadow-lg">
                <p className="font-bold text-xs">{maskedCardNumber}</p>
                <p className="font-bold text-xs">
                    연결 계좌 · {linkedAccount.bankName}{" "}
                    {linkedAccount.maskedAccountNumber}
                </p>
            </div>
        </div>
    );
};

export default CardInfo;
