import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { useStateContext } from "../context/contextProvider";

const GuestLayout = () => {
  const { token } = useStateContext();

  // if (token) {
  //   return <Navigate to="/products" />;
  // }
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default GuestLayout;
