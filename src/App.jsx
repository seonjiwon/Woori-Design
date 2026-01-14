import { useState } from "react";
import { mockCards, mockHistoriesByCard } from "@/data";
import DefaultLayout from "./layouts/DefaultLayout";
import Card from "./components/card/Card";

function App() {
    const [selectedCardId, _] = useState(mockCards[0].cardId);
    const selectedCard = mockCards.find(
        (card) => card.cardId === selectedCardId
    );
    const histories = mockHistoriesByCard[selectedCardId] ?? [];

    return (
        <DefaultLayout>
            <Card selectedCard={selectedCard} histories={histories}></Card>
        </DefaultLayout>
    );
}
export default App;
