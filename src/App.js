import Container from "./components/container/Container";
import NewContainer from "./components/newContainer/NewContainer";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
    {
      id: "e5",
      title: "Fish",
      amount: 120,
      date: new Date(2022, 11, 19),
    },
    {
      id: "e6",
      title: "Macbook",
      amount: 980.23,
      date: new Date(2022, 3, 12),
    },
    {
      id: "e7",
      title: "Paper Cup",
      amount: 23.99,
      date: new Date(2023, 8, 26),
    },
  ]);
  return (
    <div>
      <NewContainer items={items} setItems={setItems} />
      <Container items={items} />
    </div>
  );
}
export default App;
