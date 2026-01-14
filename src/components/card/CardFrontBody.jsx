import React from "react";
import FlipButton from "../ui/FlipButton";
import CardInfo from "../ui/CardInfo";
import CardName from "../ui/CardName";
import CardImg from "../ui/CardImg";
import BadgeList from "./BadgeList";

const CardFrontBody = ({ cardInfo, handleFlip }) => {
    const { cardName, imageUrl, maskedCardNumber, linkedAccount } = cardInfo;

    return (
        <div className="absolute inset-0 backface-hidden" onClick={handleFlip}>
            <div className="w-full h-full rounded-[1rem] bg-slate-200 relative shadow-xl overflow-hidden">
                <CardImg imageUrl={imageUrl} />
                <CardName cardName={cardName} />
                <CardInfo
                    maskedCardNumber={maskedCardNumber}
                    linkedAccount={linkedAccount}
                />
                <BadgeList cardInfo={cardInfo} />

                <FlipButton
                    onClick={(e) => {
                        e.stopPropagation();
                        handleFlip();
                    }}
                />
            </div>
        </div>
    );
};

export default CardFrontBody;
