// src/components/card/Card_Back.jsx
const Card_Back = ({ children, totalUsage, onFlip }) => {
  return (
    <div className="relative w-full h-full bg-white rounded-[2rem] shadow-2xl p-6 flex flex-col overflow-hidden">
      {/* 배경 지도 이미지 (사용자님 담당 파트의 디자인 포인트) */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/South_Korea_location_map.svg/1024px-South_Korea_location_map.svg.png')`,
          backgroundSize: "150%",
          backgroundPosition: "center",
        }}
      />

      {/* 1. Reverse 버튼 (상단) */}
      <button
        onClick={onFlip}
        className="absolute top-4 right-4 z-20 w-8 h-8 bg-blue-900 rounded-sm flex items-center justify-center hover:bg-blue-800 transition-colors shadow-lg"
      >
        <span className="text-white text-[10px]">🔄</span>
      </button>

      {/* 2. 총 사용량 섹션 */}
      <div className="relative z-10 w-full bg-blue-900/90 backdrop-blur-sm py-3 rounded-sm mb-4 mt-8 shadow-md">
        <p className="text-white text-center text-sm font-bold tracking-widest leading-none">
          총 사용량 : {totalUsage}
        </p>
      </div>

      {/* 3. 카드 내역 섹션 */}
      <div className="relative z-10 flex-1 bg-blue-900/80 backdrop-blur-sm rounded-sm p-4 overflow-hidden border border-white/10">
        {children}
      </div>

      {/* 하단 텍스트 */}
      <div className="relative z-10 mt-4 text-[9px] text-slate-400 text-center font-medium">
        SHINHANCARD CHECK | DOMESTIC ONLY
      </div>
    </div>
  );
};
export default Card_Back;
