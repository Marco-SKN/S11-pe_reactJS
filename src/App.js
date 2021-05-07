import React from "react";
import TopBar from "./component/TopBar";
import About from "./component/About";
import Career from "./component/Career";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Login from "./component/Login";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  const itemList = [
    {
      id: 1,
      image: require("./images/kopi.png"),
      name: "Kopi",
      price: "$1.10",
    },
    {
      id: 2,
      image: require("./images/kopi-c.png"),
      name: "Kopi-C",
      price: "$1.20",
    },
    {
      id: 3,
      image: require("./images/kopi-o.png"),
      name: "Kopi-O",
      price: "$1.00",
    },
    {
      id: 4,
      image: require("./images/kopi-o kosong.png"),
      name: "Kopi-O Kosong",
      price: "$0.90",
    },
    {
      id: 5,
      image: require("./images/teh.png"),
      name: "Teh",
      price: "$1.10",
    },
    {
      id: 6,
      image: require("./images/teh-c.png"),
      name: "Teh-C",
      price: "$1.20",
    },
    {
      id: 7,
      image: require("./images/teh-o.png"),
      name: "Teh-O",
      price: "$1.00",
    },
    {
      id: 8,
      image: require("./images/teh-o kosong.png"),
      name: "Teh-O Kosong",
      price: "$0.90",
    },
    {
      id: 9,
      image: require("./images/kopi peng.png"),
      name: "Iced Coffee",
      price: "$1.50",
    },
    {
      id: 10,
      image: require("./images/teh peng.png"),
      name: "Iced Tea",
      price: "$1.50",
    },
  ];

  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route
          path="/S11-pe_reactJS"
          exact
          render={(props) => <Home {...props} itemList={itemList} />}
        />
        <Route path="/S11-pe_reactJS/cart" component={Cart} />
        <Route path="/S11-pe_reactJS/login" component={Login} />
        <Route path="/S11-pe_reactJS/about" component={About} />
        <Route path="/S11-pe_reactJS/contact" component={Contact} />
        <Route path="/S11-pe_reactJS/career" component={Career} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
