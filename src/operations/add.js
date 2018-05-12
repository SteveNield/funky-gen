const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');

const func = ({ operands: [a, b] }) => a + b;

const format = ([a, b]) => OperationFormatter.wrapInBrackets(`${a} + ${b}`);

module.exports = ProtoOperation({
  func,
  format
});
