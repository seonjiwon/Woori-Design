// src/components/card/Card_Back.jsx
import React, { useState, useMemo } from "react";
import FlipButton from "../ui/FlipButton";
import CardHistoryList from "./CardHistoryList";

const Card_Back = ({ histories, onFlip }) => {
    // [뒷면 전용 상태] App에서 이사 온 상태들입니다.
    const [filterType, setFilterType] = useState("1개월");
    const [isListOpen, setIsListOpen] = useState(false);
    const [monthOffset, setMonthOffset] = useState(0);

    const todayStr = new Date().toISOString().split("T")[0];
    const [customStart, setCustomStart] = useState(todayStr);
    const [customEnd, setCustomEnd] = useState(todayStr);

    // [로직 이사] 날짜 범위 및 월별 리스트 계산
    const { startDate, endDate, dateRangeStr, monthList } = useMemo(() => {
        const now = new Date();
        let start, end;

        if (filterType === "1개월") {
            start = new Date(
                now.getFullYear(),
                now.getMonth() + monthOffset,
                1
            );
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
            `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(
                2,
                "0"
            )}.${String(d.getDate()).padStart(2, "0")}`;

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

    // [로직 이사] 필터링된 히스토리 및 총 사용량 계산
    const filteredData = useMemo(() => {
        return histories
            .filter((h) => {
                const hDate = new Date(h.time);
                return hDate >= startDate && hDate <= endDate;
            })
            .sort((a, b) => new Date(b.time) - new Date(a.time));
    }, [histories, startDate, endDate]);

    const totalUsage = useMemo(() => {
        const total = filteredData.reduce((acc, cur) => acc + cur.price, 0);
        return total.toLocaleString() + "원";
    }, [filteredData]);

    return (
        <div className="relative w-full h-full bg-white rounded-[1.2rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100 font-sans">
            {/* 360도 회전 방지를 위한 e.stopPropagation() 적용 */}
            <FlipButton
                onClick={(e) => {
                    e.stopPropagation();
                    onFlip();
                }}
            />

            <div className="pt-10 pb-4 px-6 border-b border-gray-50 flex flex-col items-center">
                <div className="text-center mb-4">
                    <p className="text-gray-400 text-[11px] font-medium mb-1">
                        이번 달 사용금액
                    </p>
                    <p className="text-gray-900 text-3xl font-extrabold tracking-tight">
                        {totalUsage}
                    </p>
                </div>

                {/* 필터 영역 (레이아웃 밀림 방지 min-h 적용) */}
                <div className="relative w-full min-h-[44px] flex items-center justify-center">
                    {filterType === "1개월" && (
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
                    )}

                    {filterType === "조회설정" && (
                        <div className="flex items-center gap-1 bg-gray-50 px-2 py-1.5 rounded-lg border border-gray-100 animate-in fade-in duration-200">
                            <input
                                type="date"
                                value={customStart}
                                onChange={(e) => setCustomStart(e.target.value)}
                                className="bg-transparent text-gray-700 text-[11px] font-bold tracking-tighter outline-none cursor-pointer"
                            />
                            <span className="text-gray-300 text-[10px] font-bold">
                                ~
                            </span>
                            <input
                                type="date"
                                value={customEnd}
                                onChange={(e) => setCustomEnd(e.target.value)}
                                className="bg-transparent text-gray-700 text-[11px] font-bold tracking-tighter outline-none cursor-pointer"
                            />
                        </div>
                    )}

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
            </div>

            {/* 필터 탭 */}
            <div className="flex border-b border-gray-50 bg-white shrink-0">
                <button
                    onClick={() => {
                        setFilterType("1개월");
                        setIsListOpen(false);
                    }}
                    className={`flex-1 py-4 text-[12px] font-bold transition-all ${
                        filterType === "1개월"
                            ? "text-blue-600 border-b-2 border-blue-600"
                            : "text-gray-300"
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
                            : "text-gray-300"
                    }`}
                >
                    조회설정
                </button>
            </div>

            {/* 리스트 영역 (필터링된 데이터 전달) */}
            <div className="flex-1 overflow-hidden bg-white">
                <CardHistoryList histories={filteredData} />
            </div>

            <div className="py-4 text-[10px] text-gray-300 text-center font-bold tracking-widest bg-gray-50/50 shrink-0 uppercase">
                ShinhanCard Check | Domestic Only
            </div>
        </div>
    );
};

export default Card_Back;
