var Matrices = require('./maths/matrices'),
    Constants = require('./../constants'),
    ProtoOperation = require('./proto-operation'),
    OperationFormatter = require('./operation-formatter');

module.exports = ProtoOperation({
  func: function(args){
    var mean = Matrices.flatMean(args.x.map(function(row){
      return row[args.j];
    }));
    return Matrices.deviationAt(args.operands[0], mean);
  },
  numberOfOperands: 1,
  allowConstants: false,
  allowComposites: false,
  format: function(operands){
    return OperationFormatter.wrapInBrackets('sigma_(j)('+Constants.Xij+')');
  }
})
