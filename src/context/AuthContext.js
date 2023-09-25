import React, { useState } from "react";

const AuthContext = React.createContext({
  isModalOn: false,
  onModal: () => {},
  DUMMY_MEALS: [],
  mealsAmount: [],
  setMealsAmount: () => {},
});

export const AuthContextProvider = (props) => {
  const [isModalOn, setIsModalOn] = useState(false);
  const [mealsAmount,setMealsAmount] = useState([]);
  const DUMMY_MEALS = [
    {
      id: 0,
      name: "Sushi",
      description: "Finest fish and veggies",
      price: 22.99,
    },
    {
      id: 1,
      name: "Schnitzel",
      description: "A german specialty!",
      price: 16.5,
    },
    {
      id: 2,
      name: "Barbecue Burger",
      description: "American, raw, meaty",
      price: 12.99,
    },
    {
      id: 3,
      name: "Green Bowl",
      description: "Healthy...and green...",
      price: 18.99,
    },
  ];

  const changeModalOn = () => {
    setIsModalOn(!isModalOn);
  };

  const changeMealsAmount= (input_amount, id) => {
    let newMealsAmount = [...mealsAmount]
    newMealsAmount[id] = input_amount
    if (input_amount === 0)
      newMealsAmount.splice(id,1)
    setMealsAmount(newMealsAmount)
  }

  return (
    <AuthContext.Provider
      value={{
        isModalOn: isModalOn,
        onModal: changeModalOn,
        DUMMY_MEALS: DUMMY_MEALS,
        mealsAmount: mealsAmount,
        setMealsAmount: changeMealsAmount,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
