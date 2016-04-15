'use strict';

const service = require('feathers-mongoose');
const customer = require('./customer-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: customer,
    lean: true,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/customers', service(options));
/*
  app.service('customers').create({
    text: 'Server message'
  }).then(function(message) {
    console.log('Created message', message);
  });
*/

  // Get our initialize service to that we can bind hooks
  const customerService = app.service('/customers');

  // Set up our before hooks
  customerService.before(hooks.before);

  // Set up our after hooks
  customerService.after(hooks.after);
};
