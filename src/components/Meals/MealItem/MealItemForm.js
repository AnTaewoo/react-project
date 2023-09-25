import { useState, useContext } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";
import AuthContext from "../../../context/AuthContext";

const MealItemForm = (props) => {
  const ctx = useContext(AuthContext);
  const [amount, setAmount] = useState(1);

  const onChange = (e) => {
    e.preventDefault();
    setAmount(+e.target.value);
  };

  const onClick = e => {
    e.preventDefault()
    setAmount(+amount)
    ctx.setMealsAmount(+amount, props.id)
  }

  return (
    <form className={classes.form}>
      <Input
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
        }}
        value={+amount}
        onChange={onChange}
      />
      <button onClick={onClick}>+ Add</button>
    </form>
  );
};

export default MealItemForm;
