import React from "react";

const Card = ({ image }) => {
  return (
    <div className="item">
      <img src={image} />
      <div className="item-details">
        <div className="item-name">
          <h5>Kopi</h5>
          <a>
            <s>$19.99</s>
            <br></br>$1.00
          </a>
        </div>
        <div className="add-icon">
          <a href="#">+</a>
        </div>
      </div>
    </div>
  );
};

export default Card;
