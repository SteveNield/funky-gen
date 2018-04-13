var FunkyGen = require('./src/funky-gen'),
    HashGenerator = require('./src/hash-generator'),
    RandomString = require('randomstring'),
    Config = require('./config');

module.exports = function(options){
  return FunkyGen({
    hash: HashGenerator({
      input: options.seed || RandomString.generate(12),
      length: Config.hash.length
    }),
    complexity: options.complexity || Config.function.defaultComplexity
  });
}
