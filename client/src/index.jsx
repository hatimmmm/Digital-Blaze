import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import { RouterProvider } from "react-router-dom";
import { ContextProvider } from "./context/contextProvider";
import { router } from "./routes/routes";
import { AuthWrapper } from "./setup/auth/AuthWrapper";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthWrapper />
    </BrowserRouter>
  </React.StrictMode>
);
