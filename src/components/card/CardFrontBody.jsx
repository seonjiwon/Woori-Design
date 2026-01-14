import React from "react";
import FlipButton from "../ui/FlipButton";
import CardBadge from "../ui/CardBadge";
import CardInfo from "../ui/CardInfo";
import CardName from "./CardName";

const CardFrontBody = ({ cardInfo, handleFlip }) => {
    const { cardName, imageUrl, maskedCardNumber, linkedAccount } = cardInfo;

    return (
        // [수정] 가장 바깥쪽 부모는 이 div 하나여야 합니다.
        <div className="absolute inset-0 backface-hidden" onClick={handleFlip}>
            <div className="w-full h-full rounded-[1rem] bg-slate-200 relative shadow-xl overflow-hidden">
                {/* 배경 카드 이미지 */}
                <img
                    src={imageUrl}
                    alt="카드 이미지"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                {/* [1] 중앙 상단 - 카드 이름 */}
                <CardName cardName={cardName} />

                {/* [2] 하단 좌측 - 카드 정보 */}
                <CardInfo
                    maskedCardNumber={maskedCardNumber}
                    linkedAccount={linkedAccount}
                />

                {/* [3] 하단 우측 - 배지(교통/Master) */}
                <div className="absolute bottom-4 right-4 space-y-1.5 flex flex-col items-end">
                    {cardInfo.badges.map((badge) => {
                        return (
                            <CardBadge
                                icon={`${badge}.svg`}
                                label={badge === "payon" ? "후불 교통카드" : ""}
                            />
                        );
                    })}
                </div>

                {/* [4] 뒤집기 버튼 - 이벤트 전파 방지 포함 */}
                <FlipButton
                    onClick={(e) => {
                        e.stopPropagation(); // 카드 전체 클릭 이벤트와 겹치지 않게 방지
                        handleFlip();
                    }}
                />
            </div>
        </div>
    );
};

export default CardFrontBody;
