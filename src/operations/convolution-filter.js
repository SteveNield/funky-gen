const Constants = require('./../constants');
const ProtoOperation = require('./proto-operation');
const OperationFormatter = require('./operation-formatter');

const func = ({ i, j, x }) => {
  if(!x.length) return 0;

  let sum = 0;
  let rowStart = i > 0 ? i-1 : 0;
  let rowEnd = i < x.length-1 ? i+1 : x.length-1;
  let colStart = j > 0 ? j-1 : 0;
  let colEnd = j < x[0].length-1 ? j+1 : x[0].length-1;

  for(i=rowStart; i<=rowEnd; i++) {
    for(j=colStart; j<=colEnd; j++) {
      sum += x[i][j];
    }
  }
  return sum;
};

const format = () => OperationFormatter.wrapInBrackets('(sum_(n=j-1)^(j+1) sum_(m=i-1)^(i+1) X_(mn))');

module.exports = ProtoOperation({
  func,
  format,
  numberOfOperands: 0
});
