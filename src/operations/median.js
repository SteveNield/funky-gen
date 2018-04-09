var Constants = require('./../constants'),
    Matrices = require('winter-matrix-maths'),
    ProtoOperation = require('./proto-operation');

var op = ProtoOperation({
  func: function(args){
    return Matrices.median(args.x);
  },
  numberOfOperands: 0,
  format: function(operands){
    return 'tilde '+Constants.X;
  }
})

module.exports = op;
