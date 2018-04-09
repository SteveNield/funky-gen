var Matrices = require('winter-matrix-maths'),
    Constants = require('./../constants'),
    ProtoOperation = require('./proto-operation'),
    OperationFormatter = require('./operation-formatter');

module.exports = ProtoOperation({
  func: function(args){
    return Matrices.deviationAt(args.operands[0], args.x.map(function(row){
      return row[args.j];
    }));
  },
  numberOfOperands: 1,
  allowConstants: false,
  allowComposites: false,
  format: function(operands){
    return OperationFormatter.wrapInBrackets('sigma_(j)('+Constants.Xij+')');
  }
})
