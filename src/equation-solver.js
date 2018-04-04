var Operations = require('./operations'),
    Constants = require('./constants');

function _resolveCompositeOperand(compositeOperand, xij, x, i, j){
  let operator = Operations[compositeOperand.operator];

  function _selectOperandValue(operand){
    return (typeof operand === 'object')
      ? _resolveCompositeOperand(operand, xij, x, i, j)
      : xij;
  }

  return operator.func({
    x: x,
    i: i,
    j: j,
    operands: compositeOperand.operands.map(_selectOperandValue)
  });
}

module.exports.solve = function(spec, input){
  return input.map(function(row, i){
    return row.map(function(xij, j){
      return _resolveCompositeOperand(spec, xij, input, i, j);
    })
  });
}
