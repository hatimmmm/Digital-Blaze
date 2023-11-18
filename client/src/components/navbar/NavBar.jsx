import React, { useEffect, useState } from "react";
import { FaShoppingCart, FaStore, FaHome } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./navBar.css";
import { useSelector } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { AuthData } from "../../setup/auth/AuthWrapper";
import { RenderNav } from "../../routes/routes";

const NavBar = () => {
  const { items } = useSelector((state) => state.cart);
  const amount = items.length;
  // const { token, user, setToken, setUser } = useStateContext();
  const [toggle, setToggle] = useState(false);
  const { user, logout, token } = AuthData()

  const onToggle = () => {
    setToggle(!toggle);
  };

  const onLogout = () => {
    logout()
  };

  return (
    <nav>
      <div to="/home" className="logo">
        <img src="/FIQ logo.png" alt="logo" />
        <h1>DigitalBlaze</h1>
      </div>
      <RenderNav />

      <NavLink to="/bag" className="cart-icon-container">
        {({ isActive }) => (
          <>
            <span className="counter">{amount}</span>
            <FaShoppingCart
              className={isActive ? "nav-link active" : "nav-link"}
            />
          </>
        )}
      </NavLink>
      {token ? (
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
                    <div className="user-name">{user.data.name}</div>
                    <div classsName="user-email">{user.data.email}</div>
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
      ) : (
        <>
          <NavLink to='/login'
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"}
          >
            Login
          </NavLink>
          <NavLink to='/Register'
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }>
            Register
          </NavLink>
        </>)}
    </nav>
  );
};

export default NavBar;
