import { useContext } from "react";
import styled from "./CartItem.module.css";
import AuthContext from "../../context/AuthContext";

const CartItem = () => {
  const ctx = useContext(AuthContext);

  const addAmount=(id)=>{
    ctx.setMealsAmount(ctx.mealsAmount[id]+1, id)
  }

  const minusAmount=(id)=>{
    ctx.setMealsAmount(ctx.mealsAmount[id]-1, id)
  }

  return (
    <div>
      {ctx.DUMMY_MEALS.map(
        (meal) =>
          ctx.mealsAmount[meal.id] && (
            <div className={styled["cart-item"]} key={meal.id}>
              <div>
                <h2>{meal.name}</h2>
                <div>
                  <p className={styled.price}>${meal.price}</p>
                  <p className={styled.amount}>x{ctx.mealsAmount[meal.id]}</p>
                </div>
              </div>
              <div>
                <button onClick={()=>{minusAmount(meal.id)}}>-</button>
                <button onClick={()=>{addAmount(meal.id)}}>+</button>
              </div>
            </div>
          )
      )}
    </div>
  );
};

export default CartItem;
