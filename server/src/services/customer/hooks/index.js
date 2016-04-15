'use strict';

const queryp = require('./queryp');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;


exports.before = {
  all: [
  //  auth.verifyToken(),
//    auth.populateUser(),
//    auth.restrictToAuthenticated()
  ],
  find: [queryp()],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};

exports.after = {
  all: [hooks.remove('createdAt', 'updatedAt')],
  find: [],
  get: [],
  create: [],
  update: [],
  patch: [],
  remove: []
};
