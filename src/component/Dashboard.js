import React from "react";
import { Redirect } from "react-router-dom";

const Dashboard = ({ authorised, name }) => {
  if (!authorised) {
    return (
      <>
        <Redirect to="/S11-pe_reactJS/login" />
      </>
    );
  }
  return (
    <div>
      <h1>Hello {name}</h1>
      <h1>Hello {name}</h1>
      <h1>Hello {name}</h1>
      <h1>Hello {name}</h1>
      <h1>Hello {name}</h1>
      <h1>Hello {name}</h1>
    </div>
  );
};

Dashboard.defaultProps = {
  name: "admin",
};

export default Dashboard;
