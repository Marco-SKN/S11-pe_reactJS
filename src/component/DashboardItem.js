import React, { useState } from "react";
import Button from "./Button";

const DashboardItem = ({ item, updateItemList, deleteItemList }) => {
  const [name, setName] = useState(item.name);
  const [price, setPrice] = useState(item.price.toFixed(2));

  const saveClicked = () => {
    let changes = { id: item.id, name: name, price: Number(price) };
    console.log(changes);
    updateItemList(changes);
  };

  const deleteClicked = () => {
    let confirmation = window.confirm("Remove item from list?");
    if (confirmation) {
      deleteItemList(item.id);
    }
  };

  return (
    <>
      {console.log(item)}
      <tr>
        <td className="img-container">
          <img src={"http://localhost:5000/" + item.image} alt="" />
        </td>
        <td>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </td>
        <td>
          $
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </td>
        <td style={{}}>
          <Button cssClass="dashboard-btn" text="Save" onClick={saveClicked} />
        </td>
        <td>
          <Button
            cssClass="dashboard-btn"
            text="Delete"
            onClick={deleteClicked}
          />
        </td>
      </tr>
    </>
  );
};

export default DashboardItem;
