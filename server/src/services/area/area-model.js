'use strict';

// area-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const areaSchema = new Schema({
  name: { type: String, required: true },
  city: { type: String, required: true, default: 'Karachi' },

  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now }
});

const areaModel = mongoose.model('area', areaSchema);

/*
areaModel.create({ name: 'Defence' }, function (err, result) {
  if (err) console.log(err);
  // saved!
  console.log(result);
});
*/
module.exports = areaModel;
