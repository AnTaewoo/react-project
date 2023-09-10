import styled from "./Card.module.css"

export default function Card(props) {
  return (
    <div className={`${styled.card} ${props.className}`}>
      {props.children}
    </div>
  );
}