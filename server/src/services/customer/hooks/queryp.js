'use strict';

// src/services/customer/hooks/queryp.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    console.log(hook.params);
    hook.queryp = true;
  };
};
