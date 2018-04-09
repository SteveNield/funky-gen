var Matrices = require('winter-matrix-maths'),
    Constants = require('./../constants'),
    ProtoOperation = require('./proto-operation'),
    OperationFormatter = require('./operation-formatter');

var op = ProtoOperation({
  func: function(args){
    return Matrices.deviationAt(args.operands[0], args.x[args.i]);
  },
  numberOfOperands: 1,
  allowConstants: false,
  allowComposites: false,
  format: function(operands){
    return OperationFormatter.wrapInBrackets('sigma_(i)('+Constants.Xij+')');
  }
})

module.exports = op;
