import Carousel from "./Carousel";
import SearchBar from "./SearchBar";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";
import { DiGithubFull } from "react-icons/di";
import { FaGithub } from "react-icons/fa";

import Mens from "./products/Mens";
import Womens from "./products/Womens";
import Kids from "./products/Kids";
import Cart from "./checkout/Cart";

const Home = () => {
  const { cartTotalQuantity } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  return (
    <>
      <div>
        <div id="catagories-bar">
          <Routes>
            <Route path="/mens" element={<Mens />} />
            <Route path="/womens" element={<Womens />} />
            <Route path="/kids" element={<Kids />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Link to="/mens" id="mens-button-link">
            <button className="category-btn">Men</button>
          </Link>
          <Link to="/womens" id="womens-button-link">
            <button className="category-btn">Women</button>
          </Link>
          <Link to="/kids" id="kids-button-link">
            <button className="category-btn">Kids</button>
          </Link>
        </div>
        <button id="cart-button" onClick={() => navigate("/cart")}>
          <AiOutlineShoppingCart />
          {cartTotalQuantity}
        </button>
        <div className="secondary-navbar">
          <SearchBar />
          <button id="wishlist-button" onClick={() => navigate("/wishlist")}>
            <FaRegHeart />
          </button>
        </div>

        <div id="space"></div>
        <h3 id="blank">.</h3>
        <h3 className="coupon">⏰ Flash Sale | Extra 25% Off Select Styles</h3>
        <br />
        <p className="coupon-text">
          Sign in and use code <a id="coupon-code">FLASH</a> at checkout
        </p>
        <br />

        <img
          id="home-banner"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1300,c_limit/882bb3b8-7a58-4dd3-9fe3-f36f89e37c18/nike-just-do-it.jpg"
          alt="product and models displayed with holiday backdrop"
        ></img>

        <div id="scroll-container">
          <h1 id="scrolling-text">JUST DO IT.</h1>
        </div>

        <br />
        <br />
        <br />
        <h2>Always Iconic</h2>
      </div>

      <Carousel />
      <br />
      <br />
      <div id="footer">
        <ul className="social">
          <li>
            <a id="gh-button" href="https://github.com/lorenzyme/Nike-Clone">
              <FaGithub />
              <DiGithubFull />
            </a>
          </li>
        </ul>
        <ul>
          <li className="footer-item">
            <a className="footer-links" href="#">
              Home
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-links" href="#">
              Support
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-links" href="#">
              Team
            </a>
          </li>
          <li className="footer-item">
            <a className="footer-links">Contact</a>
          </li>
        </ul>
        <div id="label-f">
        <h2 id="label-f">FIND A NEARBY STORE</h2>
        <br />
        <h2 id="label-f">BECOME A MEMBER</h2>
        <br />
        <h2 id="label-f">ALREADY A MEMBER</h2>
        <br />
        <h2 id="label-f">SIGNUP FOR EMAIL</h2>
        <br />
        <h2 id="label-f">SEND US FEEDBACK</h2>
        <br />
        <h2 id="label-f">GET HELP</h2>
        <br />
        </div> 
        <br />
        <div id="light-f">
          <h3>Order Status</h3>
          <br />
          <h3>Returns</h3>
          <br />
          <h3>Gifts</h3>
          <br />
          <h3>Careers</h3>
          <br />
        </div>
      </div>
    </>
  );
};

export default Home;