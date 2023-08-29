import ContainerItems from "./ContainerItems";
import "./ItemList.css";

export default function ItemList(props) {
  let itemsContent = <h2 className="items-list__fallback">No items found.</h2>;

  if (props.filterItems.length > 0) {
    itemsContent = props.filterItems.map((item) => (
      <ContainerItems
        key={item.id}
        title={item.title}
        amount={item.amount}
        date={item.date}
        year={props.filterYear}
        className = '{itemsContent}'
      ></ContainerItems>
    ));
  }
  return itemsContent;
}
