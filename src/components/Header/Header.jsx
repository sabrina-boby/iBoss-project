import React, { useState, useContext } from "react";
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

import "./Header.css";
import icon from "../../Assets/icon.png";
import Account from "../../Assets/Account.png";
import basket from "../../Assets/basket.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { logout } = useContext(AppContext);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const toggleCheckout = () => {
   navigate('/checkout');
  };
  const toggleProducts = () => {
   navigate('/products');
  };
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={icon} alt="Logo" />
          <a href="/">
            <h2>
              <span className="brand">
                Furni<span className="blue-text">Flex</span>
              </span>
            </h2>
          </a>
        </div>
        <div className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a onClick={toggleProducts}>Products</a>
            </li>
            <li>
              <a href="/">Categories</a>
            </li>
            <li>
              <a href="/">Custom</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
          </ul>
        </div>
        <div className="button">
          <img src={basket} alt=""  onClick={toggleCheckout}/>
          <img src={Account} alt="" />
          <button onClick={handleLogout} className="logout">
           Logout
          </button>
        </div>
        <div
          className={`hamburger ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </header>
  );
};

export default Header;
