import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Styles.css";

import Home from "./components/home";
import Signup from "./components/auth/signup";
import Login from "./components/auth/login";
import Checkout from "./components/checkout/checkout";

function App() {
  const location = useLocation();

  return (
    <>
      <div id="container">
        <div id="navbar">
          <Link to="/home" id="home-link">
            Home
          </Link>
          <Link to="/login" id="login-link">
            Login
          </Link>
          <Link to="/signup" id="join-link">
            Join Us
          </Link>
          <Link to="/checkout" id="checkout-link">
            Checkout
          </Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
