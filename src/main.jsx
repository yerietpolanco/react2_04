import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import APIContext from "./context/APIContext";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <APIContext>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </APIContext>
  </React.StrictMode>
);
