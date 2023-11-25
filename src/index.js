import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./pages/App";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Faqs from "./pages/Faqs";
import Layout from "./Layout";
import { CardCharacter } from "./components/CardCharacter";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/about" element={<About />} />
          <Route path="/faqs" element={<Faqs />} />
          <Route path="characters/:idCharacter" element={<CardCharacter />}/>
        </Route>
          <Route path="*" element={<Navigate replace to={"/"} />} />
      </Routes>
    </BrowserRouter>
    {/* <App /> */}
  </React.StrictMode>
);
