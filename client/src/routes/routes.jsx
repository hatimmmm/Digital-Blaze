import { createBrowserRouter, Navigate, Routes, Route, NavLink } from "react-router-dom";
import Bag from "../pages/bag/Bag";
import Products from "../pages/products/Products";
import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import DefaultLayout from "../layouts/DefaultLayout";
import Auth from '../setup/auth/Auth'
import LoginAuth from '../setup/auth/LoginAuth'
import { nav } from "./navigation";
import { AuthData } from "../setup/auth/AuthWrapper";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/bag",
        element: <Auth><Bag /></Auth>,
      },
      {
        path: "/products",
        element: <Products />,
      },
      { path: "/signup", element: <LoginAuth><Signup /></LoginAuth> },
      { path: "/login", element: <LoginAuth><Login /></LoginAuth> },
    ],
  },

]);

export const RenderRoutes = () => {

  const { user, token } = AuthData()

  return (
    <Routes>
      {nav.map((r, i) => {
        if (r.isPrivate && token) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else if (!r.isPrivate) {
          return <Route key={i} path={r.path} element={r.element} />;
        } else return false;
      })}
    </Routes>
  )
}

export const RenderNav = () => {
  const { token } = AuthData()
  const MenuItem = ({ r }) => {

    return (
      <li>
        <NavLink
          to={r.path}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          {r.name}
        </NavLink>
      </li>
    )
  }
  return (
    <ul>
      {nav.map((r, i) => {
        if (!r.isPrivate && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else if (token && r.isMenu) {
          return <MenuItem key={i} r={r} />;
        } else return false;
      })}
    </ul>

  )

}



