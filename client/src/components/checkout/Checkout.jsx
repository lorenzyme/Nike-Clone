import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegCreditCard } from "react-icons/fa";

const Checkout = ({ cartId }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [credit, setCredit] = useState("");
  const token = window.localStorage.getItem("token");
  const navigate = useNavigate();

  //POST INPUTS TO API HERE
  const checkout = async () => {
    const sendResponse = await fetch(
      "http://localhost:3000/nike/cart/checkout",
      {
        headers: {
          authorization: token,
        },
        body: JSON.stringify({
          cart: cartId,
          cartItems: cartId,
        }),
        method: "POST",
      }
    );
    const sendData = await sendResponse.json();
  };

  const handleClick = () => {
    toast.success("purchase complete!", {
      position: "bottom-right",
    });
    navigate("/");
  };

  // AUTH INFORMATION GOES HERE

  return (
    <>
      <div>
        <button id="cart-button" onClick={() => navigate("/cart")}>
          <AiOutlineShoppingCart />
        </button>
        <br />
        <br />

        <h1 id="title">Checkout</h1>
        <form
          onSubmit={(e) => {
            //prevent default always happens first, just resets form
            e.preventDefault();
            Checkout();
            setEmail("");
            setName("");
            setAddress("");
            setPhone("");
          }}
          id="form"
        >
          <br />
          <br />
          <div>
            <h3 id="title"> Delivery Options </h3>
            <button id="ship-button">
              <FaTruck />
            </button>
            <button id="ship-button">
              <SiHomeassistantcommunitystore />
            </button>
            <h4>Name</h4>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="input-field"
              type="text"
            />
            <h4>Email</h4>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="input-field"
              type="text"
            />
            <h4>Address</h4>
            <input
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              id="input-field"
              type="text"
            />
            <h4>Phone Number</h4>
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              id="input-field"
            />
            <h5>
              <FaRegCreditCard />
            </h5>
            <h4>Credit Card</h4>
            <input
              type="text"
              value={credit}
              onChange={(e) => setCredit(e.target.value)}
              id="input-field"
            />
            <div>
              <button onClick={handleClick} id="auth-button">
                Complete
              </button>
            </div>
          </div>
        </form>
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

export default Checkout;
