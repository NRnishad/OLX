import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const user = JSON.parse(localStorage.getItem("user"));

    if (user && user.email === email && user.password === password) {
      
      window.location.href = "/Login";
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input className="input" type="email" id="fname" name="email" />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input className="input" type="password" id="lname" name="password" />
          <br />
          <br />
          <button type="submit">Login</button>
        </form>
        <a>
          <Link to="/signup">Signup</Link>
        </a>
      </div>
    </div>
  );
}

export default Login;
