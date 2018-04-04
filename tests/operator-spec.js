require('winter-test-setup');

var Operations = require('./../src/Operations'),
    Constants = require('./../src/constants'),
    Add = require('./../src/operations/add'),
    Factorial = require('./../src/operations/factorial'),
    Sum = require('./../src/operations/sum'),
    Median = require('./../src/operations/median'),
    Max = require('./../src/operations/max'),
    Deviation = require('./../src/operations/deviation'),
    RowDeviation = require('./../src/operations/deviation-row'),
    ColDeviation = require('./../src/operations/deviation-col'),
    Min = require('./../src/operations/min'),
    ConvolutionFilter = require('./../src/operations/convolution-filter'),
    Derivative = require('./../src/operations/derivative'),
    Integral = require('./../src/operations/integral'),
    Determinant = require('./../src/operations/determinant');

describe('Operations', function(){
  describe('factorial', function(){
    function assertFactorialCorrect(operands, expectedAnswer){
      it('returns the factorial of a single integer argument: '+operands, function(){
        Factorial.func({ operands: operands }).should.equal(expectedAnswer);
      });
    }

    assertFactorialCorrect([6], 720);
    assertFactorialCorrect([0], 1);
  });

  describe('add', function(){
    function assertAddCorrect(operands, expectedAnswer){
      it('returns the sum of the two arguments: '+operands, function(){
        Add.func({ operands: operands }).should.equal(expectedAnswer);
      })
    }

    assertAddCorrect([1, 1], 2);
    assertAddCorrect([0, 1], 1);
    assertAddCorrect([600, 500], 1100);
  })

  describe('sum', function(){
    it('correctly sums a matrix', function(){
      const matrix = [[1,2],[2,2]];
      const expectedSum = 7;
      Sum.func({ x: matrix }).should.equal(expectedSum);
    })
  })

  describe('median', function(){
    function testMedian(matrix, expectedMedian){
      it('correctly finds the median of '+matrix, function(){
        Median.func({ x: matrix }).should.equal(expectedMedian);
      })
    }

    testMedian([[1,2],[2,2]], 2);
    testMedian([[1,3,4],[4,5,6],[7,8,9]], 5);
    testMedian([[1,2],[7,8]], 4.5);
    testMedian([[8,1],[2,68]], 5);
  })

  describe('max', function(){
    it('finds max of matrix', function(){
      const matrix = [[1,2],[6,2]];
      const expectedMax = 6;
      Max.func({ x: matrix }).should.equal(expectedMax);
    })
  })

  describe('deviation', function(){
    function testDeviation(x, xij, expectedDeviation){
      it('finds the deviation at '+xij+' from '+x, function(){
        Deviation.func({
          operands: [xij],
          x: x
        }).should.equal(expectedDeviation);
      });
    }

    testDeviation([[1,2],[3,2]], 1, 1);
    testDeviation([[25,9],[2,16]], 2, 11);
    testDeviation([[8,8],[14,14]], 8, 3);

    it('correctly formats', function(){
      Deviation.format([]).should.equal("(sigma("+Constants.Xij+"))");
    })
  })

  describe('deviation-row', function(){
    function testDeviationRow(x, xij, expectedDeviation, rowIndex){
      it('finds the deviation at '+xij+' from '+x+'i', function(){
        RowDeviation.func({
          operands: [xij],
          x: x,
          i: rowIndex
        }).should.equal(expectedDeviation);
      });
    }

    testDeviationRow([[1,2],[3,2]], 1, 0.5, 0);
    testDeviationRow([[25,9],[2,16]], 25, 8, 0);
    testDeviationRow([[8,8],[14,14]], 8, 0, 0);
  })

  describe('deviation-col', function(){
    function testDeviationCol(x, xij, expectedDeviation, colIndex){
      it('finds the deviation at '+xij+' from '+x+'j', function(){
        ColDeviation.func({
          operands: [xij],
          x: x,
          j: colIndex
        }).should.equal(expectedDeviation);
      });
    }

    testDeviationCol([[1,2],[3,2]], 1, 1, 0);
    testDeviationCol([[25,9],[2,16]], 25, 11.5, 0);
    testDeviationCol([[8,8],[14,14]], 8, 3, 0);
  })

  describe('min', function(){
    it('finds min of matrix', function(){
      Min.func({ x: [[1,2],[6,2]] }).should.equal(1);
    })
  })

  describe('convolution filter', function(){
    const x = [
      [3,6,2,1,5],
      [5,1,2,3,6],
      [6,3,4,5,2],
      [2,7,8,9,5],
      [7,6,5,3,2]
    ];

    function testConvolutionFilter(i, j, expectedSum, description){
      it('sums a subset of a matrix for ij starting at i-1,j-1 and ending at i+1,j+1 where ij is at '+description, function(){
        ConvolutionFilter.func({
          x: x,
          i: i,
          j: j
        }).should.equal(expectedSum);
      });
    }

    testConvolutionFilter(0, 2, 15, 'top-mid');
    testConvolutionFilter(0, 0, 15, 'top-left');
    testConvolutionFilter(0, 4, 15, 'top-right');
    testConvolutionFilter(2, 2, 42, 'middle');
    testConvolutionFilter(2, 0, 24, 'mid-left');
    testConvolutionFilter(2, 4, 30, 'mid-right');
    testConvolutionFilter(4, 2, 38, 'bottom-mid');
    testConvolutionFilter(4, 0, 22, 'bottom-left');
    testConvolutionFilter(4, 4, 19, 'bottom-right');
  })

  describe('derivative', function(){
    it('finds the derivative of a value Xij', function(){
      const xij = 3;
      const expectedDerivative = 8;
      Derivative.func({
        operands: [xij]
      }).should.equal(expectedDerivative);
    })

    it('correctly formats a derivative', function(){
      Derivative.format().should.equal('((Delta((X_(ij))^2+2X_(ij)+3))/(DeltaX_(ij)))')
    })
  })

  describe('integral', function(){
    function testIntegral(xij, expected){
      it('finds the integral of a function at Xij where Xij == '+xij+' in the range Xij-2 -> Xij+2', function(){
        Integral.func({
          operands: [xij]
        }).should.equal(expected);
      })
    }

    testIntegral(5, 48);
    testIntegral(7, 64);
    testIntegral(1, 16);
    testIntegral(-2, -8);

    it('correctly formats the integral expression', function(){
      Integral.format().should.equal('(int_(X_(ij)-2)^(X_(ij)+2) (2X_(ij)+2))');
    })
  })

  describe('determinant', function(){
    function testDeterminant(x, expectedDeterminant){
      it('finds the determinant of a matrix: '+x, function(){
        Determinant.func({
          x: x
        }).should.equal(expectedDeterminant);
      })
    }

    testDeterminant([
      [1,2,4],
      [2,-1,3],
      [4,0,1]
    ], 35);

    testDeterminant([
      [1,2],
      [3,4]
    ], -2);

    testDeterminant([
      [1,2,3,4],
      [1,0,2,0],
      [0,1,2,3],
      [2,3,0,0]
    ], 7);

    it('formats the determinant expression', function(){
      Determinant.format().should.equal('(|\\'+Constants.X+'|)');
    })
  })
})
