import React from "react";
import Card from "./Card";

const Table = ({ itemList, updateCart }) => {
  const onAdd = (item) => {
    updateCart(item);
  };

  return (
    <div className="item-container">
      {itemList.map((item) => (
        <Card key={item.id} item={item} onAdd={onAdd.bind(this, item)} />
      ))}
    </div>
  );
};

export default Table;
