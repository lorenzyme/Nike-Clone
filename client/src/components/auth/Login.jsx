import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from "react-redux";
import {toast} from "react-toastify"
import { storeUser } from "../../app/users/users";

const Login = () => {

  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()

  const loggedInUser = useSelector((state) => state.user) 

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    toast.info(`eventually we can connect state here to validate login`,
    { position: "bottom-right" });
  } 

  // AUTH CODE
const login = async (username, password) => {
  try {
    const response = await axios.post('http://localhost:3000/auth/login', 
      {
        username,
        password,
      }
    );

    const token = response.data;

    // Shows token in client console - confirms it works
    // console.log(token);

  window.localStorage.setItem('token', token);

  // Get the user
  const userResponse = await axios.get('http://localhost:3000/auth/me',
  {
    headers: {
      authorization: token,
    },
  });

  const user = userResponse.data;

  dispatch(storeUser(user))

  navigate('/home');


  } catch (e) {
    console.log(e);
  };

  // console.log('Login button clicked');
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
          <h3 id="title"> Please enter your username and password </h3>
          <br />
          <h4>Username</h4>
          <input
            placeholder="Username"
            value={ username }
            onChange={(e) => setUsername(e.target.value)}
            type="text"
          />
          <h4>Password</h4>
          <input
            placeholder="Password"
            type="password"
            value={ password }
            onChange={(e) => setPassword(e.target.value)}
          />
          <div>
            <button id="auth-button">Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
