import React, { useState } from "react";
import { useSelector } from "react-redux";
import RemBtn from "./rem-btn/RemBtn";
import AddBtn from "./add-btn/AddBtn";
import { useEffect } from "react";
import "./product.css";

const Product = ({ product, items, onAdd }) => {
  // const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="card-container">
      <div className="card-body">
        <div className="card-img">
          <img src={product.image} alt={product.name} />
        </div>
      </div>
      <div className="overlay">
        <div className="card-name">
          <p>{product.name}</p>
        </div>
        <div className="price-size">
          <div className={product.available ? "in-stock" : "in-stock unavailable"}>
            {product.available ? "in stock" : "unavailable"}
          </div>
          <div className="card-price">$ {product.price}.00</div>
        </div>
        <div className="btn-con">
          {items.find((i) => i.id === product.id) ? (
            <RemBtn onAdd={onAdd} newItem={product} />
          ) : (
            <AddBtn
              onAdd={onAdd}
              newItem={product}
              classname={!product.available ? "disabled-btn" : "add-to-cart"}
            />
          )}
        </div>
      </div>

    </div>
  );
};

export default Product;
