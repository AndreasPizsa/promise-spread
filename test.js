var assert = require('assert');
describe("Promise.spread", function(){
  require('./')(require('any-promise'));

  it("can spread()", function(){
    return Promise
      .resolve([1,2,3,4])
      .spread(function(a,b,c,d){
        assert.strictEqual(arguments.length,4);
        assert.strictEqual(a,1);
        assert.strictEqual(b,2);
        assert.strictEqual(c,3);
        assert.strictEqual(d,4);
      });
  });
});
