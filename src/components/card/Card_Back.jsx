// src/components/card/Card_Back.jsx
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
    <div className="relative w-full h-full bg-white rounded-[2rem] shadow-2xl p-6 flex flex-col overflow-hidden">
      {/* 배경 및 Reverse 버튼 동일 */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url('...')`,
          backgroundSize: "150%",
          backgroundPosition: "center",
        }}
      />
      <button
        onClick={onFlip}
        className="absolute top-4 right-4 z-[100] w-8 h-8 bg-blue-900 rounded-sm flex items-center justify-center text-white text-[10px]"
      >
        🔄
      </button>

      {/* 파란색 박스 영역 */}
      <div className="relative z-10 w-full bg-[#1B5E78] rounded-xl mb-4 mt-8 shadow-md flex flex-col border border-white/20">
        {/* 1. 총 사용 금액 */}
        <div className="pt-6 pb-2 text-center">
          <p className="text-white/70 text-[10px] mb-1">총 사용금액</p>
          <p className="text-white text-xl font-bold tracking-tight">
            {totalUsage}
          </p>
        </div>

        {/* 2. 기간 표시 및 드롭다운 (1개월 모드일 때만 활성화) */}
        <div className="relative px-4 pb-4 flex flex-col items-center">
          <div
            onClick={() => filterType === "1개월" && setIsListOpen(!isListOpen)}
            className={`flex items-center gap-1 px-3 py-1 rounded-full transition-colors ${
              filterType === "1개월" ? "cursor-pointer hover:bg-white/10" : ""
            }`}
          >
            <span className="text-[11px] text-white/90 font-medium">
              {dateRange}
            </span>
            {filterType === "1개월" && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-3 h-3 text-white/70 transition-transform ${
                  isListOpen ? "rotate-180" : ""
                }`}
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </div>

          {/* 개선된 드롭다운 UI: 파란색 테마 적용 및 z-index 상향 */}
          {isListOpen && (
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-32 bg-[#0D3B51] border border-white/20 rounded-lg shadow-2xl z-[150] overflow-hidden">
              {monthList.map((m) => (
                <button
                  key={m.label}
                  onClick={() => setMonthOffset(m.offset)}
                  className="w-full px-4 py-2 text-[10px] text-white/80 hover:bg-blue-800 hover:text-white transition-colors border-b border-white/5 last:border-0"
                >
                  {m.label}
                </button>
              ))}
            </div>
          )}

          {/* 조회설정 시 나타나는 날짜 입력창 */}
          {filterType === "조회설정" && (
            <div className="mt-3 flex items-center gap-2 animate-fadeIn">
              <input
                type="date"
                value={customStart}
                onChange={(e) => setCustomStart(e.target.value)}
                className="bg-blue-950/50 text-white text-[10px] px-2 py-1 rounded border border-white/20 outline-none"
              />
              <span className="text-white/50 text-[10px]">~</span>
              <input
                type="date"
                value={customEnd}
                onChange={(e) => setCustomEnd(e.target.value)}
                className="bg-blue-950/50 text-white text-[10px] px-2 py-1 rounded border border-white/20 outline-none"
              />
            </div>
          )}
        </div>

        {/* 3. 선택 버튼들 */}
        <div className="flex border-t border-white/10">
          <button
            onClick={() => {
              setFilterType("1개월");
              setIsListOpen(false);
            }}
            className={`flex-1 py-3 text-[11px] transition-colors rounded-bl-xl border-r border-white/10 ${
              filterType === "1개월"
                ? "bg-white/10 text-white font-bold"
                : "text-white/40 hover:text-white"
            }`}
          >
            1개월
          </button>
          <button
            onClick={() => {
              setFilterType("조회설정");
              setIsListOpen(false);
            }}
            className={`flex-1 py-3 text-[11px] transition-colors rounded-br-xl ${
              filterType === "조회설정"
                ? "bg-white/10 text-white font-bold"
                : "text-white/40 hover:text-white"
            }`}
          >
            조회설정
          </button>
        </div>
      </div>

      {/* 하단 내역 및 텍스트 동일 */}
      <div className="relative z-10 flex-1 bg-[#0A2E3F]/80 backdrop-blur-sm rounded-sm p-4 overflow-hidden border border-white/5">
        {children}
      </div>
      <div className="mt-4 text-[9px] text-slate-400 text-center font-medium">
        SHINHANCARD CHECK | DOMESTIC ONLY
      </div>
    </div>
  );
};
export default Card_Back;
