import Button from "../Button/Button";
import Card from "../Card/Card";
import styled from "./ErrorModel.module.css";

export default function ErroModel(props) {
  return (
    <div>
      <div className={styled.backdrop} onClick={props.onClick} />
      <Card className={styled.model}>
        <header>
          <h2>{props.title}</h2>
        </header>
        <div>
          <p>{props.message}</p>
        </div>
        <footer>
          <Button onClick={props.onClick}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}
