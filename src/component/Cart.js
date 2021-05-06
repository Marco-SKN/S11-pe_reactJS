import React from "react";
import Title from "./Title";

const Cart = () => {
  const title = "Promotion";
  const paragraph = (
    <span>
      Refer a friend and both will receive a{" "}
      <b>
        <u style={{ color: "var(--primary-color)" }}>S11-pe stock option.</u>
      </b>
      Sign up now!
    </span>
  );

  return (
    <>
      <Title title={title} paragraph={paragraph} />
    </>
  );
};

export default Cart;
