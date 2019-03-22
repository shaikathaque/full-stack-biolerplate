const mongoose = require('mongoose');

const User = mongoose.model('users');

const getHelloWorld = name => `Hello ${name}`;

const addUser = async (name) => {
  const user = await new User({ id: 'b', name }).save();
  return user;
};

module.exports = { getHelloWorld, addUser };
