import "./NewContainer.css";
import ItemForm from "./ItemForm";
import { useState } from "react";

export default function NewContainer(props) {
  const [isCancle, setIsCancle] = useState(true);

  const ChangeCancle = () => {
    setIsCancle(isCancle ? false : true);
  };

  return (
    <div className="new-item">
      {isCancle ? (
        <button onClick={ChangeCancle}>Add New Items</button>
      ) : (
        <ItemForm 
          items={props.items} 
          setItems={props.setItems}
          Cancle={ChangeCancle} 
        />
      )}
    </div>
  );
}
