import InputItem from "./InputItem";
import { useState } from "react";

export default function Input(props) {
  const [valueCurrent, setValueCurrent] = useState();
  const [valueYearly, setValueYearly] = useState();
  const [valueInterest, setValueInterest] = useState();
  const [valueDuration, setValueDuration] = useState();

  const InputItemsDescriptions_1 = [
    {
      key: "1",
      htmlFor: "current-savings",
      title: "Current Savings ($)",
      id: "current-savings",
      setValue: setValueCurrent,
    },
    {
      key: "2",
      htmlFor: "yearly-contribution",
      title: "Yearly Savings ($)",
      id: "yearly-contribution",
      setValue: setValueYearly,
    },
  ];
  const InputItemsDescriptions_2 = [
    {
      key: "3",
      htmlFor: "expected-return",
      title: "Expected Interest (%, per year)",
      id: "expected-return",
      setValue: setValueInterest,
    },
    {
      key: "4",
      htmlFor: "duration",
      title: "Investment Duration (years)",
      id: "duration",
      setValue: setValueDuration,
    },
  ];

  const onSubmit = (event) => {
    event.preventDefault();
    props.setNewItem({
      CurrentValue: +valueCurrent,
      YearlySavingValue: +valueYearly,
      InterestValue: +valueInterest,
      DurationTime: +valueDuration,
    });
  };
  const onReset = () => {
    setValueCurrent();
    setValueDuration();
    setValueInterest();
    setValueYearly();
    
    props.setNewItem({
      CurrentValue: null,
      YearlySavingValue: null,
      InterestValue: null,
      DurationTime: null,
    });
  }

  return (
    <form className="form" onSubmit={onSubmit} onReset={onReset}>
      <div className="input-group">
        {InputItemsDescriptions_1.map((ItemDescription) => (
          <InputItem
            key={ItemDescription.key}
            htmlFor={ItemDescription.htmlFor}
            title={ItemDescription.title}
            id={ItemDescription.id}
            setValue={ItemDescription.setValue}
          />
        ))}
      </div>
      <div className="input-group">
        {InputItemsDescriptions_2.map((ItemDescription) => (
          <InputItem
            key={ItemDescription.key}
            htmlFor={ItemDescription.htmlFor}
            title={ItemDescription.title}
            id={ItemDescription.id}
            setValue={ItemDescription.setValue}
          />
        ))}
      </div>

      <p className="actions">
        <button type="reset" className="buttonAlt">
          Reset
        </button>
        <button type="submit" className="button">
          Calculate
        </button>
      </p>
    </form>
  );
}
