// src/components/card/Card_Back.jsx
import React from "react";
import FlipButton from "./FlipButton";
const Card_Back = ({
  children,
  totalUsage,
  onFlip,
  filterType,
  setFilterType,
  dateRange,
  isListOpen,
  setIsListOpen,
  monthList,
  setMonthOffset,
  customStart,
  customEnd,
  setCustomStart,
  setCustomEnd,
}) => {
  return (
    <div className="relative w-full h-full bg-white rounded-[1rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100 font-sans">
      {/* Reverse 버튼 */}
      <FlipButton onClick={onFlip} />
      {/* 상단 정보 영역 */}
      <div className="pt-10 pb-4 px-6 border-b border-gray-50 flex flex-col items-center">
        <div className="text-center mb-5">
          <p className="text-gray-400 text-[11px] font-medium mb-1">
            이번 달 사용금액
          </p>
          <p className="text-gray-900 text-3xl font-extrabold tracking-tight">
            {totalUsage}
          </p>
        </div>

        {/* [해결] min-h를 주어 내부 요소가 바뀌어도 아래 버튼 위치가 고정되게 함 */}
        <div className="relative w-full min-h-[40px] flex items-center justify-center">
          {filterType === "1개월" && (
            <div
              onClick={() => setIsListOpen(!isListOpen)}
              className="flex items-center gap-1 cursor-pointer group py-1 px-3 rounded-full hover:bg-gray-50 transition-colors"
            >
              <span className="text-[12px] text-gray-600 font-semibold">
                {dateRange}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-4 h-4 text-gray-300 transition-transform ${
                  isListOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          )}

          {filterType === "조회설정" && (
            <div className="flex items-center gap-2 bg-gray-50 p-1.5 rounded-lg border border-gray-100 animate-in fade-in duration-200">
              <input
                type="date"
                value={customStart}
                onChange={(e) => setCustomStart(e.target.value)}
                className="bg-transparent text-gray-700 text-[10px] outline-none font-bold cursor-pointer"
              />
              <span className="text-gray-300 text-[10px]">~</span>
              <input
                type="date"
                value={customEnd}
                onChange={(e) => setCustomEnd(e.target.value)}
                className="bg-transparent text-gray-700 text-[10px] outline-none font-bold cursor-pointer"
              />
            </div>
          )}

          {/* 드롭다운 (absolute 위치로 아래 탭을 밀지 않음) */}
          {filterType === "1개월" && isListOpen && (
            <div className="absolute top-full mt-1 w-36 bg-white border border-gray-100 rounded-xl shadow-xl z-[150] overflow-hidden">
              {monthList.map((m) => (
                <button
                  key={m.label}
                  onClick={() => setMonthOffset(m.offset)}
                  className="w-full px-4 py-3 text-[11px] text-gray-600 hover:bg-gray-50 hover:text-blue-600 text-center border-b border-gray-50 last:border-0 font-medium transition-colors"
                >
                  {m.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* 중앙 버튼 탭 (위 영역의 높이가 고정되어 있어 이제 밀리지 않음) */}
      <div className="flex border-b border-gray-50 bg-white">
        <button
          onClick={() => {
            setFilterType("1개월");
            setIsListOpen(false);
          }}
          className={`flex-1 py-4 text-[12px] font-bold transition-all ${
            filterType === "1개월"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-300 hover:text-gray-400"
          }`}
        >
          1개월
        </button>
        <button
          onClick={() => {
            setFilterType("조회설정");
            setIsListOpen(false);
          }}
          className={`flex-1 py-4 text-[12px] font-bold transition-all ${
            filterType === "조회설정"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-300 hover:text-gray-400"
          }`}
        >
          조회설정
        </button>
      </div>

      {/* 카드 내역 리스트 영역 */}
      <div className="flex-1 overflow-hidden bg-white">{children}</div>

      {/* 하단 브랜드 텍스트 */}
      <div className="py-4 text-[10px] text-gray-300 text-center font-bold tracking-widest bg-gray-50/50">
        SHINHANCARD CHECK | DOMESTIC ONLY
      </div>
    </div>
  );
};

export default Card_Back;
