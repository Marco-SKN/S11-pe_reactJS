import React from "react";
import Title from "./Title";
import CartItem from "./CartItem";

const Cart = ({ cartList, updateQuantity, onDelete }) => {
  const title = "Promotion";
  const paragraph = (
    <span>
      Refer a friend and both of you will receive a{" "}
      <b>
        <u style={{ color: "var(--primary-color)" }}>S11-pe stock option.</u>
      </b>{" "}
      Sign up now!
    </span>
  );

  return (
    <>
      <Title title={title} paragraph={paragraph} />

      <section>
        <div className="cart">
          <div className="cart-container">
            {console.log(cartList)}
            {cartList.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                item={cartItem}
                onDelete={onDelete}
                updateQuantity={updateQuantity}
              />
            ))}
          </div>
          <div className="cart-price">
            <label>PROMO CODE:</label>
            <div className="promo-code">
              <input type="text" placeholder="Enter promo code" />
              <button>APPLY</button>
            </div>
            <div className="price-row">
              <span>SUBTOTAL:</span>
              <span>$2.10</span>
            </div>
            <div className="price-row">
              <span>SHIPPING:</span>
              <span>$20.00</span>
            </div>
            <div className="price-row">
              <span>
                <b>GRAND TOTAL:</b>
              </span>
              <span>$22.10</span>
            </div>
            <div className="checkout-btn">
              <button>PROCEED TO PAY</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
