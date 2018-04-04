require('winter-test-setup');

var EquationGenerator = require('./../src/equation-generator'),
    Operands = require('./../src/operands'),
    Complexity1Spec = require('./specs/complexity-1'),
    Constants = require('./../src/constants');

describe('EquationGenerator', function(){
  var sandbox;

  beforeEach(function(){
    sandbox = sinon.collection;
    EquationGenerator._clearCompositeOperands();
  })

  afterEach(function(){
    sandbox.restore();
  })

  describe('generate', function(){
    it('generates a spec of complexity 1 given a parsed hash', function(){
      const hashComponents = {
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
        complexity: 1
      };
      const expectedSpec = Complexity1Spec;
      EquationGenerator.generate(hashComponents).should.deep.equal(expectedSpec);
    })

    function testForError(options){
      it('throws an error if complexity is greater that number of base operators in hash', function(done){
        try{
          EquationGenerator.generate(options);
          done('Error was not thrown');
        } catch(err){
          done();
        }
      })
    }

    testForError({
      base: [],
      subs: ['b','c'],
      operands: ['c','c',],
      complexity: 2
    });

    testForError({
      base: ['a'],
      subs: ['b'],
      operands: ['c','c'],
      complexity: 2
    });

    testForError({
      base: ['a'],
      subs: ['b','b'],
      operands: ['c'],
      complexity: 2
    });
  })

  describe('_resolveBlock', function(){
    function testResolveBlock(operation, operands, expectedBlock){
      it('resolves an operation ('+operation+') to a block', function(){
        EquationGenerator._setCompositeOperands(operands);
        EquationGenerator._resolveBlock(operation).should.deep.equal(expectedBlock);
      });
    }

    testResolveBlock("Determinant", [], {
      "operator": "Determinant",
      "operands": []
    });

    testResolveBlock("Deviation", [], {
      "operator": "Deviation",
      "operands": [Constants.Xij_PLACEHOLDER]
    });

    testResolveBlock("Add", [{
      "operator": "Determinant",
      "operands": []
    }, {
      "operator": "Integral",
      "operands": [Constants.Xij_PLACEHOLDER]
    }, {
      "operator": "Integral",
      "operands": [Constants.Xij_PLACEHOLDER]
    }], {
      "operator": "Add",
      "operands": [{
        "operator": "Determinant",
        "operands": []
      }, {
        "operator": "Integral",
        "operands": [Constants.Xij_PLACEHOLDER]
      }]
    });
  })

  describe('_resolveTree', function(){
    function testResolveTree(operators, operands, expectedTree){
      it('correctly resolves a spec tree from a given set of operators and operands', function(){
        EquationGenerator._resolveTree(operators, operands).should.deep.equal(expectedTree);
      })
    }

    testResolveTree(['Add','Subtract','Divide'], [{
      "operator": "Determinant",
      "operands": []
    }, {
      "operator": "Integral",
      "operands": [Constants.Xij_PLACEHOLDER]
    }, {
      "operator": "Deviation",
      "operands": [Constants.Xij_PLACEHOLDER]
    }, {
      "operator": "DeviationCol",
      "operands": [Constants.Xij_PLACEHOLDER]
    }], {
      "operator": "Divide",
      "operands": [{
        "operator": "Subtract",
        "operands": [{
          "operator": "Add",
          "operands": [{
            "operator": "Determinant",
            "operands": []
          }, {
            "operator": "Integral",
            "operands": [Constants.Xij_PLACEHOLDER]
          }]
        }, {
          "operator": "Deviation",
          "operands": [Constants.Xij_PLACEHOLDER]
        }]
      }, {
        "operator": "DeviationCol",
        "operands": [Constants.Xij_PLACEHOLDER]
      }]
    })

    testResolveTree(['Add'], [{
      "operator": "Integral",
      "operands": [Constants.Xij_PLACEHOLDER]
    }, {
      "operator": "Deviation",
      "operands": [Constants.Xij_PLACEHOLDER]
    }], {
      "operator": "Add",
      "operands": [{
        "operator": "Integral",
        "operands": [Constants.Xij_PLACEHOLDER]
      }, {
        "operator": "Deviation",
        "operands": [Constants.Xij_PLACEHOLDER]
      }]
    })

    testResolveTree(['Add', 'Subtract'], [{
      "operator": "Determinant",
      "operands": []
    }, {
      "operator": "Integral",
      "operands": [Constants.Xij_PLACEHOLDER]
    }, {
      "operator": "Deviation",
      "operands": [Constants.Xij_PLACEHOLDER]
    }], {
      "operator": "Subtract",
      "operands": [{
        "operator": "Add",
        "operands": [{
          "operator": "Determinant",
          "operands": []
        }, {
          "operator": "Integral",
          "operands": [Constants.Xij_PLACEHOLDER]
        }]
      },{
        "operator": "Deviation",
        "operands": [Constants.Xij_PLACEHOLDER]
      }]
    })
  })
});
