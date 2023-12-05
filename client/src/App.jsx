import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { storeUser } from "./app/users/users";
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import "./Styles.css";


import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Checkout from "./components/checkout/Checkout";
import SingleItem from "./components/SingleItem";
import Wishlist from "./components/Wishlist";
import Search from "./components/Search";
import { allProducts } from "./app/products/products";
import Products from "./components/products/Products";


function App() {

const user = useSelector((state) => state.users);
const dispatch = useDispatch();
const navigate = useNavigate();
const location = useLocation();

useEffect(() => {
  const getAllProducts = async () => {
    const response = await fetch("http://localhost:3000/nike/getAll");
    const data = await response.json();
    // const productResponse = await fetch("http://localhost:3000/nike/products/");
    // const productData = await productResponse.json();
    console.log(productData);
    dispatch(allProducts(data));
  };
  getAllProducts();
}, []);

useEffect(() => {

  const stayedLoggedIn = async () => {
  // Checks for token in local storage
  const token = window.localStorage.getItem('token');

  if (token) {
    const userResponse = await axios.get('http://localhost:3000/auth/me',
    {
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
  window.localStorage.removeItem('token');
  dispatch(storeUser(null));
  location.reload();
  };
  const testGetWishlist = async () => {
        const token = window.localStorage.getItem('token')
        const response = await fetch("http://localhost:3000/nike/wishlistItem/", {
          headers: {
            authorization: token,
          }
        });
        const data = await response.json();
        console.log(data);
      };
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
        <button onClick={testGetWishlist}>
          Our new button!
        </button>
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

          </Link>
          {/* <button onClick={ Logout }>Logout</button> */}
        </div>
        <div id="main-section">
          <Routes>
            <>
              <Route path= "/wishlist" element={<Wishlist />} />     
            </>
            {user ? (
            <>
              <Route path='/home/*' element={<Home />} />
              <Route path="/*" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/single:id" element={<SingleItem />} />
              <Route path='/search:name' element={<Search />}></Route>
              <Route path='/products' element={<Products />} />
            </>
            ) :
            (
            <>
              <Route path='/home/*' element={<Home />} />
              <Route path="/*" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path='/search/:name' element={<Search  />}></Route>
              <Route path='/products' element={<Products />} />
            </>
           )}  
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;