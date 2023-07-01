import { createBrowserRouter, Navigate } from "react-router-dom";
import Bag from "../pages/bag/Bag";
import Products from "../pages/products/Products";
import Home from "../pages/home/Home";
import GuestLayout from "../layouts/GuestLayout";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import DefaultLayout from "../layouts/DefaultLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/bag",
        element: <Bag />,
      },
      {
        path: "/products",
        element: <Products />,
      },
    ],
  },
  {
    path: "/",
    element: <GuestLayout />,
    children: [
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      {
        path: "/home",
        element: <Home />,
      },
    ],
  },
]);

export default router;
