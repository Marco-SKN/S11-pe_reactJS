import React from "react";
import { Link } from "react-router-dom";
// import Proptypes from "prop-types";

const TopBar = ({ cartNum, authorised }) => {
  return (
    <header>
      <div className="top-bar">
        <div className="logo">
          <Link to="/S11-pe_reactJS">
            <em>S11 - pe</em>
          </Link>
        </div>
        <div className="cart-btn">
          <Link to="/S11-pe_reactJS/cart">
            Cart
            <div className={`cart-num ${cartNum ? "" : "none"}`}>{cartNum}</div>
          </Link>
        </div>
        <div className="login-btn">
          {authorised ? (
            <Link to="/S11-pe_reactJS/dashboard">Dashboard</Link>
          ) : (
            <Link to="/S11-pe_reactJS/login">Login</Link>
          )}
        </div>
      </div>
    </header>
  );
};

TopBar.defaultProps = {
  cartNum: 0,
};

export default TopBar;
