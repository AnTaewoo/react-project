import "./ContainerItems.css";
import ContainerDate from "./ContainerDate";
import Card from "./Card";

function Container(props) {
  return (
    <Card className="item">
      <ContainerDate date={props.date} year={props.year} />
      <div className="description">
        <h2>{props.title}</h2>
        <div className="price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default Container;
