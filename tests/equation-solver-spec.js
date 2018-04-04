require('winter-test-setup');

var EquationSolver = require('./../src/equation-solver'),
    Complexity1Spec = require('./specs/complexity-1'),
    SuperBasicSpec = require('./specs/super-basic'),
    Constants = require('./../src/constants');

describe('EquationSolver', function(){
  it('solves a complexity 1 specification for an input matrix and returns a solution matrix', function(){
    const specification = Complexity1Spec;
    const input = [[2,5],[6,1]];
    const expectedSolution = [[-699, -1371],[-1595, -475]];
    EquationSolver.solve(specification, input).should.deep.equal(expectedSolution);
  })

  it('solves a super-basic specification for an input matrix and returns a solution matrix', function(){
    const specification = SuperBasicSpec;
    const input = [[2,5],[6,1]];
    const expectedSolution = [[2, 2],[2, 2]];
    EquationSolver.solve(specification, input).should.deep.equal(expectedSolution);
  })
})
