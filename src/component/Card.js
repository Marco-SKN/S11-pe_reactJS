import React from "react";

const Card = ({ image, name, price }) => {
  return (
    <div className="item">
      <img src={image} alt="" />
      <div className="item-details">
        <div className="item-name">
          <h5>{name}</h5>
          <span>{price}</span>
        </div>
        <div className="add-icon">
          <button>+</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
