const Constants = require('./../constants');
const ProtoOperation = require('./proto-operation');
const Matrices = require('winter-matrix-maths');
const OperationFormatter = require('./operation-formatter');

var op = ProtoOperation({
  func: ({ x }) => Matrices.determinant(x),
  numberOfOperands: 0,
  format: () => OperationFormatter.wrapInBrackets('|\\X|')
});

module.exports = op;
