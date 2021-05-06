import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <header>
      <div className="top-bar">
        <div className="logo">
          <Link to="/S11-pe_reactJS">
            <em>S11 - pe</em>
          </Link>
        </div>
        <div className="cart-btn">
          <Link to="/S11-pe_reactJS/cart">Cart</Link>
        </div>
        <div className="login-btn">
          <Link to="/S11-pe_reactJS/login">Login</Link>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
