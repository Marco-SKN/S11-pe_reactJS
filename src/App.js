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
  return (
    <BrowserRouter>
      <TopBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/login" component={Login} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/career" component={Career} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
