import Carousel from "./Carousel";
import SearchBar from "./SearchBar";
import Cart from "./checkout/Cart";
import { useNavigate } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <div id="catagories-bar">
          <button>Men</button>
          <button>Women</button>
          <button>Kids</button>
        </div>

        <div className="secondary-navbar">
          <SearchBar />
          <button id="wishlist-button" onClick={() => navigate('/wishlist')}><FaRegHeart /></button>
          <Cart />
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

        <h1 id="just-do-it">JUST DO IT</h1>
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
