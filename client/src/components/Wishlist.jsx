import { FaGithub } from "react-icons/fa";
import { DiGithubFull } from "react-icons/di";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const Wishlist = () => {
  const [wishlist, setWishlist] = useState([]);
  const location = useLocation();
  const products = useSelector((state) => state.products);
  useEffect(() => {
    const getWishlist = async () => {
      const token = window.localStorage.getItem("token");
      const wishlistResponse = await fetch(
        "http://localhost:3000/nike/wishlistItem/",
        {
          headers: {
            authorization: token,
          },
        }
      );
      const wishlistData = await wishlistResponse.json();
      console.log(wishlistData);
      setWishlist(wishlistData);
    };
    getWishlist();
  }, [location.pathname]);
  return (
    <>
      <div>
        <div id="scroll-container">
          <h1 id="scrolling-text">YOUR NIKE WISHLIST</h1>
        </div>

        <div id="space">
          {wishlist.map((wishlist, i) => {
            return (
              <div key={i}>
                <img
                  id="cart-img"
                  src={products[wishlist?.productId - 1].imgUrl}
                />
                <h4>{products[wishlist?.productId - 1].name}</h4>
                <h4>${products[wishlist?.productId - 1].cost}</h4>
                <h4>{products[wishlist?.productId - 1].color}</h4>
              </div>
            );
          })}
        </div>

        <img
          id="wishlist-banner"
          src="https://s3.nikecdn.com/events-platform/pre-prod/NET_Admin/header/2018-12-31_3008_desktop_uk_nl.jpg"
          alt="product and models displayed with holiday backdrop"
        ></img>
        <h2>YOUR NIKE WISH LIST</h2>
        <br />
        <br />
        <h2>We hope that you make 2024 even better!</h2>
        <h3>
          We'll let you know if you win your wish list, but whatever happens,
          keep showing us what you are capable of! #SHOWYOURGAME
        </h3>
      </div>
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

export default Wishlist;
