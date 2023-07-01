import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaStore, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import { useSelector } from "react-redux";
import { useStateContext } from "../../context/contextProvider";
import axiosClient from "../../axios-client";
import { useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBar = () => {
  const { items } = useSelector((state) => state.cart);
  const amount = items.length;
  const { token, user, setToken, setUser } = useStateContext();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axiosClient
      .get("/user")
      .then(({ data }) => {
        setUser(data);
      })
      .catch((err) => {
        localStorage.removeItem("ACCESS_TOKEN");
        console.log(err);
      });
  }, []);

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onLogout = (e) => {
    console.log('logout');
    e.preventDefault();
    axiosClient
      .post("/logout")
      .then(() => {
        setUser({});
        setToken(null);
      })
      .catch((response) => {
        //handle error
        console.log(response);
      });
  };

  return (
    <nav>
      <div to="/home" className="logo">
        <img src="/FIQ logo.png" alt="logo" />
        <h1>DigitalBlaze</h1>
      </div>
      <ul>
        <li>
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/signup"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Signup
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Login
          </NavLink>
        </li>
      </ul>

      <NavLink to="bag" className="cart-icon-container">
        {({ isActive }) => (
          <>
            <span className="counter">{amount}</span>
            <FaShoppingCart
              className={isActive ? "nav-link active" : "nav-link"}
            />
          </>
        )}
      </NavLink>
      {token && (
        <>
          <div className="profile-avatar" onClick={onToggle}>
            <img src="img/profile-picture.png" alt="" />
          </div>
          <AnimatePresence>
            {toggle && (
              <motion.div
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.1 }}
                exit={{ opacity: 0 }}
                className="popup"
              >
                <div className="popup-item user">
                  <div className="avatar-preview">
                    <img src="img/profile-picture.png" alt="" />
                  </div>
                  <div className="profile-info">
                    <div className="user-name">{user.name}</div>
                    <div classsName="user-email">{user.email}</div>
                  </div>
                </div>
                <div className="popup-item">
                  <div>
                    <button
                      type="button"
                      onClick={(e) => onLogout(e)}
                      className="logout"
                    >
                      Log out
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </nav>
  );
};

export default NavBar;
