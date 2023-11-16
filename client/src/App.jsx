import { Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch, } from "react-redux";
import { storeUser } from "./app/users/users";
import axios from 'axios'
import "./Styles.css";


import Home from "./components/Home";
import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Checkout from "./components/checkout/Checkout";
import Products from "./components/Products";
import SingleItem from "./components/SingleItem";
// import Logout from "./components/Logout";

function App() {

const user = useSelector((state) => state.users);
const dispatch = useDispatch()
const navigate = useNavigate()

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

    navigate('/home');
  }
};
stayedLoggedIn();
}, []);

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

          </Link>
        </div>
        <div id="main-section">
          <Routes>
            {user ? (
            <>
              <Route path='/home' element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/single:id" element={<SingleItem />} />
              <Route path='/all' element={<Products />} />
              {/* <button onClick={ Logout }>Logout</button> */}
            </>
            ) :
            (
            <>
              <Route path='/home' element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
            </>
           )}  
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;