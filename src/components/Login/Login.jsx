import React, { useState, useContext } from 'react';
import { AppContext } from '../../context/AppContext';
import { useNavigate } from 'react-router-dom';

import "./Login.css";
import Frame59 from "../../Assets/Frame59.png";
import Frame60 from "../../Assets/Frame60.png";
import Frame61 from "../../Assets/Frame61.png";
import visibility_off from "../../Assets/visibility_off.png";
import icon from "../../Assets/icon.png";

const Login = () => {
  const { login } = useContext(AppContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = { email, password };
   
    const isSuccess = login(user); // Attempt login

    if (isSuccess) {
      navigate('/products');  // Redirect to products page if login successful
    } else {
      setError('Invalid credentials. Please sign up first.');  // Show error if login fails
    }
  };
  return (
    <div className="container">
      <div className="signin-full">
        <h3>Welcome Back!</h3>
        <p>Enter your Credentials to access your account</p>
        <div className="signin-body">
          <form action="#" method="POST">
            <div className="input-group">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
              />
            </div>
            <div className="input-group password">
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <img className="show-pass" src={visibility_off} alt="" />
            </div>
            <a className="forgot-pass" href="/">
              Forgot Password
            </a>
            <div className="checkbox-group">
              <input type="checkbox" id="terms" name="terms" />
              <label for="terms">
                I agree to the{" "}
                <a href="/" className="link-color">
                  Terms & Policy
                </a>
              </label>
            </div>
            <button type="submit" onClick={handleLogin} className="signup-btn">
              Sign In
            </button>
            {error && <p className="text-red-500 mt-2">{error}</p>}

            <div className="separator">or</div>
            <div className="social-signin">
              <div className="social-btn">
                <img src={Frame59} alt="" />
              </div>
              <div className="social-btn">
                <img src={Frame60} alt="" />
              </div>
            </div>
            <p className='signin'>Have an account? <a href="/signup" className="signin-color" >Sign Up</a></p>
          </form>
        </div>
      </div>
      <div className="img-section">
        <img src={Frame61} alt="" />
        <div className="text">
            <div className="icon"><img src={icon} alt="" /></div>
            <h2><span className="brand">Furni<span className="blue-text">Flex</span></span></h2>
            <p>Discover a seamless shopping experience with our curated collection of products. From fashion to electronics, we bring quality.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;

