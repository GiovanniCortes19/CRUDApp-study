const User = require('../models/userModel');

const UserController = {};

UserController.createUser = async (req, res, next) => {
  console.log('inside create User');
  // client username and password
  const { username, password } = req.body;

  // create new user
  const newUser = await User.create({ username, password });

  if (!newUser) {
    next({ error: 'did not create user' });
  }

  res.locals.userId = newUser._id;
  next();
};

module.exports = UserController;
