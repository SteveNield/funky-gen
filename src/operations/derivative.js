const Constants = require('./../constants');
const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');

const func = ({ operands }) => {
  const xij = operands[0];
  return (2*xij)+2;
}

const format = () => OperationFormatter
  .wrapInBrackets(`(Delta((${Constants.Xij})^2+2${Constants.Xij}+3))/(Delta${Constants.Xij})`);

const op = ProtoOperation({
  func,
  format,
  numberOfOperands: 1,
  allowComposites: false,
  allowConstants: false
})

module.exports = op;
