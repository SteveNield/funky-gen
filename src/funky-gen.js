var HashParser = require('./hash-parser'),
    EquationGenerator = require('./equation-generator'),
    Operators = require('./operators'),
    Operands = require('./operands'),
    EquationSolver = require('./equation-solver'),
    EquationFormatter = require('./equation-formatter'),
    Config = require('./../config');

module.exports = function(options){
  let hash = options.hash;
  let complexity = parseInt(options.complexity) || Config.function.defaultComplexity;

  hash.split('').forEach(function(character){
    if(!Operators.hasOwnProperty(character) && !Operands.hashOwnProperty(character)){
      throw new Error('Invalid hash');
    }
  });

  const hashComponents = HashParser.parse(hash);
  const equationSpecification = EquationGenerator.generate({
    complexity: complexity,
    base: hashComponents.base,
    subs: hashComponents.subs,
    operands: hashComponents.operands
  });
  const solution = EquationSolver.solve(equationSpecification, hashComponents.input);
  const formattedEquation = EquationFormatter.format(equationSpecification);

  return {
    equation: formattedEquation,
    input: hashComponents.input,
    solution: solution,
    complexity: complexity,
    uid: hash
  }
}
