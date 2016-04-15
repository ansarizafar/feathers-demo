'use strict';

// user-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({

  userName: { type: String, required: true },
  role: { type: String, required: true, default: 'Customer' },
  belongTo: { type: Schema.Types.ObjectId },
  isActive: { type: Boolean, required: true, default: true },

  loginName: {type: String, required: true, unique: true},
  password: { type: String, required: true },

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const userModel = mongoose.model('user', userSchema);

module.exports = userModel;
