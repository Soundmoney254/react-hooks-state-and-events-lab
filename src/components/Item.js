import React, { useState } from "react";

function Item({ name, category }) {
  const [cart, setCart] = useState(false)
  function changeClassname (){
   setCart(!cart)
  }
  const appClass = cart? "in-cart": "cart";
  return (
    <li className={appClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={changeClassname}>Add to Cart</button>
    </li>
  );
}

export default Item;
