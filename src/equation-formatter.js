var Operations = require('./operations/index'),
    Constants = require('./constants');

function _formatCompositeOperand(compositeOperand){
  let operator = Operations[compositeOperand.operator];

  function _resolveOperandFormatting(operand){
    if(typeof operand === 'object'){
      return _formatCompositeOperand(operand);
    }
    return (operand === Constants.Xij_PLACEHOLDER) ? Constants.Xij : operand;
  }

  return operator.format(compositeOperand.operands.map(_resolveOperandFormatting));
}

module.exports.format = function(specification){
  return Constants.FUNCTION_PREFIX+_formatCompositeOperand(specification);
}
