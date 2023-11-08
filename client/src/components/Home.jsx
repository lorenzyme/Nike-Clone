import Carousel from "./Carousel";
import { Routes, Route, Link, useLocation } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>
        <div id="catagories-bar">
          <button>Men</button>
          <button>Women</button>
          <button>Kids</button>
        </div>
        <div id="secondaryNav">
        <Link to="/search" id="search-link">
              🔍
          </Link>
              {/* wishlist button goes here */}
              {/* cart button goes here */}
        </div>
        <div id="scroll-container">
          <h1 id="scrolling-text">JUST DO IT.</h1>
        </div>

        <div id="space">
          <h3 id="blank">.</h3><h3 className="coupon">⏰ Flash Sale | Extra 25% Off Select Styles</h3>
          <p className="desc-text"> Sign in and use code <a id="coupon-code">FLASH</a> at checkout</p>
          <br />
        </div>

        <img
          id="home-banner"
          src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1300,c_limit/882bb3b8-7a58-4dd3-9fe3-f36f89e37c18/nike-just-do-it.jpg"
          alt="product and models displayed with holiday backdrop"
        ></img>

        <h1 id="JDI">JUST DO IT</h1>
        <br />
        <br />
        <br />
        <h2>Always Iconic</h2>
      </div>

      <Carousel />

      <div id="footer"></div>
    </>
  );
};

export default Home;
