import React from "react";
import "./App.scss";
import Layout from "./Layout/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ResetPassword from "./pages/auth/ResetPassword";
import Contact from "./pages/Contact/Contact";
import Sale from "./pages/Sale/Sale";
import Activate from "./pages/auth/Activate";
import Confirmpass from "./pages/auth/Confirmpass";
import Details from "./pages/Home/Details/Details";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset_password" element={<ResetPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/sale" element={<Sale />} />
          <Route path="/activate" element={<Activate />} />
          <Route path="/resetpasswordconf" element={<Confirmpass />} />
          <Route path="/confirm" element={<Confirmpass />} />
          <Route path="/details" element={<Details />} />
        </Route>
      </Routes>
    </>
  );
};
export default App;
