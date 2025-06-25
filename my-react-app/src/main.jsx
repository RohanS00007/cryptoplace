import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import CoinContextProvider from "./Context/CoinContext.jsx";
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <CoinContextProvider>
      <App />
      <ToastContainer />
    </CoinContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
