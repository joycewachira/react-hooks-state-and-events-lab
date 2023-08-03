import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCatagory] = useState("All");
  const [itemsSelected, setItemsSelected] = useState(items);

  function changeSelectedCatagory(event) {
    setSelectedCatagory(event.target.value);
    setItemsSelected(
      items.filter((item) => {
        if (event.target.value === "All") {
          return true;
        } else {
          return item.category === event.target.value;
        }
      })
    );
  }
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={changeSelectedCatagory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsSelected.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;