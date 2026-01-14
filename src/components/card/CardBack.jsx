// src/components/card/Card_Back.jsx
import React, { useState, useMemo } from "react";
import FlipButton from "../ui/FlipButton";
import CardHistoryList from "./CardHistoryList";
import BackCardHeader from "../ui/BackCardHeader";
import BackCardFooter from "../ui/BackCardFooter";

const Card_Back = ({ histories, onFlip, cardInfo }) => {
  const [filterType, setFilterType] = useState("1개월");
  const [isListOpen, setIsListOpen] = useState(false);
  const [monthOffset, setMonthOffset] = useState(0);

  const todayStr = new Date().toISOString().split("T")[0];
  const [customStart, setCustomStart] = useState(todayStr);
  const [customEnd, setCustomEnd] = useState(todayStr);

  // [에러 해결 지점] 변수명을 명확히 매칭했습니다.
  const { startDate, endDate, dateRangeStr, monthList } = useMemo(() => {
    const now = new Date();
    let start, end; // 여기는 start, end 입니다.

    if (filterType === "1개월") {
      start = new Date(now.getFullYear(), now.getMonth() + monthOffset, 1);
      end = new Date(
        now.getFullYear(),
        now.getMonth() + monthOffset + 1,
        0,
        23,
        59,
        59
      );
    } else {
      start = new Date(customStart);
      start.setHours(0, 0, 0, 0);
      end = new Date(customEnd);
      end.setHours(23, 59, 59, 999);
    }

    const format = (d) =>
      `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
        d.getDate()
      ).padStart(2, "0")}`;

    const mList = Array.from({ length: 6 }, (_, i) => {
      const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
      return {
        label: `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(
          2,
          "0"
        )}`,
        offset: -i,
      };
    });

    // [중요] return 할 때 startDate: start 와 같이 이름을 정확히 매핑해야 합니다.
    return {
      startDate: start,
      endDate: end,
      dateRangeStr: `${format(start)} ~ ${format(end)}`,
      monthList: mList,
    };
  }, [filterType, monthOffset, customStart, customEnd]);

  const filteredData = useMemo(() => {
    // 위에서 구조 분해 할당으로 받아온 startDate, endDate를 사용합니다.
    return histories
      .filter((h) => {
        const hDate = new Date(h.time);
        return hDate >= startDate && hDate <= endDate;
      })
      .sort((a, b) => new Date(b.time) - new Date(a.time));
  }, [histories, startDate, endDate]);

  const totalUsageAmount = useMemo(
    () =>
      filteredData.reduce((acc, cur) => acc + cur.price, 0).toLocaleString() +
      "원",
    [filteredData]
  );

  return (
    <div className="relative w-full h-full bg-white rounded-[1.2rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100 font-sans">
      <FlipButton
        onClick={(e) => {
          e.stopPropagation();
          onFlip();
        }}
      />
      <BackCardHeader
        totalUsage={totalUsageAmount}
        filterType={filterType}
        dateRangeStr={dateRangeStr}
        isListOpen={isListOpen}
        setIsListOpen={setIsListOpen}
        monthList={monthList}
        setMonthOffset={setMonthOffset}
        customStart={customStart}
        customEnd={customEnd}
        setCustomStart={setCustomStart}
        setCustomEnd={setCustomEnd}
      />

      <nav className="flex border-b border-gray-50 bg-white shrink-0">
        {["1개월", "조회설정"].map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setFilterType(tab);
              setIsListOpen(false);
            }}
            className={`flex-1 py-4 text-[12px] font-bold ${
              filterType === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-300"
            }`}
          >
            {tab}
          </button>
        ))}
      </nav>

      <main className="flex-1 overflow-hidden bg-white">
        <CardHistoryList histories={filteredData} />
      </main>

      <BackCardFooter cardInfo={cardInfo} />
    </div>
  );
};

export default Card_Back;
