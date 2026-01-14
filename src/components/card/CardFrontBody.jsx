import React from "react";

const CardFrontBody = ({ handleFlip }) => {
    return (
        <div className="absolute inset-0 backface-hidden">
            <div className="w-full h-full rounded-[1rem] bg-slate-200 relative border-2 border-dashed border-slate-400 shadow-xl overflow-hidden">
                <img
                    src="card.png"
                    alt="카드 이미지"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-white font-bold text-2xl drop-shadow-lg">
                        카드 앞면
                    </p>
                    {/* 필요시 추가 텍스트 */}
                    <p className="text-white/90 text-sm mt-2">
                        부가 설명 텍스트
                    </p>
                    <p></p>
                </div>

                {/* 뒤집기 버튼 (이미 absolute라 수정 불필요) */}
                <button
                    onClick={handleFlip}
                    className="absolute top-4 right-4 bg-blue-900 text-white w-8 h-8 rounded-sm shadow-md flex items-center justify-center z-10"
                >
                    🔄
                </button>
            </div>
        </div>
    );
};

export default CardFrontBody;
