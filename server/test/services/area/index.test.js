'use strict';

const assert = require('assert');
const app = require('../../../src/app');

describe('area service', () => {
  it('registered the areas service', () => {
    assert.ok(app.service('areas'));
  });
});
