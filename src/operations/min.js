const Constants = require('./../constants');
const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');
const Matrices = require('winter-matrix-maths');

const func = ({ x }) =>Matrices
  .flatten(x)
  .reduce(function(a,b){
    if(isNaN(a)) return b;
    return Math.min(a,b);
  }, NaN);

const format = () => OperationFormatter.wrapInBrackets('min('+Constants.X+')');

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 0
});
