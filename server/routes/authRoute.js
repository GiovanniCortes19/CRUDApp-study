const express = require('express');
const router = express.Router();
const path = require('path');

// AUTH ROUTER

// SIGNUP
router.get('/signup', (req, res) => {
  console.log('Serving the Sign Up page...');
  res.sendFile(path.join(__dirname, '../../client/signup.html'));
});

router.post('/signup', (req, res) => {
  console.log('Should create a user...');
  res.status(200).send('');
});

// LOGIN
router.post('/login', (req, res) => {
  console.log('User Logged In...');
  res.status(200).send('You Logged In!');
});

module.exports = router;
