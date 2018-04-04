var Operands = require('./operands'),
    Operators = require('./operators'),
    Constants = require('./constants'),
    Operations = require('./operations/index'),
    Matrices = require('./operations/maths/matrices');

var compositeOperands = [];

function _setCompositeOperands(operands){
  compositeOperands = operands;
}

function _getCompositeOperands(){
  return compositeOperands;
}

function _clearCompositeOperands(){
  compositeOperands = [];
}

function _resolveBlock(operator){
  let operation = Operations[operator];
  let block = {
    "operator": operator,
    "operands": []
  };

  for(i=0; i<operation.numberOfOperands; i++){
    block.operands.push(
      operation.allowComposites
        ? compositeOperands.shift()
        : Constants.Xij_PLACEHOLDER
    );
  }

  return block;
}

function _resolveTree(operators, initialOperands){
  compositeOperands = initialOperands || [];

  return operators.reduce(function(acc, operator){
    let block = _resolveBlock(operator);
    compositeOperands.unshift(block);
    return block;
  }, {});
}

function _isValid(options){
  if(options.base.length < options.complexity-1){
    return false;
  }

  if (options.subs.length < options.complexity){
    return false;
  }

  if(options.operands.length < options.complexity){
    return false;
  }

  return true;
}

module.exports.generate = function(options){
  if (!_isValid(options)){
    throw new Error('Complexity is outside range '+options.complexity);
  }

  let operandBlocks = options.operands.slice(0, options.complexity).map(function(operand){
    return operand.map(_resolveBlock);
  });

  if(options.complexity === 1){
    return _resolveTree(options.subs[0], operandBlocks[0]);
  }

  let subBlocks = options.subs.slice(0, options.complexity).map(function(sub, index){
    return _resolveTree(sub, operandBlocks[index]);
  });

  return _resolveTree(options.base.slice(0, options.complexity-1), subBlocks);
}

module.exports._resolveBlock = _resolveBlock;
module.exports._resolveTree = _resolveTree;
module.exports._setCompositeOperands = _setCompositeOperands;
module.exports._getCompositeOperands = _getCompositeOperands;
module.exports._clearCompositeOperands = _clearCompositeOperands;
