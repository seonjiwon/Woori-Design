import { mockCards, mockHistoriesByCard } from "@/data";
import DefaultLayout from "./layouts/DefaultLayout";
import Card from "./components/card/Card";
import MobileLayout from "./layouts/MobileLayout";

function App() {
  return (
    <MobileLayout>
      {mockCards.map((card) => (
        <Card
          selectedCard={card}
          histories={mockHistoriesByCard[card.cardId]}
        />
      ))}
    </MobileLayout>
  );
}
export default App;
