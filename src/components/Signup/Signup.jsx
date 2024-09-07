import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { useNavigate } from "react-router-dom";

import "./Signup.css";
import Frame59 from "../../Assets/Frame59.png";
import Frame60 from "../../Assets/Frame60.png";
import Frame61 from "../../Assets/Frame61.png";
import visibility_off from "../../Assets/visibility_off.png";
import icon from "../../Assets/icon.png";

const Signup = () => {
  const { signup } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = () => {
    const newUser = { email, password };
   
    // Sign up the user and save to localStorage
    signup(newUser);
   
    // Redirect to the products page after successful signup
    navigate('/products');

  };

  return (
    <div className="container">
    <div className="form-box">
      <h3>Welcome To </h3>
      <h2><span className="brand">Furni<span className="blue-text">Flex</span></span></h2>
      <p>Signup for purchase your desire products</p>
      <form action="/" method="POST">
        <div className="input-group name">
          <input type="text" id="first-name" name="first-name" placeholder="First name (optional)"/>
          <input type="text" id="last-name" name="last-name" placeholder="Last name (optional)"/>
        </div>
        <div className="input-group">
          <input type="email" id="email" name="email"  
           value={email}
           onChange={e => setEmail(e.target.value)}
           placeholder="Email address"
           />
        </div>
        <div className="input-group password">
          <input type="password" id="password" name="password" 
           value={password}
           onChange={e => setPassword(e.target.value)}
           placeholder="Password"/>
          <img className="show-pass" src={visibility_off} alt="" />
        </div>
        <div className="checkbox-group">
            <input type="checkbox" id="terms" name="terms"/>
          <label for="terms">I agree to the <a href="/" className="link-color">Terms & Policy</a></label>
        </div>
        <button type="submit" className="signup-btn" onClick={handleSignup}>Signup</button>
      </form>
      <div className="separator">or</div>
      <div className="social-signin">
        <div className="social-btn"><img src={Frame59} alt="" /></div>
        <div className="social-btn"><img src={Frame60} alt="" /></div>
      </div>
      <p>Have an account? <a href="/" className="signin-color">Sign In</a></p>
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

export default Signup;
