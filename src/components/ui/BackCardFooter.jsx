// src/components/ui/BackCardFooter.jsx
import React from "react";

const BackCardFooter = ({ cardInfo }) => {
  if (!cardInfo) return null; // [방어 코드] 데이터가 없으면 에러 내지 않고 숨김

  const paymentText = cardInfo.overseasPayment
    ? `${cardInfo.overseasPayment.toUpperCase()} AVAILABLE`
    : "DOMESTIC ONLY";

  return (
    <footer className="py-4 text-[10px] text-gray-300 text-center font-bold tracking-widest bg-gray-50/50 shrink-0 uppercase">
      {cardInfo.company} {cardInfo.cardType} | {paymentText}
    </footer>
  );
};

export default BackCardFooter;
