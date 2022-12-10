import React from "react";
import ReactDOM from "react-dom/client";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import { Login, Registration } from "./modules/account/pages";
import { Main } from "./modules/main/pages";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Main />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
