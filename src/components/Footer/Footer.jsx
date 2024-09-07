import React from "react";
import "./Footer.css";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";
import twitter from "../../Assets/twitter.png";
import linkedin from "../../Assets/linkedin.png";
import usa from "../../Assets/usa.png";
import logo from "../../Assets/Logo.png";

const Footer = () => {
  return (
    <div className="body">
      <div className="container">
        <footer className="footer">
          <div className="footer-logo-res">
            <img src={logo} alt="" />
          </div>
          <div className="footer-up">
            <div className="footer-logo">
              <img src={logo} alt="" />
            </div>
            <div className="footer-column">
              <ul>
                <h3>About US</h3>
                <li>
                  <a href="/">Master Plan</a>
                </li>
                <li>
                  <a href="/">Jobs</a>
                </li>
                <li>
                  <a href="/">Invest</a>
                </li>
                <li>
                  <a href="/">Pressroom</a>
                </li>
                <li>
                  <a href="/">Blog</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                <h3>Explore EEVE</h3>
                <li>
                  <a href="/">Unlock my Robot Power</a>
                </li>
                <li>
                  <a href="/">Starlight</a>
                </li>
                <li>
                  <a href="/">Robot Platform</a>
                </li>
                <li>
                  <a href="/">EEVE Roadmap</a>
                </li>
              </ul>
            </div>
            <div className="footer-column">
              <ul>
                <h3>Community & Support</h3>
                <li>
                  <a href="/">Willow X Community</a>
                </li>
                <li>
                  <a href="/">Developer & Maker Access</a>
                </li>
                <li>
                  <a href="/">Special Cases</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-down">
            <div className="footer-bottom">
              <div className="social-icons">
                <a href="/">
                  <img src={facebook} alt="" />
                </a>
                <a href="/">
                  <img src={instagram} alt="" />
                </a>
                <a href="/">
                  <img src={twitter} alt="" />
                </a>
                <a href="/">
                  <img src={linkedin} alt="" />
                </a>
              </div>
              <div className="footer-links">
                <a href="/">March22 Recap</a>
                <a href="/">Privacy Policy</a>
                <a href="/">General Terms</a>
                <a href="/">Contact</a>
              </div>
              <div className="footer-country">
                <img src={usa} alt="" />
                <a href="/">United States (English)</a>
              </div>
            </div>
          </div>
          <div className="copy-right">
            <p>EEVE © 2024. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
