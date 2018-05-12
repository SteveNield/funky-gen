const Constants = require('./../constants');
const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');

const func = ({ operands: [xij] }) => (2*xij) + 2;

const format = () => OperationFormatter
  .wrapInBrackets(`(Delta((${Constants.Xij})^2+2${Constants.Xij}+3))/(Delta${Constants.Xij})`);

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 1,
  allowComposites: false,
  allowConstants: false
});
