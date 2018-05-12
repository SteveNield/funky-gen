const Constants = require('./../constants');
const Matrices = require('winter-matrix-maths');
const ProtoOperation = require('./proto-operation');

const func = ({ x }) => Matrices.median(x);

const format = () => `tilde ${Constants.X}`;

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 0
});
