import React from "react";
import facebook from "../images/facebook.png";
import twitter from "../images/twitter.png";
import instagram from "../images/instagram.png";

const Footer = () => {
  return (
    <footer>
      <div className="btm-bar">
        <div className="page-link">
          <a href="about.html" className="about-us">
            About us
          </a>
          <a href="contact.html" className="contact">
            Contact
          </a>
          <a href="career.html" className="career">
            Career
          </a>
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
