import React, { useState } from "react";
import Button from "./Button";

const CartItem = ({ item, updateQuantity, onDelete }) => {
  const [Quantity, setQuantity] = useState(item.quantity);

  const upQuantity = (item) => {
    setQuantity(Quantity + 1);
    updateQuantity(item, true);
  };

  const downQuantity = (item) => {
    if (Quantity === 1) {
      if (window.confirm("Remove this item from cart?")) {
        onDelete(item);
      }
    } else {
      setQuantity(Quantity - 1);
      updateQuantity(item, false);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image.default} alt="" />
      <div className="cart-details">
        <h3>{item.name}</h3>
        <span>{item.price}</span>
        <div className="quantity">
          <Button text="-" onClick={downQuantity.bind(this, item)} /> {Quantity}{" "}
          <Button text="+" onClick={upQuantity.bind(this, item)} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
