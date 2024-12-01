import React from 'react';
import { Link } from "react-router-dom";
import Logo from '../../olx-logo.png';
import './Signup.css';

export default function Signup() {
const handleSignup = (e) => {
  e.preventDefault();
  const user = {
    username: e.target.name.value,
    email: e.target.email.value,
    phone: e.target.phone.value,
    password: e.target.password.value,
  };
  localStorage.setItem("user", JSON.stringify(user));
  window.location.href = "/";
};

  return (
    <div>
      <div className="signupParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleSignup}>
          <label htmlFor="fname">Username</label>
          <br />
          <input className="input" type="text" id="fname" name="name" />
          <br />
          <label htmlFor="fname">Email</label>
          <br />
          <input className="input" type="email" id="fname" name="email" />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input className="input" type="number" id="lname" name="phone" />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input className="input" type="password" id="lname" name="password" />
          <br />
          <br />
          <button type="submit">Signup</button>
        </form>
        <a>
          <Link to="/">Login</Link>
        </a>
      </div>
    </div>
  );
}
