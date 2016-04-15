'use strict';

const assert = require('assert');
const queryp = require('../../../../src/services/customer/hooks/queryp.js');

describe('customer queryp hook', () => {
  it('hook can be used', () => {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };
    
    queryp()(mockHook);
    
    assert.ok(mockHook.queryp);
  });
});
