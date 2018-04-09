var Matrices = require('winter-matrix-maths'),
    Operators = require('./operators'),
    Operands = require('./operands'),
    Config = require('./../config');

function _hashIsDivisibleByNumberOfChunks(hash){
  return hash.length % Config.hash.numberOfChunks === 0;
}

function _hashIsCorrectLength(hash){
  return hash.length === Config.hash.length
}

function _chunkifyHash(hash){
  const chunks = [];
  const hashAsArray = hash.split('');
  for (i=0; i < Config.hash.numberOfChunks; i++){
    chunks.push(hashAsArray.slice(i*Config.hash.chunkSize, (i+1)*Config.hash.chunkSize));
  }
  return chunks;
}

function _readBaseOperators(chunks){
  let baseOperators = [];
  let inverseChunks = Matrices.immutableMatrixReverse(chunks);
  for(i=0; i<Config.hash.numberOfChunks-1; i++){
    baseOperators.push(Operators[inverseChunks[i][0]]);
  }
  return baseOperators;
}

function _readSubOperators(chunks){
  let subOperators = [];
  for(i=0; i<chunks.length; i++){
    subOperators.push(chunks.slice(0, Config.hash.chunkSize-1).map(function(chunk){
      return Operators[chunk[i]];
    }));
  }
  return subOperators;
}

function _readOperands(chunks){
  return chunks.map(function(chunk){
    return chunk.map(function(element){
      return Operands[element];
    })
  })
}

function _calculateInputMatrix(matrix){
  return Matrices.immutableMatrixReverse(matrix).map(function(row){
    return row.map(function(element){
      return parseInt(element, 16);
    })
  })
}

module.exports.parse = function(hash){
  if(!_hashIsCorrectLength(hash) || !_hashIsDivisibleByNumberOfChunks(hash)){
    throw new Error('Hash is incorrect length');
  }

  const chunks = _chunkifyHash(hash);

  return {
    chunks: chunks,
    base: _readBaseOperators(chunks),
    subs: _readSubOperators(chunks),
    operands: _readOperands(chunks),
    input: _calculateInputMatrix(chunks)
  };
}

module.exports._chunkifyHash = _chunkifyHash;
module.exports._calculateInputMatrix = _calculateInputMatrix;
module.exports._readBaseOperators = _readBaseOperators;
module.exports._readSubOperators = _readSubOperators;
module.exports._readOperands = _readOperands;
