import React from "react";

const TopBar = () => {
  return (
    <>
      <div class="top-bar">
        <div class="logo">
          <a href="index.html">
            <em>S11 - pe</em>
          </a>
        </div>
        <div class="cart-btn">
          <a href="cart.html">Cart</a>
        </div>
        <div class="login-btn">
          <a href="login.html">Login</a>
        </div>
      </div>
    </>
  );
};

export default TopBar;
