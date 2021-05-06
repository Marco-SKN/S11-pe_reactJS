import React from "react";
import kopi from "../images/kopi.png";
import kopi_c from "../images/kopi-c.png";
import kopi_o from "../images/kopi-o.png";
import kopi_o_k from "../images/kopi-o kosong.png";
import kopi_ice from "../images/kopi peng.png";
import teh_ice from "../images/teh peng.png";
import teh from "../images/teh.png";
import teh_c from "../images/teh-c.png";
import teh_o from "../images/teh-o.png";
import teh_o_k from "../images/teh-o kosong.png";
import Card from "./Card";

const Table = () => {
  return (
    <div className="item-container">
      <Card image={kopi} name="Kopi" price="$1.10" />
      <Card image={kopi_c} name="Kopi-C" price="$1.20" />
      <Card image={kopi_o} name="Kopi-O" price="$1.00" />
      <Card image={kopi_o_k} name="Kopi-O Kosong" price="$0.90" />
      <Card image={teh} name="teh" price="$1.10" />
      <Card image={teh_c} name="teh-C" price="$1.20" />
      <Card image={teh_o} name="teh-O" price="$1.00" />
      <Card image={teh_o_k} name="teh-O Kosong" price="$0.90" />
      <Card image={kopi_ice} name="Iced Kopi" price="$1.50" />
      <Card image={teh_ice} name="Iced Teh" price="$1.50" />
    </div>
  );
};

export default Table;
