import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Axios } from 'axios';

const Login = () => {

  const axios = new Axios();

  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault();
    login(username, password);
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

  // setUser(user);

  navigate('/home');


  } catch (e) {
    console.log('There was an error logging in');
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
          <input
            placeholder="Username"
            value={ username }
            onChange={(e) => setUsername(e.target.value)}
            id="input-field"
            type="text"
          />
          Password
          <input
            placeholder="Password"
            type="password"
            value={ password }
            onChange={(e) => setPassword(e.target.value)}
            id="input-field"
          />
          <div>
            <input id="checkbox" type="checkbox" />
            Remember me
            <button>Login</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
