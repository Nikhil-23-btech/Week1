const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const app = express();
const port = 5000;
app.use(bodyParser.json());
app.use(express.static('public'));

let otpStore = {};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'clginternshipacc@gmail.com',
    pass: 'asrn pwxu jile azwt',
  }
});

function generateOTP() {
  return crypto.randomInt(100000, 999999).toString();
}

app.post('/send-otp', (req, res) => {
  const { email } = req.body;
  const otp = generateOTP();
  otpStore[email] = otp;

  const mailOptions = {
    from: 'clginternshipacc@gmail.com',
    to: email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send OTP. Please try again.');
    } else {
      console.log('Email sent:', info.response);
      res.send('OTP sent successfully.');
    }
  });
});

app.post('/verify-otp', (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] === otp) {
    delete otpStore[email];
    res.send('OTP verified successfully. You can proceed to login');
  } else {
    res.status(400).send('Invalid OTP. Please try again.');
  }
});

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  // Replace this with your actual authentication logic
  if (email === 'user@example.com' && password === 'password') {
    res.send('Login successful!');
  } else {
    res.status(401).send('Invalid email or password.');
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
