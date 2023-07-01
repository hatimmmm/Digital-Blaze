import React from "react";
import "./cart.css";
import CartItem from "../cart-item/CartItem";

const Cart = () => {
  return (
    <div id="cart-scroll" className="cart">
      <table>
        <thead>
          <tr>
            <th className="img">IMAGE</th>
            <th className="name">NAME</th>
            <th className="price">PRICE</th>
            <th className="quantity">QUANTITY</th>
            <th className="itemTotal">TOTAL</th>
            {/* <th className="del-btn">ACTION</th> */}
          </tr>
        </thead>
        <tbody>
          <CartItem />
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
