require('winter-test-setup');

var EquationFormatter = require('./../src/equation-formatter'),
    Constants = require('./../src/constants');

describe('EquationFormatter', function(){
  it('formats a specification using ascii-math notation', function(){
    const specification = {
      operator: 'Add',
      operands: [{
        operator: 'DeviationCol',
        operands: []
      }, {
        operator: 'Min',
        operands: []
      }]
    };

    const expectedFormattedSolution = 'f('+Constants.Xij+')=((sigma_(j)('+Constants.Xij+')) + (min('+Constants.X+')))';

    EquationFormatter.format(specification).should.equal(expectedFormattedSolution);
  })
})
