import React from "react";
import "./ItemsFilter.css";

const ItemsFilter = (props) => {
  return (
    <div className="items-filter">
      <div className="items-filter__control">
        <label>Filter by year</label>
        <select
          value={props.selected}
          onChange={(event) => {
            event.preventDefault();
            props.setYearData(event.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ItemsFilter;
