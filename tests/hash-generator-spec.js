require('winter-test-setup');

var HashGenerator = require('./../src/hash-generator');

describe('HashGenerator', function(){
  it('generates a hash of the correct length', function(){
    HashGenerator({
      input: 'thisissomerealinputdata',
      length: 16
    }).length.should.equal(16);
  })
})
