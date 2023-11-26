import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
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
