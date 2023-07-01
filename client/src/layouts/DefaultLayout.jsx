import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavBar from "../components/navbar/NavBar";
import { useStateContext } from "../context/contextProvider";

const DefaultLayout = () => {
  const { token, user } = useStateContext();
  if (!token) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
