'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('customer service', () => {
  it('registered the customers service', () => {
    assert.ok(app.service('customers'));
  });
});
