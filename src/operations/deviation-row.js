var Matrices = require('./maths/matrices'),
    Constants = require('./../constants'),
    ProtoOperation = require('./proto-operation'),
    OperationFormatter = require('./operation-formatter');

var op = ProtoOperation({
  func: function(args){
    var mean = Matrices.flatMean(args.x[args.i]);
    return Matrices.deviationAt(args.operands[0], mean);
  },
  numberOfOperands: 1,
  allowConstants: false,
  allowComposites: false,
  format: function(operands){
    return OperationFormatter.wrapInBrackets('sigma_(i)('+Constants.Xij+')');
  }
})

module.exports = op;
