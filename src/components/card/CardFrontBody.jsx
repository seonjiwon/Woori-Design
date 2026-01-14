import React from "react";
import FlipButton from "../ui/FlipButton";
import CardBadge from "../ui/CardBadge";
import CardInfo from "../ui/CardInfo";

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
                <div className="absolute top-[25%] left-1/2 -translate-x-1/2 inline-flex bg-gray-100/90 py-2 px-6 rounded-full">
                    <p className="font-bold text-xl text-black whitespace-nowrap">
                        {cardName}
                    </p>
                </div>

                {/* [2] 하단 좌측 - 카드 정보 */}
                <CardInfo
                    maskedCardNumber={maskedCardNumber}
                    linkedAccount={linkedAccount}
                />

                {/* [3] 하단 우측 - 배지(교통/Master) */}
                <div className="absolute bottom-4 right-4 space-y-1.5 flex flex-col items-end">
                    {cardInfo.payon && (
                        <CardBadge icon="/payon.svg" label="후불 교통카드" />
                    )}
                    {cardInfo.overseasPayment && (
                        <CardBadge icon={`/${cardInfo.overseasPayment}.svg`} />
                    )}
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
