import CardHistoryList from "./component/card/CardHistoryList";
import DefaultLayout from "./layouts/DefaultLayout";

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
  return (
    <>
      <DefaultLayout>
        <CardHistoryList histories={dummyHistories} />
      </DefaultLayout>
    </>
  );
}

export default App;
