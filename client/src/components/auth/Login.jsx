import { useState } from "react";

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

  //POST INPUTS TO API HERE
  const logUserIn = async () => {};

  // AUTH INFORMATION GOES HERE

  return (
    <div>
      <form
        onSubmit={(e) => {
          //prevent default always happens first, just resets form
          e.preventDefault();
          logUserIn();
          setUsername("");
          setPassword("");
        }}
        id="form"
      >
        <div>
          <h3 id="title"> Please enter your username and password </h3>
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
          <div>
            <input id="checkbox" type="checkbox" />
            remember me
            <button>Submit</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
