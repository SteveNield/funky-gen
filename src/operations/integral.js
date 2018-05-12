const Constants = require('./../constants');
const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');

const INTEGRAL_RANGE_SIZE = 2;

const func = ({ operands }) => {
  // constant function f = 2Xij+2
  const upper = operands[0]+INTEGRAL_RANGE_SIZE;
  const lower = operands[0]-INTEGRAL_RANGE_SIZE;

  return (Math.pow(upper, 2)+(2*upper))-(Math.pow(lower, 2)+(2*lower));
};

const format = () => OperationFormatter
  .wrapInBrackets(`int_(${Constants.Xij}-${INTEGRAL_RANGE_SIZE})^(${Constants.Xij}+${INTEGRAL_RANGE_SIZE}) (2${Constants.Xij}+2)`);

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 1,
  allowComposites: false,
  allowConstants: false
});
