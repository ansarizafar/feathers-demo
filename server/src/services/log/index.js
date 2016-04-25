'use strict';

const service = require('feathers-mongoose');
const log = require('./log-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: log,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/logs', service(options));

  // Get our initialize service to that we can bind hooks
  const logService = app.service('/logs');

  // Set up our before hooks
  logService.before(hooks.before);

  // Set up our after hooks
  logService.after(hooks.after);
};
