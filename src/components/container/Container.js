import "./Container.css";
import Card from "./Card";
import ItemsFilter from "../itemFilter/ItemsFilter";
import { useState } from "react";
import ItemList from "./ItemList";
import ItemsChart from "../chart/ItemsChart";

function Container(props) {
  const [filterYear, setFilterYear] = useState("all");

  const setYearData = (value) => {
    setFilterYear(value);
  };

  const filterItems =
    filterYear === "all"
      ? props.items
      : props.items.filter(
          (item) => item.date.getFullYear() === Number(filterYear)
        );

  return (
    <Card className="items">
      <ItemsFilter selected={filterYear} setYearData={setYearData} />
      <ItemsChart items={filterItems} />
      <ItemList filterItems={filterItems} />
    </Card>
  );
}

export default Container;
