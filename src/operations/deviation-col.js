const Matrices = require('winter-matrix-maths');
const Constants = require('./../constants');
const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');

const func = ({ operands: [a], j, x }) =>
  Matrices.deviationAt(a, x.map(row =>row[j]));

const format = () => OperationFormatter.wrapInBrackets(`sigma_(j)(${Constants.Xij})`);

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 1,
  allowConstants: false,
  allowComposites: false
});
