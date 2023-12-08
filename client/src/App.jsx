import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { storeUser } from "./app/users/users";
import { toast } from "react-toastify";
import axios from "axios";
import "./Styles.css";

import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Cart from "./components/checkout/Cart";
import Checkout from "./components/checkout/Checkout";
import Wishlist from "./components/Wishlist";
import Search from "./components/Search";
import Mens from "./components/products/Mens";
import Womens from "./components/products/Womens";
import Kids from "./components/products/Kids";
import { allProducts } from "./app/products/products";


function App() {
  const user = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(()=>{
    if (user) {
      dispatch({ type: "STORE_USER", payload: user })}
    else if (location.pathname.startsWith('/search')){
      navigate('/login')
    }

  }, [location.pathname]);

  useEffect(() => {
    const getAllProducts = async () => {
      // const response = await fetch("http://localhost:3000/nike/getAll");
      // const data = await response.json();
      const productResponse = await fetch(
        "http://localhost:3000/nike/products/"
      );
      const productData = await productResponse.json();
      dispatch(allProducts(productData));
    };
    getAllProducts();
  }, [location.pathname]);

  useEffect(() => {
    const stayedLoggedIn = async () => {
      // Checks for token in local storage
      const token = window.localStorage.getItem("token");

      if (token) {
        const userResponse = await axios.get("http://localhost:3000/auth/me", {
          headers: {
            authorization: token,
          },
        });

        const user = userResponse.data;

        dispatch(storeUser(user));
      }
    };
    stayedLoggedIn();
  }, []);

  const Logout = () => {
    window.localStorage.removeItem("token");
    dispatch(storeUser(null));
    toast.success(`${user.username} has been logged out!`, {
      position: "bottom-right",
    });
    location.reload();
  };
  // const testGetWishlist = async () => {
  //   const token = window.localStorage.getItem("token");
  //   const response = await fetch("http://localhost:3000/nike/wishlistItem/", {
  //     headers: {
  //       authorization: token,
  //     },
  //   });
  //   const data = await response.json();
  //   console.log(data);
  // };
  // const testCreation = async () => {
  //   const token = window.localStorage.getItem('token');
  //       const response = await fetch("http://localhost:3000/nike/wishlistItem/new", {
  //           headers: {
  //             authorization: token,
  //             "Content-Type": "application/json"
  //           },
  //           body: JSON.stringify({
  //             productId: 1,
  //           }),
  //           method: 'POST'
  //         });

  //       const data = await response.json();
  //       console.log(data);
  //     };

  return (
    <>
      <div id="container">
        {/* <button onClick={testGetWishlist}>
          Our new button!
        </button> */}
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
          <Link to="/all" id="products-link"></Link>
          {user ? (
            <button id="logout-button" onClick={Logout}>
              Logout
            </button>
          ) : (
            <div></div>
          )}
        </div>
        <div id="main-section">
          <Routes>
            <>
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/cart" element={<Cart />} />
              <Route path='/mens' element={<Mens />}/>
              <Route path='/womens' element={<Womens />}/>
              <Route path='/kids' element={<Kids />}/>
            </>
            {user ? (
              <>
                <Route path="/home/*" element={<Home />} />
                <Route path="/*" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/search/:name" element={<Search />}></Route>
              </>
            ) : (
              <>
                <Route path="/home/*" element={<Home />} />
                <Route path="/*" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/search/:name" element={<Search />}></Route>
              </>
            )}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
