var Constants = require('./../constants'),
    ProtoOperation = require('./proto-operation'),
    OperationFormatter = require('./operation-formatter');

var op = ProtoOperation({
  func: function(args){
    if(args.x.length === 0){
      return 0;
    }

    let sum = 0;
    let rowStart = args.i > 0 ? args.i-1 : 0;
    let rowEnd = args.i < args.x.length-1 ? args.i+1 : args.x.length-1;
    let colStart = args.j > 0 ? args.j-1 : 0;
    let colEnd = args.j < args.x[0].length-1 ? args.j+1 : args.x[0].length-1;

    for(i=rowStart;i<=rowEnd;i++){
      for(j=colStart;j<=colEnd;j++){
        sum+=args.x[i][j];
      }
    }

    return sum;
  },
  numberOfOperands: 0,
  format: function(operands){
    return OperationFormatter.wrapInBrackets('(sum_(n=j-1)^(j+1) sum_(m=i-1)^(i+1) X_(mn))');
  }
})

module.exports = op;
