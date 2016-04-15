'use strict';

const service = require('feathers-mongoose');
const area = require('./area-model');
const hooks = require('./hooks');

module.exports = function() {
  const app = this;

  const options = {
    Model: area,
    lean: true,
    paginate: {
      default: 5,
      max: 25
    }
  };

  // Initialize our service with any options it requires
  app.use('/areas', service(options));

  // Get our initialize service to that we can bind hooks
  const areaService = app.service('/areas');

  // Set up our before hooks
  areaService.before(hooks.before);

  // Set up our after hooks
  areaService.after(hooks.after);
};
