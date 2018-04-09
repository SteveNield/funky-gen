var Constants = require('./../constants'),
    ProtoOperation = require('./proto-operation'),
    Matrices = require('winter-matrix-maths'),
    OperationFormatter = require('./operation-formatter');

var op = ProtoOperation({
  func: function(args){
    return Matrices.determinant(args.x);
  },
  numberOfOperands: 0,
  format: function(operands){
    return OperationFormatter
      .wrapInBrackets('|\\X|');
  }
})

module.exports = op;
