import { useState } from "react";
import DefaultLayout from "./layouts/DefaultLayout";
import Card_Back from "./components/card/Card_Back";
import CardFrontBody from "./components/card/CardFrontBody";
import CardHistoryList from "./component/card/CardHistoryList";

const dummyHistories = [
  {
    id: 1,
    merchantName: "스타벅스 강남점",
    time: "2026-01-14 09:12",
    price: 5800,
    type: "PAYMENT",
  },
  {
    id: 2,
    merchantName: "쿠팡",
    time: "2026-01-13 22:41",
    price: 32900,
    type: "PAYMENT",
  },
  {
    id: 3,
    merchantName: "버스 교통카드",
    time: "2026-01-13 08:03",
    price: 1450,
    type: "TRANSPORT",
  },
  {
    id: 4,
    merchantName: "네이버페이",
    time: "2026-01-12 19:27",
    price: 12000,
    type: "PAYMENT",
  },
  {
    id: 5,
    merchantName: "GS25",
    time: "2026-01-12 00:18",
    price: 4200,
    type: "PAYMENT",
  },
];

function App() {
    // 카드가 뒤집혔는지 상태 관리 (false: 앞면, true: 뒷면)
    const [isFlipped, setIsFlipped] = useState(false);

    // 뒤집기 함수
    const handleFlip = () => setIsFlipped(!isFlipped);

    return (
        <DefaultLayout>
            {/* 3D 원근감을 위한 컨테이너 */}
            <div className="perspective-1000 w-full flex justify-center py-10">
                {/* 실제 뒤집히는 카드 몸체 */}
                <div
                    className={`relative w-[400px] h-[600px] transition-transform duration-700 preserve-3d ${
                        isFlipped ? "rotate-y-180" : ""
                    }`}
                >
                    {/* [1. 카드 앞면] - 팀원 담당 파트가 들어올 곳 */}
                    <CardFrontBody handleFlip={handleFlip}></CardFrontBody>

                    {/* [2. 카드 뒷면] - 사용자님 담당 파트 */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                        <Card_Back totalUsage="1,250,000원" onFlip={handleFlip}>
                            {/* 팀원 작업 예정인 리스트 공간 */}
                            <div className="w-full h-full flex items-center justify-center border border-white/20 rounded-sm">
                                <span className="text-white/50 text-xs">
                                    <CardHistoryList histories={dummyHistories} />
                                </span>
                            </div>
                        </Card_Back>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default App;
