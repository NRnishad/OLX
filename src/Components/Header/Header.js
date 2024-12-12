import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';

function Header() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Check login status on component mount
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.isLoggedIn) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    // Clear login status
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      user.isLoggedIn = false;
      localStorage.setItem("user", JSON.stringify(user));
    }
    setIsLoggedIn(false);
    navigate("/"); // Redirect to the homepage after logout
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo />
        </div>
        <div className="placeSearch">
          <Search />
          <input type="text" />
          <Arrow />
        </div>
        <div className="productSearch">
          <div className="input">
            <input type="text" placeholder="Find car, mobile phone and more..." />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" />
          </div>
        </div>
        <div className="language">
          <span>ENGLISH</span>
          <Arrow />
        </div>
        <div className="loginPage">
          {isLoggedIn ? (
            <span onClick={handleLogout} style={{ cursor: "pointer" }}>
              Logout
            </span>
          ) : (
            <span>
              <Link to="/login">Login</Link>
            </span>
          )}
          <hr />
        </div>
        <div className="sellMenu">
          <SellButton />
          <div className="sellMenuContent">
            <SellButtonPlus />
            <span>
              <Link to="/create">SELL</Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
