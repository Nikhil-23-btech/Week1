import React from 'react';
import './style.css';
function Navbar() {
  return (
    <ul>
      <li><img src="logo.jpg" style={{ width: '40px', height: '40px' }} alt="Logo" /></li>
      <li><a href="main.html">Home</a></li>
      <li><a href="#news">News</a></li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropbtn">Categories</a>
        <div className="dropdown-content">
          <a href="mobile.html">Mobiles</a>
          <a href="#">Laptops</a>
          <a href="#">Clothing</a>
          <a href="#">Shoes</a>
          <a href="#">Sports</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropbtn">Offers</a>
        <div className="dropdown-content">
          <a href="#">Upto 10-20%</a>
          <a href="#">Upto 30-50%</a>
          <a href="#">Upto 60-90%</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropbtn">About Us</a>
        <div className="dropdown-content">
          <a href="#">Feedback</a>
          <a href="#">Report Problem</a>
        </div>
      </li>
      <li className="dropdown">
        <a href="javascript:void(0)" className="dropbtn">Help?</a>
        <div className="dropdown-content">
          <a href="#">Convey Your Problem</a>
        </div>
      </li>
      <li className="navbar-right dropdown">
        <a href="javascript:void(0)" className="dropbtn"><i className="fas fa-shopping-cart"></i> Cart</a>
        <div className="dropdown-content">
          <a href="view.html">View Cart</a>
          <a href="#">Checkout</a>
        </div>
      </li>
      <li className="navbar-right dropdown">
        <a href="javascript:void(0)" className="dropbtn">Your Profile</a>
        <div className="dropdown-content">
          <a href="#">Account Settings</a>
          <a href="#">Order History</a>
          <a href="#">Logout</a>
        </div>
      </li>
    </ul>
  );
}

export default Navbar;
