import Home from "../pages/home/Home";
import Signup from "../pages/signup/Signup";
import Login from "../pages/login/Login";
import Bag from "../pages/bag/Bag";
import Products from "../pages/products/Products";

export const nav = [
    {
        name: "Home",
        path: "/",
        element: <Home />,
        isMenu: true,
        isPrivate: false,
    },
    {
        name: "Bag",
        path: "/bag",
        element: <Bag />,
        isMenu: false,
        isPrivate: false,
    },
    {
        name: "Products",
        path: "/products",
        element: <Products />,
        isMenu: true,
        isPrivate: false,
    },
    {
        name: "Register",
        path: "/register",
        element: <Signup />,
        isMenu: false,
        isPrivate: false,
    },
    {
        name: "Login",
        path: "/login",
        element: <Login />,
        isMenu: false,
        isPrivate: false,
    },
    {
        path: "/account",
        name: "Account",
        // element: <Account />,
        isMenu: false,
        isPrivate: true,
    },
];
