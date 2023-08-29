import { useState } from "react";
import "./ItemForm.css";

export default function ItemForm(props) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const changeTitle = (value) => {
    setTitle(value);
  };
  const changeAmount = (value) => {
    setAmount(value);
  };
  const changeDate = (value) => {
    setDate(value);
  };
  const onChange = (name, value) => {
    if (name === "title") changeTitle(value);
    else if (name === "amount") changeAmount(value);
    else changeDate(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const newItems = [...props.items];
    const itemData = {
      id: `e${props.items.length+1}`,
      title: title,
      amount: Number(amount),
      date: new Date(date),
    }
    newItems.unshift(itemData);
    props.setItems(newItems);
    props.Cancle();

    setTitle("");
    setAmount("");
    setDate("");
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="new-item__controls">
        <div className="new-item__control">
          <label>Title </label>
          <input
            name="title"
            type="text"
            value={title}
            onChange={(event) => {
              onChange("title", event.target.value);
            }}
          />
        </div>
        <div className="new-item__control">
          <label>Amount </label>
          <input
            name="amount"
            type="number"
            min="0.01"
            step="0.01"
            value={amount}
            onChange={(event) => {
              onChange("amount", event.target.value);
            }}
          />
        </div>
        <div className="new-item__control">
          <label>date </label>
          <input
            name="date"
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={date}
            onChange={(event) => {
              onChange("date", event.target.value);
            }}
          />
        </div>
      </div>
      <div className="new-item__actions">
        <button onClick={props.Cancle}>Cancle</button>
        <button type="submit">Add Item</button>
      </div>
    </form>
  );
}

// const onSubmit = (event) => {
//   event.preventDefault();
//   let newItems = [...props.items];
//   newItems.push({
//     id: `${"e" + props.items.length}`,
//     title: {title},
//     amount: {amount},
//     date: {date},
//   });
//   props.setItems(newItems);
// };
