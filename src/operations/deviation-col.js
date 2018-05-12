const Matrices = require('winter-matrix-maths');
const Constants = require('./../constants');
const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');

const func = ({ operands, j, x }) =>
  Matrices.deviationAt(operands[0], x.map(function(row){
    return row[j];
  }));

const format = () => OperationFormatter.wrapInBrackets(`sigma_(j)(${Constants.Xij})`);

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 1,
  allowConstants: false,
  allowComposites: false
});
