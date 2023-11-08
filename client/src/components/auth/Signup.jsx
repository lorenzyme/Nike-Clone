import { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  //POST INPUTS TO API HERE
  const createUser = async () => {};

  // AUTH INFORMATION GOES HERE

  return (
    <div>
      <h1 id="title">Let's Get Started!</h1>
      <form
        onSubmit={(e) => {
          //prevent default always happens first, just resets form
          e.preventDefault();
          createUser();
          setEmail("");
          setName("");
          setUsername("");
          setPassword("");

          // const newUser = () =>{post request}
          // newUser();
        }}
        id="form"
      >
        <div>
          <h1 id="title"> Enter User Details Below </h1>
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="input-field"
            type="text"
          />
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="input-field"
          />
          Agree To Terms & Conditions
          <div>
            <input id="checkbox" type="checkbox" />
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
