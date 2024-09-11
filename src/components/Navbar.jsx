import React from "react";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="nav-logo">
          <img src="images1/brand_logo.png" alt="" />
        </div>
        <div className="nav-links">
          <ul className="list">
            <li className="menu">MENU</li>
            <li className="location">LOCATION</li>
            <li className="about">ABOUT</li>
            <li className="contact">CONTACT</li>
          </ul>
        </div>
        <button className="nav-btn">Login</button>
      </div>
    </header>
  );
};

export default Navbar;
