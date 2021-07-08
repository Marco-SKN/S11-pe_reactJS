import React from "react";
import Button from "./Button";

const Card = ({ item, onAdd }) => {
  return (
    <div className="item">
      <img src={"http://localhost:5000/" + item.image} alt="" />
      <div className="item-details">
        <div className="item-name">
          <h5>{item.name}</h5>
          <span>{`$${item.price.toFixed(2)}`}</span>
        </div>
        <div className="add-icon">
          <Button text="+" onClick={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default Card;
