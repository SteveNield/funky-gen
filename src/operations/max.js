const Constants = require('./../constants');
const Matrices = require('winter-matrix-maths');
const ProtoOperation = require('./proto-operation');

const func = ({ x }) => Matrices
  .flatten(x)
  .reduce((a, b) => Math.max(a, b), 0);

const format = () => 'max('+Constants.X+')';

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 0
});
