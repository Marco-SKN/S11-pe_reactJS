import React from "react";
import kopi from "../images/kopi.png";
import Card from "./Card";

const Table = () => {
  return (
    <div className="item-container">
      <Card image={kopi} />
      <Card image={kopi} />
      <Card image={kopi} />
      <Card image={kopi} />
      <Card image={kopi} />
      <Card image={kopi} />
    </div>
  );
};

export default Table;
