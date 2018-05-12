const ProtoOperation = require('./proto-operation');

const func = ({ operands: [x] }) => {
  if(x === 0) return 1;

  let result = x;
  for(i = x-1; i > 1; i--){
    result *= i;
  }
  return result;
}

const format = ([a]) => `${a} ! `;

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 1
});
