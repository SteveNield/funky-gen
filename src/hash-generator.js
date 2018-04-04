var md5 = require('md5');

module.exports = function(options){
  return md5(options.input).substring(0, options.length);
}
