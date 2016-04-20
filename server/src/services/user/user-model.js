'use strict';

// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var loginMatch = [ /^[a-zA-Z0-9]{6,20}$/, 'Login name must be 6 to 20 characters long, and can contain A-Z, a-z and 0-9.'];
var passwordMatch = [ /^(?=.*[A-Z])(?=.*[0-9])(?=.{6,15}$)/, 'Password must be 6 to 15 characters long, and contain at least 1 uppercase letter and 1 digit.'];

const userSchema = new Schema({

  userName: { type: String, required: true, maxlength: 25 },
  role: { type: String, required: true, default: 'Customer' },
  belongTo: { type: Schema.Types.ObjectId, default: null },
  isActive: { type: Boolean, required: true, default: true },

  loginName: {type: String, required: true, unique: true, match: loginMatch},
  password: { type: String, required: true, match: passwordMatch },

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
