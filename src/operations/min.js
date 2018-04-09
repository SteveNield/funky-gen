var Constants = require('./../constants'),
    ProtoOperation = require('./proto-operation'),
    OperationFormatter = require('./operation-formatter'),
    Matrices = require('winter-matrix-maths');

var op = ProtoOperation({
  func: function(args){
    return Matrices
      .flatten(args.x)
      .reduce(function(a,b){
        if(isNaN(a)) return b;
        return Math.min(a,b);
      }, NaN);
  },
  numberOfOperands: 0,
  format: function(operands){
    return OperationFormatter.wrapInBrackets('min('+Constants.X+')');
  }
})

module.exports = op;
