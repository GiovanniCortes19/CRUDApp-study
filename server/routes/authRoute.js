const express = require('express');
const router = express.Router();
const path = require('path');

const UserController = require('../controllers/userController');

// AUTH ROUTER

// SIGNUP
router.get('/signup', (req, res) => {
  console.log('Serving the Sign Up page...');
  res.sendFile(path.join(__dirname, '../../client/signup.html'));
});

router.post('/signup', UserController.createUser, (req, res) => {
  console.log('Should create a user...');
  res.status(200).redirect('/app');
});

// LOGIN
router.post('/login', (req, res) => {
  console.log('User Logged In...');
  res.status(200).redirect('/app');
});

module.exports = router;
