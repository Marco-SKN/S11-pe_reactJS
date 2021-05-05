import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <div class="top-bar">
      <div class="logo">
        <Link to="/S11-pe_reactJS">
          <em>S11 - pe</em>
        </Link>
      </div>
      <div class="cart-btn">
        <Link to="/S11-pe_reactJS/cart">Cart</Link>
      </div>
      <div class="login-btn">
        <Link to="/S11-pe_reactJS/login">Login</Link>
      </div>
    </div>
  );
};

export default TopBar;
