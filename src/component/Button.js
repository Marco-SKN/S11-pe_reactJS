import React from "react";
// import Proptypes from "prop-types";

const Button = ({ text, cssClass }) => {
  const onClick = () => {
    console.log("Clicked!");
  };

  return (
    <>
      <button className={cssClass} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

Button.defaultProps = {
  text: "BUTTON HERE",
  cssClass: null,
};

// Button.propTypes = {
//   text: String,
// };

export default Button;
