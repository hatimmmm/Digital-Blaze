import React from "react";
import "./bag.css";
import Cart from "../../components/cart/Cart";
import Total from "../../components/total/Total";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <div className="cart-title">
      <p>Your cart</p>
    </div>
  );
};

const Bag = () => {
  const { items } = useSelector((state) => state.cart);
  if (items.length >= 1) {
    return (
      <div className="bag">
        <Title />
        <Cart />
        <Total />
      </div>
    );
  } else {
    return (
      <div className="bag">
        <Title />
        <Empty />
      </div>
    );
  }
};

export default Bag;
