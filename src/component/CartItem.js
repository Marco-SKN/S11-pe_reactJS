import React, { useState } from "react";
import Button from "./Button";

const CartItem = ({ item, updateQuantity, onDelete }) => {
  const [quantity, setQuantity] = useState(item.quantity);
  const [quantityPrice, setQuantityPrice] = useState(
    item.price * item.quantity
  );

  const upQuantity = (item) => {
    setQuantity(quantity + 1);
    setQuantityPrice(quantityPrice + item.price);
    updateQuantity(item, true);
  };

  const downQuantity = (item) => {
    if (quantity === 1) {
      if (window.confirm("Remove this item from cart?")) {
        onDelete(item);
      }
    } else {
      setQuantity(quantity - 1);
      setQuantityPrice(quantityPrice - item.price);
      updateQuantity(item, false);
    }
  };

  return (
    <div className="cart-item">
      <img src={item.image.default} alt="" />
      <div className="cart-details">
        <h3>{item.name}</h3>
        <span>{`$${quantityPrice.toFixed(2)}`}</span>
        <div className="quantity">
          <Button text="-" onClick={downQuantity.bind(this, item)} /> {quantity}{" "}
          <Button text="+" onClick={upQuantity.bind(this, item)} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
