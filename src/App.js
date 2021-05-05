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
        <Route path="/S11-pe_reactJS" exact component={Home} />
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
