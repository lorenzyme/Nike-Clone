import { useState } from "react";
import { FaTruck } from "react-icons/fa";
import { SiHomeassistantcommunitystore } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Checkout = ({cartId}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const token = window.localStorage.getItem('token')

  //POST INPUTS TO API HERE
  const checkout = async () => {
    const sendResponse = await fetch('http://localhost:3000/nike/cart/checkout', {
      headers: {
        authorization: token
      },
      body: JSON.stringify({
        cart: cartId,
        cartItems: cartId
      }),
      method: "POST"
    })
    const sendData = await sendResponse.json()
  };


  // AUTH INFORMATION GOES HERE

  return (
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
          <div>
            <button id="auth-button">Complete</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
