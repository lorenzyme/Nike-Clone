import { useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { storeUser } from "../../app/users/users";


const Signup = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    register(username, password, email, name);
  };

  // const passLength = () => {
  //   if (password.length < 8) {
  //     console.log("Password must be more than 8 characters");
  //     window.alert("Password must be more than 8 characters");
  //   };
  // };

  // AUTH CODE
  const register = async (username, password, email, name) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', 
        {
          username,
          password,
          email,
          name,
        }
      );
  
      const token = response.data;
      // console.log(token); <--- confirms token is being sent to front end (you should see it in the console if it's connected and working/being sent from the backend properly)
  
        window.localStorage.setItem('token', token);
  
        const userResponse = await axios.get('http://localhost:3000/auth/me',
        {
          headers: {
            authorization: token,
          },
        });
  
        const user = userResponse.data;
  
        // console.log(user);
        // Shows all the user details in the console for the frontend/client - (to confirm it works)
  
        dispatch(storeUser(user));
  
        navigate('/home');
  
      } catch (e) {
      console.log(e);
    };
  
    // console.log('Register button clicked');
    // console.log(`Username: ${username}`)
    // console.log(`Password: ${password}`)
  };

  return (
    <div>
      <form
        onSubmit={ onSubmit }
        id="form"
      >
        <div>
          <h3 id="title"> Enter User Details Below </h3>
          <br /><br /><br />
         <h4>Name</h4> 
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="input-field"
            type="text"
          />
         <h4>Email</h4> 
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="input-field"
            type="text"
          />
         <h4>Username</h4> 
          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id="input-field"
            type="text"
          />
          <h4>Password</h4> 
          <input
            placeholder="Password"
            minLength="8"
            type="password"
            value={password}
            size="25"
            onChange={(e) => setPassword(e.target.value)}
            id="input-field"
          />
          <h4>Agree To Terms & Conditions</h4>
          <br />
          <input id="checkbox" type="checkbox" />
          <div>
            <br />
            <button id="auth-button">Sign Up</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;