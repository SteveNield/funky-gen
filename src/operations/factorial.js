const ProtoOperation = require('./proto-operation');

const func = ({ operands }) => {
  const x = operands[0];
  if(x === 0) return 1;

  let result = x;
  for(i = x-1; i > 1; i--){
    result *= i;
  }
  return result;
}

const format = operands => `${operands[0]} ! `;

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 1
});
