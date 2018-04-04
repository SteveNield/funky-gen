var ProtoOperation = require('./proto-operation'),
    OperationFormatter = require('./operation-formatter')

var op = ProtoOperation({
  func: function(args){
    return args.operands[0]*args.operands[1];
  },
  format: function(operands){
    return OperationFormatter.wrapInBrackets(operands[0]+' xx '+operands[1]);
  }
})

module.exports = op;
