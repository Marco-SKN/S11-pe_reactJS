import React from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="btm-bar">
        <div className="page-link">
          <Link to="/S11-pe_reactJS/about">About us</Link>
          <Link to="/S11-pe_reactJS/contact">Contact</Link>
          <Link to="/S11-pe_reactJS/career">Career</Link>
        </div>

        <div className="social-media">
          <a href="https://www.facebook.com">
            <img src={facebook} />
          </a>
          <a href="https://www.twitter.com">
            <img src={twitter} />
          </a>
          <a href="https://www.instagram.com">
            <img src={instagram} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
