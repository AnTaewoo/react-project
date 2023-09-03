import Input from "./Components/Input/Input";
import Result from "./Components/Result/Result";
import Header from "./Components/Header/Header";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const ChangeItemDEscription = (value) => {
    let currentValue = value.CurrentValue;
    let durationTime = value.DurationTime;
    let interestValue = value.InterestValue;
    let yearlySavingValue = value.YearlySavingValue;

    let totalInterest = 0;
    let investedCapital = currentValue;
    let newSetItems = [];

    for (let i = 0; i < durationTime; i++) {
      const year = i + 1;
      let currentInterest = currentValue * (interestValue / 100);
      totalInterest += currentInterest;
      investedCapital += yearlySavingValue;
      currentValue += yearlySavingValue + currentInterest;
      newSetItems.push({
        year: year,
        totalSaving: currentValue.toFixed(2),
        interest: currentInterest.toFixed(2),
        totalInterest: totalInterest.toFixed(2),
        investedCapital: investedCapital.toFixed(2),
      });
    }
    setItems(newSetItems);
  };

  return (
    <div>
      <Header />
      <Input setNewItem={ChangeItemDEscription} />
      {items.length === 0 ? (
        <p
          style={{
            textAlign: "center",
          }}
        >
          No investment calculated yet.
        </p>
      ) : (
        <Result items={items} />
      )}
    </div>
  );
}

export default App;
