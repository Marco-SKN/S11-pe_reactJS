import React from "react";
import kopi from "../images/kopi.png";

const Table = () => {
  return (
    <div>
      <p>
        <img src={kopi} /> Kopi-o <br /> $5
      </p>

      <button>BUY</button>
    </div>
  );
};

export default Table;
