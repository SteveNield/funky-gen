const Matrices = require('winter-matrix-maths');
const Constants = require('./../constants');
const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');

const func = ({ operands: [a], x}) => Matrices.deviationAt(a, x);

const format = () => OperationFormatter.wrapInBrackets(`sigma(${Constants.Xij})`);

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 1,
  allowConstants: false,
  allowComposites: false
});
