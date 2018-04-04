var Constants = require('./../constants'),
    ProtoOperation = require('./proto-operation'),
    OperationFormatter = require('./operation-formatter');

var op = ProtoOperation({
  func: function(args){
    var xij = args.operands[0];
    return (2*xij)+2;
  },
  numberOfOperands: 1,
  allowComposites: false,
  allowConstants: false,
  format: function(operands){
    return OperationFormatter
      .wrapInBrackets('(Delta(('+Constants.Xij+')^2+2'+Constants.Xij+'+3))/(Delta'+Constants.Xij+')');
  }
})

module.exports = op;
