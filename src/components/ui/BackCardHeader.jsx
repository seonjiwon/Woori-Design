// src/components/ui/BackCardHeader.jsx
import React from "react";

const BackCardHeader = ({
  totalUsage,
  filterType,
  dateRangeStr,
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
    <header className="pt-10 pb-4 px-6 border-b border-gray-50 flex flex-col items-center">
      {/* 금액 표시 영역 */}
      <div className="text-center mb-4">
        <p className="text-gray-400 text-[11px] font-medium mb-1">
          이번 달 사용금액
        </p>
        <p className="text-gray-900 text-3xl font-extrabold tracking-tight">
          {totalUsage}
        </p>
      </div>

      {/* 필터 컨트롤 영역: Card_Back에서 이사 온 코드 */}
      <div className="relative w-full min-h-[44px] flex items-center justify-center">
        {filterType === "1개월" ? (
          <div
            onClick={() => setIsListOpen(!isListOpen)}
            className="flex items-center gap-1 cursor-pointer group py-1.5 px-3 rounded-full hover:bg-gray-50 transition-colors"
          >
            <span className="text-[11px] text-gray-700 font-bold tracking-tighter">
              {dateRangeStr}
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
        ) : (
          <div className="flex items-center gap-1 bg-gray-50 px-2 py-1.5 rounded-lg border border-gray-100 animate-in fade-in duration-200">
            <input
              type="date"
              value={customStart}
              onChange={(e) => setCustomStart(e.target.value)}
              className="bg-transparent text-gray-700 text-[11px] font-bold tracking-tighter outline-none cursor-pointer"
            />
            <span className="text-gray-300 text-[10px] font-bold">~</span>
            <input
              type="date"
              value={customEnd}
              onChange={(e) => setCustomEnd(e.target.value)}
              className="bg-transparent text-gray-700 text-[11px] font-bold tracking-tighter outline-none cursor-pointer"
            />
          </div>
        )}

        {/* 월 선택 드롭다운 */}
        {filterType === "1개월" && isListOpen && (
          <div className="absolute top-full mt-1 w-36 bg-white border border-gray-100 rounded-xl shadow-xl z-[150] overflow-hidden">
            {monthList.map((m) => (
              <button
                key={m.label}
                onClick={() => {
                  setMonthOffset(m.offset);
                  setIsListOpen(false);
                }}
                className="w-full px-4 py-3 text-[11px] text-gray-600 hover:bg-gray-50 hover:text-blue-600 text-center border-b border-gray-50 last:border-0 font-medium"
              >
                {m.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};

export default BackCardHeader;
