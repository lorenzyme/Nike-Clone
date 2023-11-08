import { Routes, Route, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Styles.css";

import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Checkout from "./components/checkout/Checkout";
import Search from "./components/Search";
import Products from "./components/Products";
import SingleItem from "./components/SingleItem";

function App() {
  const [products, setProducts] = useState({})

  let DATABASE_URL="postgresql://postgres:$hadow10510@localhost:8008/Nike?schema=public"
  
  const location = useLocation();

  useEffect(() => {
    const GetProducts = async () => {
      const response = await fetch(`${DATABASE_URL}/products`);
      const data = await response.json();
      setProducts(data.data.products);
    };
    GetProducts();
  }, [location.pathname]);

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
          <Link to="/all" id="products-link">
            Hello world
          </Link>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/search" element={<Search />} />
            <Route path="/single:id" element={<SingleItem products={products} />} />
            <Route path='/all' element={<Products products={products}/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
