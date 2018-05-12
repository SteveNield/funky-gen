const Matrices = require('winter-matrix-maths');
const Constants = require('./../constants');
const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');

const func = ({ operands, i, x }) => Matrices.deviationAt(operands[0], x[i]);

const format = () => OperationFormatter.wrapInBrackets(`sigma_(i)(${Constants.Xij})`);

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 1,
  allowConstants: false,
  allowComposites: false
});
