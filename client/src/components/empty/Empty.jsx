import React from "react";
import { BsCart4 } from "react-icons/bs";
import "./empty.css";

const Empty = () => {
  return (
    <div className="empty">
      <p>your cart is currently empty</p>
      <BsCart4 className="empty-cart" />
    </div>
  );
};

export default Empty;
