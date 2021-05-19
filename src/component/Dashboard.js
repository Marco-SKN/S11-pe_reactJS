import React from "react";
import { Redirect } from "react-router-dom";
import Button from "./Button";
import DashboardItem from "./DashboardItem";
import Title from "./Title";

const Dashboard = ({
  authorised,
  name,
  itemList,
  updateItemList,
  deleteItemList,
  updateAuthorisation,
}) => {
  const logout = () => {
    let confirmation = window.confirm("Logout of current session?");
    if (confirmation) updateAuthorisation(false);
  };

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
      <Button cssClass="logout-btn" text="Logout" onClick={logout} />
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
