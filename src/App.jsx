import { useState, useMemo } from "react";
import { mockCards, mockHistoriesByCard } from "@/data";
import DefaultLayout from "./layouts/DefaultLayout";
import Card_Back from "./components/card/Card_Back";
import CardFrontBody from "./components/card/CardFrontBody";
import CardHistoryList from "./components/card/CardHistoryList";

function App() {
  const [selectedCardId, setSelectedCardId] = useState(mockCards[0].cardId);

  const selectedCard = mockCards.find((card) => card.cardId === selectedCardId);

  const histories = mockHistoriesByCard[selectedCardId] ?? [];

  const [isFlipped, setIsFlipped] = useState(false);
  const [filterType, setFilterType] = useState("1개월");
  const [isListOpen, setIsListOpen] = useState(false);
  const [monthOffset, setMonthOffset] = useState(0);

  // 조회설정을 위한 날짜 상태 (기본값: 오늘 기준)
  const todayStr = new Date().toISOString().split("T")[0];
  const [customStart, setCustomStart] = useState(todayStr);
  const [customEnd, setCustomEnd] = useState(todayStr);

  const { startDate, endDate, dateRangeStr, monthList } = useMemo(() => {
    const now = new Date();
    let start, end;

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
      // 조회설정: 사용자가 입력한 날짜 사용
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

    return {
      startDate: start,
      endDate: end,
      dateRangeStr: `${format(start)} ~ ${format(end)}`,
      monthList: mList,
    };
  }, [filterType, monthOffset, customStart, customEnd]);

  const filteredHistories = useMemo(() => {
    return histories
      .filter((h) => {
        const hDate = new Date(h.time);
        return hDate >= startDate && hDate <= endDate;
      })
      .sort((a, b) => new Date(b.time) - new Date(a.time));
  }, [startDate, endDate]);

  const totalUsageAmount = useMemo(() => {
    const total = filteredHistories.reduce((acc, cur) => acc + cur.price, 0);
    return total.toLocaleString() + "원";
  }, [filteredHistories]);

  return (
    <DefaultLayout>
      <div className="perspective-1000 w-full flex justify-center py-10">
        <div
          className={`relative w-[400px] h-[600px] transition-transform duration-700 preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          <CardFrontBody
            cardInfo={selectedCard}
            handleFlip={() => setIsFlipped(true)}
          />
          <div className="absolute inset-0 backface-hidden rotate-y-180">
            <Card_Back
              totalUsage={totalUsageAmount}
              onFlip={() => setIsFlipped(false)}
              filterType={filterType}
              setFilterType={setFilterType}
              dateRange={dateRangeStr}
              isListOpen={isListOpen}
              setIsListOpen={setIsListOpen}
              monthList={monthList}
              setMonthOffset={(offset) => {
                setMonthOffset(offset);
                setIsListOpen(false);
              }}
              customStart={customStart}
              customEnd={customEnd}
              setCustomStart={setCustomStart}
              setCustomEnd={setCustomEnd}
            >
              <CardHistoryList histories={filteredHistories} />
            </Card_Back>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
export default App;
