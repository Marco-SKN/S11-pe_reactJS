import React from "react";
import Button from "./Button";

const CartItem = ({ name, price, picture }) => {
  return (
    <div className="cart-item">
      <img src={picture} alt="" />
      <div className="cart-details">
        <h3>{name}</h3>
        <span>{price}</span>
        <div className="quantity">
          <Button text="-" /> 1 <Button text="+" />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
