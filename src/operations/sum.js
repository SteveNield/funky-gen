const Constants = require('./../constants');
const Matrices = require('winter-matrix-maths');
const ProtoOperation = require('./proto-operation');

const func = ({ x }) => Matrices
  .flatten(x)
  .reduce((acc, val) => acc += val, 0);

const format =  () => 'sum('+Constants.X+')';

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 0
});
