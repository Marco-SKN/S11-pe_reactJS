import React from "react";
import { Redirect } from "react-router-dom";
import Title from "./Title";

const Dashboard = ({ authorised, name }) => {
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
        <h1>Hello {name}</h1>
        <h1>Hello {name}</h1>
        <h1>Hello {name}</h1>
        <h1>Hello {name}</h1>
        <h1>Hello {name}</h1>
        <h1>Hello {name}</h1>
      </section>
    </>
  );
};

Dashboard.defaultProps = {
  name: "admin",
};

export default Dashboard;
