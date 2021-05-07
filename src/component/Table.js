import React from "react";
import Card from "./Card";

const Table = ({ itemList }) => {
  return (
    <div className="item-container">
      {console.log(itemList)}
      {itemList.map((item) => (
        <Card
          key={item.id}
          imageSource={item.image.default}
          name={item.name}
          price={item.price}
        />
      ))}
    </div>
  );
};

export default Table;
