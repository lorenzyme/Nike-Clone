import Carousel from "./Carousel";
import SearchBar from "./SearchBar";
import { useNavigate, Routes, Route, Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";

import Mens from "./products/Mens";
import Womens from "./products/Womens";
import Kids from "./products/Kids";
import Cart from "./checkout/Cart";

const Home = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <div id="catagories-bar">
          <Routes>
            <Route path='/mens' element={<Mens />}/>
            <Route path='/womens' element={<Womens />}/>
            <Route path='/kids' element={<Kids />}/>
            <Route path='/cart' element={<Cart />}/>
          </Routes>
          <Link to='/mens' id='mens-button-link'>
            <button>
              Men
            </button>
          </Link>
          <Link to='/womens' id='womens-button-link'>
            <button>
              Women
            </button>
          </Link>
          <Link to='/kids' id='kids-button-link'>
            <button>
              Kids
            </button>
            </Link>
        </div>
        <button id="cart-button" onClick={() => navigate('/cart')}><AiOutlineShoppingCart /></button>
        <div className="secondary-navbar">
          <SearchBar />
          <button id="wishlist-button" onClick={() => navigate('/wishlist')}><FaRegHeart /></button>

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
