var Constants = require('./../constants'),
    ProtoOperation = require('./proto-operation'),
    OperationFormatter = require('./operation-formatter');

const INTEGRAL_RANGE_SIZE = 2;

var op = ProtoOperation({
  func: function(args){
    // constant function f = 2Xij+2
    var upper = args.operands[0]+INTEGRAL_RANGE_SIZE;
    var lower = args.operands[0]-INTEGRAL_RANGE_SIZE;

    return (Math.pow(upper, 2)+(2*upper))-(Math.pow(lower, 2)+(2*lower));
  },
  numberOfOperands: 1,
  allowComposites: false,
  allowConstants: false,
  format: function(operands){
    return OperationFormatter
      .wrapInBrackets('int_('+Constants.Xij+'-'+INTEGRAL_RANGE_SIZE+')^('+Constants.Xij+'+'+INTEGRAL_RANGE_SIZE+') (2'+Constants.Xij+'+2)');
  }
})

module.exports = op;
