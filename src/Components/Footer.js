import React from "react";
import "./App.css";

function Footer() {
  return (
    <React.Fragment>
      <div className="footer">
        <div className="footer-top">
          <div className="logo">
            <h1 className="logo-name">Recipe App</h1>
          </div>
          <div className="address">
            <address className="address">Explore...</address>
          </div>
          <div className="social">
            <span className="facebook">
              <a href="facebook.com">Facebook</a>
            </span>
            <span className="twitter">
              <a href="twitter.com">Twitter</a>
            </span>
            <span className="instagram">
              <a href="instagram.com">Instagram</a>
            </span>
          </div>
        </div>
        <div>
          <p className="copyright">All rights reserved, copyright 2022</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Footer;
