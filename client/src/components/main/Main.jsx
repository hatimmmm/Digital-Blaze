import "./main.css";
import React from "react";
import { NavLink } from "react-router-dom";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { BsArrowDownShort } from "react-icons/bs";

const Main = () => {
  return (
    <div className="main">
      <div className="hero">
        <h1>Light up your life!</h1>
        <p>
          Digital Blaze offers the latest and greatest in electronics—from
          laptops to phones to gaming consoles and more. Let us help you spark
          up your life with the coolest tech tools around!
        </p>
        <NavLink to="/products" className="nav-btn">
          <button type="button">Browse products</button>
        </NavLink>
      </div>

      <div className="side">
        <img src="/public/white.png" alt="" />
      </div>
      <div id="idk" className="arrow-link">
        <AnchorLink href="#features">
          <BsArrowDownShort className="arrow" />
        </AnchorLink>
      </div>
    </div>
  );
};

export default Main;
