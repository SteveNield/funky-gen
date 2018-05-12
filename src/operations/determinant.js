const Constants = require('./../constants');
const ProtoOperation = require('./proto-operation');
const Matrices = require('winter-matrix-maths');
const OperationFormatter = require('./operation-formatter');

module.exports = ProtoOperation({
  func: ({ x }) => Matrices.determinant(x),
  format: () => OperationFormatter.wrapInBrackets('|\\X|'),
  numberOfOperands: 0
});
