require('winter-test-setup');

var HashParser = require('./../src/hash-parser');

describe('HashParser', function(){
  it('correctly parses a correct hash', function(){
    const hash = 'f34b012c234468ca';
    HashParser.parse(hash).should.deep.equal({
      chunks: [['f','3','4','b'],['0','1','2','c'],['2','3','4','4'],['6','8','c','a']],
      base: ['Divide','Subtract','Multiply'],
      subs: [
        ['Multiply','Add','Add'],
        ['Add','Add','Add'],
        ['Subtract','Add','Subtract'],
        ['Divide','Multiply','Subtract']
      ],
      operands: [
        ['Determinant','Integral','Determinant','Min'],
        ['Determinant','ConvolutionFilter','Derivative','ConvolutionFilter'],
        ['Derivative','Integral','Determinant','Determinant'],
        ['Median','Deviation','ConvolutionFilter','DeviationCol']
      ],
      input: [
        [10,12,8,6],
        [4,4,3,2],
        [12,2,1,0],
        [11,4,3,15]
      ]
    });
  })

  describe('_chunkifyHash', function(){
    it('splits the hash into the correct number of chunks', function(){
      const hash = '0001111100100101';
      const expectedChunks = [['0','0','0','1'],['1','1','1','1'],['0','0','1','0'],['0','1','0','1']];
      HashParser._chunkifyHash(hash).should.deep.equal(expectedChunks);
    })
  })

  describe('_calculateInputMatrix', function(){
    describe('when hash contains only numerics', function(){
      it('correctly calculates the input matrix', function(){
        const chunks = [['0','0','0','1'],['1','1','1','1'],['0','0','1','0'],['0','1','0','1']];
        const expectedInputMatrix = [
          [1,0,1,0],
          [0,1,0,0],
          [1,1,1,1],
          [1,0,0,0]
        ];
        HashParser._calculateInputMatrix(chunks).should.deep.equal(expectedInputMatrix);
      })
    })
    describe('when hash contains one alpha', function(){
      it('correctly calculates the input matrix', function(){
        const chunks = [['0','a','0','1'],['1','1','1','1'],['0','0','1','0'],['0','1','0','1']];
        const expectedInputMatrix = [
          [1,0,1,0],
          [0,1,0,0],
          [1,1,1,1],
          [1,0,10,0]
        ];
        HashParser._calculateInputMatrix(chunks).should.deep.equal(expectedInputMatrix);
      })
    })
  })

  describe('_readBaseOperators', function(){
    it('correctly reads all base operators from a correct hash', function(){
      const chunks = [['f','3','4','b'],['0','1','2','c'],['2','3','4','4'],['6','8','c','a']];
      const expectedBaseOperators = ['Divide','Subtract','Multiply'];
      HashParser._readBaseOperators(chunks).should.deep.equal(expectedBaseOperators);
    })
  })

  describe('_readSubOperators', function(){
    it('correctly reads all sub operators from a correct hash', function(){
      const chunks = [['f','3','4','b'],['0','1','2','c'],['2','3','4','4'],['6','8','c','a']];
      const expectedSubOperators = [
        ['Multiply','Add','Add'],
        ['Add','Add','Add'],
        ['Subtract','Add','Subtract'],
        ['Divide','Multiply','Subtract']
      ];
      HashParser._readSubOperators(chunks).should.deep.equal(expectedSubOperators);
    })
  })

  describe('_readOperands', function(){
    it('correctly reads all operands from a correct hash', function(){
      const chunks = [['f','3','4','b'],['0','1','2','c'],['2','3','4','4'],['6','8','c','a']];
      const expectedOperands = [
        ['Determinant','Integral','Determinant','Min'],
        ['Determinant','ConvolutionFilter','Derivative','ConvolutionFilter'],
        ['Derivative','Integral','Determinant','Determinant'],
        ['Median','Deviation','ConvolutionFilter','DeviationCol']
      ];
      HashParser._readOperands(chunks).should.deep.equal(expectedOperands);
    })
  })
})
