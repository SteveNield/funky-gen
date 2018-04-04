var Constants = require('./../constants'),
    Matrices = require('./maths/matrices'),
    ProtoOperation = require('./proto-operation')

var op = ProtoOperation({
  func: function(args){
    return Matrices.flatten(args.x)
      .reduce(function(acc, val){
        return acc += val;
      }, 0);
  },
  numberOfOperands: 0,
  format: function(operands){
    return 'sum('+Constants.X+')';
  }
})

module.exports = op;
