import React, { useState } from "react";

function Item({ name, category }) {
  const [Added, setAdded] = useState(false);
  function changeAdded() {
    setAdded(!Added);
  }
  return (
    <li className={Added ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeAdded}>
        {Added ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;