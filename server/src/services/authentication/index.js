'use strict';

const authentication = require('feathers-authentication');


module.exports = function() {
  const app = this;

  let config = app.get('auth');
  

  console.log(config);
  app.configure(authentication(config));
};
