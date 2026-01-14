import { useState } from "react";
import { mockCards, mockHistoriesByCard } from "@/data";
import DefaultLayout from "./layouts/DefaultLayout";
import Card_Back from "./components/card/Card_Back";
import CardFrontBody from "./components/card/CardFrontBody";
import CardHistoryList from "./components/card/CardHistoryList";

function App() {
    const [selectedCardId, _] = useState(mockCards[0].cardId);
    const selectedCard = mockCards.find(
        (card) => card.cardId === selectedCardId
    );
    const histories = mockHistoriesByCard[selectedCardId] ?? [];
    // [공통] 뺑글뺑글 도는 회전 상태만 부모가 관리합니다.
    const [rotateDeg, setRotateDeg] = useState(0);
    const handleFlip = () => setRotateDeg((prev) => prev + 180);
    return (
        <DefaultLayout>
            <div className="perspective-1000 w-full flex justify-center py-10">
                <div
                    className="relative w-[400px] h-[600px] transition-transform duration-700 preserve-3d"
                    style={{ transform: `rotateY(${rotateDeg}deg)` }}
                >
                    {/* [앞면] */}
                    <CardFrontBody
                        cardInfo={selectedCard}
                        handleFlip={handleFlip}
                    />
                    {/* [뒷면] 필터링에 필요한 원본 데이터(histories)만 전달합니다. */}
                    <div className="absolute inset-0 backface-hidden rotate-y-180">
                        <Card_Back histories={histories} onFlip={handleFlip} />
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}
export default App;
