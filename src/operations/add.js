const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');

const func = ({ operands }) =>
  operands[0] + operands[1];

const format = operands =>
  OperationFormatter.wrapInBrackets(`${operands[0]} + ${operands[1]}`)

const op = ProtoOperation({
  func,
  format
});

module.exports = op;
