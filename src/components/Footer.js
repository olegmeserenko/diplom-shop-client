import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="justify-content-center d-flex footer-container">
        <Link className="brand" to="/">
          <i className="fab fa-shopify" /> Meserenko Shop
        </Link>
      </div>
    </div>
  );
};

export default Footer;
