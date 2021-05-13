import React from "react";
import Button from "./Button";

const Card = ({ imageSource, name, price, onAdd }) => {
  return (
    <div className="item">
      <img src={imageSource} alt="" />
      <div className="item-details">
        <div className="item-name">
          <h5>{name}</h5>
          <span>{price}</span>
        </div>
        <div className="add-icon">
          <Button text="+" onClick={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default Card;
