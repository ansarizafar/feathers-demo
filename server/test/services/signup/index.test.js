'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('signup service', () => {
  it('registered the signups service', () => {
    assert.ok(app.service('signups'));
  });
});
