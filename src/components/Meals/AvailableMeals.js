import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";

const AvailableMeals = () => {
  const mealsList = useContext(AuthContext).DUMMY_MEALS

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {mealsList.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
