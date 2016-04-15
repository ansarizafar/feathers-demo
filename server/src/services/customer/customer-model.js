'use strict';

// customer-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const area = require('../area/area-model');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true, default: 'Karachi' },
  area: { type: Schema.Types.ObjectId, ref: 'area', required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  isTax: { type: Boolean, default: true },
  user: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const customerModel = mongoose.model('customer', customerSchema);
//var customers = customerModel.find({name: 'Foundation School'}).populate('area','name').exec();
//customers.then(function(result){console.log(result)});
/*
customerModel.create({ name: 'Foundation School', area: '570cb2f770c5cecf14bf6f46', address: 'sdfsdf', phone: '423423', email: 'zafar@abc.com' }, function (err, result) {
  if (err) console.log(err);
  // saved!

  console.log(result);
})
*/

module.exports = customerModel;
