var Constants = require('./../constants'),
    Matrices = require('./maths/matrices'),
    ProtoOperation = require('./proto-operation');

var op = ProtoOperation({
  func: function(args){
    return Matrices
      .flatten(args.x)
      .reduce(function(a,b){
        return Math.max(a,b);
      }, 0);
  },
  numberOfOperands: 0,
  format: function(operands){
    return 'max('+Constants.X+')';
  }
})

module.exports = op;
