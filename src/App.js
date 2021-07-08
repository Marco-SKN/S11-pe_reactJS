import React, { useState, useEffect } from "react";
import TopBar from "./component/TopBar";
import About from "./component/About";
import Career from "./component/Career";
import Cart from "./component/Cart";
import Contact from "./component/Contact";
import Dashboard from "./component/Dashboard";
import Footer from "./component/Footer";
import Home from "./component/Home";
import Login from "./component/Login";

import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  // State for Cart
  const [cartList, setCartList] = useState([]);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [grandTotal, setGrandTotal] = useState(1.9);
  const [discount, setDiscount] = useState(0);

  // State for Login
  const [name, setName] = useState(undefined);
  const [authorised, setAuthorised] = useState(false);

  // State for Dashboard
  const [itemList, setItemList] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    getItemList();
  }, [query]);

  const getItemList = () => {
    fetch(`/itemlist/${query}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setItemList(data);
      });
  };

  const updateQuery = (searchWord) => {
    setQuery(searchWord);
  };

  // Cart function
  const updateCart = (cartItem) => {
    if (cartList.length > 0) {
      console.log("cartlist: ", cartList);
      for (let cartKey of cartList) {
        if (cartKey.id === cartItem.id) {
          cartKey.quantity += 1;
          setTotalQuantity(totalQuantity + 1);
          setSubtotal(subtotal + cartKey.price);
          updateGrandTotal(cartKey.price, true);
          return;
        }
      }
    }
    cartItem.quantity = 1;
    setCartList([...cartList, cartItem]);
    setTotalQuantity(totalQuantity + 1);
    setSubtotal(subtotal + cartItem.price);
    updateGrandTotal(cartItem.price, true);
  };

  const updateQuantity = (cartItem, add) => {
    for (let cartKey of cartList) {
      if (cartKey.id === cartItem.id) {
        if (add) {
          cartKey.quantity += 1;
          setTotalQuantity(totalQuantity + 1);
          setSubtotal(subtotal + cartItem.price);
          updateGrandTotal(cartItem.price, true);
        } else {
          cartKey.quantity -= 1;
          setTotalQuantity(totalQuantity - 1);
          setSubtotal(subtotal - cartItem.price);
          updateGrandTotal(cartItem.price, false);
        }
        return;
      }
    }
  };

  const deleteCartItem = (cartItem) => {
    setCartList(cartList.filter((item) => item.name !== cartItem.name));
    setTotalQuantity(totalQuantity - 1);
    setSubtotal(subtotal - cartItem.price);
    updateGrandTotal(cartItem.price, false);
  };

  const promoCode = (code) => {
    if (code === "MAY2021") {
      setDiscount(0.1 * subtotal);
      setGrandTotal(0.9 * subtotal + 1.9);
    } else {
      setDiscount(0);
      setGrandTotal(subtotal + 1.9);
    }
  };

  const updateGrandTotal = (price, add) => {
    if (!discount && add) {
      setGrandTotal(grandTotal + price);
    } else if (!discount && !add) {
      setGrandTotal(grandTotal - price);
    }

    if (discount && add) {
      setDiscount(discount + price * 0.1);
      setGrandTotal(grandTotal + price * 0.9);
    } else if (discount && !add) {
      setDiscount(discount - price * 0.1);
      setGrandTotal(grandTotal - price * 0.9);
    }
  };

  // Login Authentication
  const updateAuthorisation = (value) => {
    console.log(authorised);
    setAuthorised(value);
  };

  const updateName = (name) => {
    setName(name);
  };

  // Dashboard function
  const updateItemList = (newChanges) => {
    console.log(itemList);
    setItemList(
      itemList.map((item) => {
        if (item.id === newChanges.id) {
          item.name = newChanges.name;
          item.price = newChanges.price;
        }
        return item;
      })
    );
  };

  const deleteItemList = (target) => {
    console.log(target);
    setItemList(itemList.filter((item) => item.id !== target));
  };

  return (
    <BrowserRouter>
      <TopBar cartNum={totalQuantity} authorised={authorised} />
      <Switch>
        <Route path="/S11-pe_reactJS" exact>
          <Home
            itemList={itemList}
            updateCart={updateCart}
            updateQuery={updateQuery}
          />
        </Route>
        <Route path="/S11-pe_reactJS/cart">
          <Cart
            cartList={cartList}
            onDelete={deleteCartItem}
            updateQuantity={updateQuantity}
            subtotal={subtotal}
            grandTotal={grandTotal}
            promoCode={promoCode}
            discount={discount}
          />
        </Route>
        <Route path="/S11-pe_reactJS/login">
          <Login
            updateAuthorisation={updateAuthorisation}
            updateName={updateName}
          />
        </Route>
        <Route path="/S11-pe_reactJS/about" component={About} />
        <Route path="/S11-pe_reactJS/contact" component={Contact} />
        <Route path="/S11-pe_reactJS/career" component={Career} />
        <Route
          path="/S11-pe_reactJS/dashboard"
          component={() => (
            <Dashboard
              authorised={authorised}
              name={name}
              itemList={itemList}
              updateItemList={updateItemList}
              deleteItemList={deleteItemList}
              updateAuthorisation={updateAuthorisation}
            />
          )}
        />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
