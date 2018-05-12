const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');

const func = ({ operands: [a, b] }) => a / b;

const format = operands => OperationFormatter.wrapInBrackets(`${operands[0]} / ${operands[1]}`);

module.exports = ProtoOperation({
  func,
  format
});
