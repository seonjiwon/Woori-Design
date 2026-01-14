import React from "react";

const CardImg = ({ imageUrl }) => {
    return (
        <img
            src={imageUrl}
            alt="카드 이미지"
            className="absolute inset-0 w-full h-full object-cover"
        />
    );
};

export default CardImg;
