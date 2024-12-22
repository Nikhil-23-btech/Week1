import React from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import Sample from './Sample';
import './login.css';
import Mobile from './Mobile';
import Laptops from './Laptops';
import Clothing from './Clothing';
import Shoes from './Shoes';
import Sports from  './Sports';
import Upto1020 from './Upto1020';
import Upto3050 from './Upto3050';
import Upto7090 from './Upto7090';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sample" element={<Sample />} />
        <Route path="/Mobile" element={<Mobile />}/>
        <Route path="/Laptops" element={<Laptops />}/>
        <Route path="/Clothing" element={<Clothing />}/>
        <Route path="/Shoes" element={<Shoes />}/>
        <Route path="/Sports" element={<Sports />}/>
        <Route path="/Upto1020" element={<Upto1020 />}/>
        <Route path="/Upto3050" element={<Upto3050 />}/>
        <Route path="/Upto7090" element={<Upto7090 />}/>
      </Routes>
    </Router>
  );
}
function Login() {
  const navigate = useNavigate();
  const sendOTP = async () => {
    const email = document.getElementById('email').value;
    const response = await fetch('/send-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    });
    const result = await response.text();
    alert(result);
  };

  const verifyOTP = async () => {
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;
    const response = await fetch('/verify-otp', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, otp })
    });
    const result = await response.text();
    alert(result);
    if (result === 'OTP verified successfully. You can proceed to login') {
      navigate('/sample');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  const login = async () => {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const response = await fetch('/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    const result = await response.text();
    alert(result);
    if (result === 'Login successful!') {
      navigate('./Sample');
    }
  };
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Welcome back</h2>
        <form id="otp-form">
          <input type="email" id="email" name="email" placeholder="Email" required />
          <input type="password" id="password" name="password" placeholder="Password" required />
          <div>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <br />
          <a href="register.html">Don't have an account? Register Here</a>
          <br /><br />
          <button type="button" onClick={sendOTP}>Send OTP</button>
          <br /><br />
        </form>
        <form id="verify-form">
          <input type="password" id="otp" name="otp" placeholder="Enter OTP" required />
          <br /><br />
          <button type="button" onClick={verifyOTP}>Verify OTP</button>
          <br /><br />
          <button type="button" onClick={login}>Login</button>
        </form>
      </div>
    </div>
  );
}
export default App;
