import React, {useContext} from "react";
import styled from "./Cart.module.css";
import CartItem from "./CartItem";
import Modal from "../UI/Modal";
import AuthContext from "../../context/AuthContext";

const Cart = (props) => {
  const ctx = useContext(AuthContext);

  const setModalOn = (e) => {
    // e.preventDefault()
    ctx.onModal();
  }
  const getOrder=()=>{
    ctx.mealsAmount.length > 0 && console.log("Ordering...")
  }

  return (
    <Modal className={styled["cart-items"]}>
      {ctx.mealsAmount.length > 0 && <CartItem />}
      {!ctx.mealsAmount.length > 0 && <p>No itme in Cart</p>}
      <div className={styled.total}>
        <p>Total Amount</p>
        <p>${ctx.totalAmount}</p>
      </div>
      <div className={styled.actions}>
        <button onClick={setModalOn}>Close</button>
        <button className={styled.button} onClick={getOrder}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
