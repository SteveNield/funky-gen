var ProtoOperation = require('./proto-operation');

var op = ProtoOperation({
  func: function(args){
    let x = args.operands[0];
    if(x === 0)
      return 1;

    var result = x;
    for(i = x-1; i > 1; i--){
      result *= i;
    }
    return result;
  },
  numberOfOperands: 1,
  format: function(operands){
    return operands[0]+' ! ';
  }
})

module.exports = op;
