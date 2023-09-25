import React, { useContext } from "react";
import styled from "./Modal.module.css";
import AuthContext from "../../context/AuthContext";

const Modal = (props) => {
  const ctx = useContext(AuthContext);

  const onClick=()=>{
    ctx.onModal()
  }

  return (
    <React.Fragment>
      <div onClick={onClick} className={styled.backdrop}></div>
      <div className={`${styled.modal} ${props.className}`}>
        {props.children}
      </div>
    </React.Fragment>
  );
};

export default Modal;
