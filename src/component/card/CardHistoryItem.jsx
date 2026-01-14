import React from "react";

const CardHistoryItem = ({ history: { merchantName, time, price } }) => {
  return (
    <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
      {/* 왼쪽: 상호명 + 시간 */}
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-900">
          {merchantName}
        </span>
        <span className="text-xs text-gray-500">{time}</span>
      </div>

      {/* 오른쪽: 가격 */}
      <div className="text-sm font-semibold text-gray-900">
        {price.toLocaleString()}원
      </div>
    </div>
  );
};

export default CardHistoryItem;
