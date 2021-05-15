import React from "react";
import Title from "./Title";
import CartItem from "./CartItem";
import CartPrice from "./CartPrice";

const Cart = ({
  cartList,
  updateQuantity,
  subtotal,
  grandTotal,
  promoCode,
  onDelete,
}) => {
  const title = "Promotion";
  const paragraph = (
    <span>
      Refer a friend and both of you will receive a{" "}
      <b>
        <u style={{ color: "var(--primary-color)" }}>S11-pe stock option.</u>
      </b>{" "}
      Sign up now!
      <br />
      <br />
      Use promo code: <b style={{ color: "var(--primary-color)" }}>
        MAY2021
      </b>{" "}
      for 10% discount.
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
            <CartPrice
              subtotal={subtotal}
              grandTotal={grandTotal}
              promoCode={promoCode}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
