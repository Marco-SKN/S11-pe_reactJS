import React, { useState } from "react";
import Button from "./Button";

const Card = ({ imageSource, name, price }) => {
  // const [card, setCard] = useState([]);

  return (
    <div className="item">
      <img src={imageSource} alt="" />
      <div className="item-details">
        <div className="item-name">
          <h5>{name}</h5>
          <span>{price}</span>
        </div>
        <div className="add-icon">
          <Button text="+" />
        </div>
      </div>
    </div>
  );
};

export default Card;
