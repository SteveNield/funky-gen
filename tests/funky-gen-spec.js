require('winter-test-setup');

var FunkyGen = require('./../src/funky-gen'),
    Operands = require('./../src/operands'),
    Constants = require('./../src/constants');

describe('FunkyGen', function(){

  function testFunkyGen(testData){
    it('Correctly generates output for '+testData.hash, function(){
      FunkyGen({ complexity: testData.complexity, hash: testData.hash }).should.deep.equal({
        input: testData.expectedInputData,
        solution: testData.expectedSolution,
        equation: testData.expectedEquation,
        complexity: parseInt(testData.complexity),
        uid: testData.hash
      });
    })
  }

  testFunkyGen({
    complexity: 1,
    hash: '0000000000000000',
    expectedInputData: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
    expectedSolution: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
    expectedEquation: 'f('+Constants.Xij+')=((((|\\'+Constants.X+'|) + (|\\'+Constants.X+'|)) + (|\\'+Constants.X+'|)) + (|\\'+Constants.X+'|))'
  })

  testFunkyGen({
    complexity: 1,
    hash: '2222222282222444',
    expectedInputData: [[4,4,4,2],[2,2,2,8],[2,2,2,2],[2,2,2,2]],
    expectedSolution: [[3,3,3,3],[3,3,3,3],[3,3,3,3],[3,3,3,3]],
    expectedEquation: 'f('+Constants.Xij+')=(((((Delta(('+Constants.Xij+')^2+2'+Constants.Xij+'+3))/(Delta'+Constants.Xij+')) + ((Delta(('+Constants.Xij+')^2+2'+Constants.Xij+'+3))/(Delta'+Constants.Xij+'))) + ((Delta(('+Constants.Xij+')^2+2'+Constants.Xij+'+3))/(Delta'+Constants.Xij+'))) / ((Delta(('+Constants.Xij+')^2+2'+Constants.Xij+'+3))/(Delta'+Constants.Xij+')))'
  })

  testFunkyGen({
    complexity: '1',
    hash: '0000000000000000',
    expectedInputData: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
    expectedSolution: [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]],
    expectedEquation: 'f('+Constants.Xij+')=((((|\\'+Constants.X+'|) + (|\\'+Constants.X+'|)) + (|\\'+Constants.X+'|)) + (|\\'+Constants.X+'|))'
  })
})
