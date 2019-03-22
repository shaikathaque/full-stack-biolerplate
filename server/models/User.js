const mongoose = require('mongoose');
const { Schema } = require('mongoose');

const userSchema = new Schema({
  id: String,
  name: String
});

mongoose.model('users', userSchema);
