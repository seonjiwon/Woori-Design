import { mockCards, mockHistoriesByCard } from "@/data";
import DefaultLayout from "./layouts/DefaultLayout";
import Card from "./components/card/Card";
import MobileLayout from "./layouts/MobileLayout";

function App() {
    const card = mockCards[0];
    return (
        <Card
            selectedCard={card}
            histories={mockHistoriesByCard[card.cardId]}
        />
    );
}
export default App;
