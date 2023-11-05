import { useState } from "react";

const Checkout = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  //POST INPUTS TO API HERE
  const Checkout = async () => {};

  // AUTH INFORMATION GOES HERE

  return (
    <div>
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
        <div>
          <h1 id="title"> Delivery Options </h1>
          <button id="chkout-button">Ship</button>
          <button id="chkout-button">Pick It Up</button>
          Name
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="input-field"
            type="text"
          />
          Email
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="input-field"
            type="text"
          />
          Username
          <input
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            id="input-field"
            type="text"
          />
          Password
          <input
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            id="input-field"
          />
          <div>
            <button id="chkout-button">Complete</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
