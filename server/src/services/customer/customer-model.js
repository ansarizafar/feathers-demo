'use strict';

// customer-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const area = require('../area/area-model');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  companyName: { type: String, required: true, maxlength: 40 },
  city: { type: String, required: true, default: 'Karachi' },
  areaId: { type: Schema.Types.ObjectId, ref: 'area', required: true },
  address: { type: String, required: true, maxlength: 70 },
  phone: { type: String, required: true, maxlength: 10 },
  email: { type: String, required: true, unique: true },
  isTax: { type: Boolean, default: true },
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const customerModel = mongoose.model('customer', customerSchema);
//var customers = customerModel.find({name: 'Foundation School'}).populate('area','name').exec();
//customers.then(function(result){console.log(result)});


module.exports = customerModel;
