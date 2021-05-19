import React from "react";
import { Redirect } from "react-router-dom";
import DashboardItem from "./DashboardItem";
import Title from "./Title";

const Dashboard = ({
  authorised,
  name,
  itemList,
  updateItemList,
  deleteItemList,
}) => {
  if (!authorised) {
    return (
      <>
        <Redirect to="/S11-pe_reactJS/login" />
      </>
    );
  }
  return (
    <>
      <Title title={"Dashboard"} paragraph={`Welcome ${name}!`} />
      <section>
        <table>
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {console.log(itemList)}
            {itemList.map((item) => (
              <DashboardItem
                key={item.id}
                item={item}
                updateItemList={updateItemList}
                deleteItemList={deleteItemList}
              />
            ))}
          </tbody>
        </table>
      </section>
    </>
  );
};

Dashboard.defaultProps = {
  name: "admin",
};

export default Dashboard;
