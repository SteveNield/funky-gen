require('winter-test-setup');

var Package = require('./../index');

describe('Package Interface', function(){
  it('returns the correct function, input, solution, uid and complexity for a given seed value', function(){
    const seed = '12309823098wkldfsadkfjlj2309ujfw98dj9sudfj';
    Package({ seed: seed }).should.deep.equal({
      equation: "f(X_(ij))=(((((|\\X|) xx tilde X) + (|\\X|)) / ((sum_(n=j-1)^(j+1) sum_(m=i-1)^(i+1) X_(mn)))) / ((((|\\X|) - ((Delta((X_(ij))^2+2X_(ij)+3))/(DeltaX_(ij)))) + ((Delta((X_(ij))^2+2X_(ij)+3))/(DeltaX_(ij)))) / ((sum_(n=j-1)^(j+1) sum_(m=i-1)^(i+1) X_(mn)))))",
      input: [
        [ 9, 10, 12, 5 ],
        [ 4, 9, 10, 8 ],
        [ 1, 2, 2, 0 ],
        [ 12, 4, 6, 15 ]
      ],
      solution: [
        [ 8, 8, 8, 8 ],
        [ 8, 8, 8, 8 ],
        [ 8, 8, 8, 8 ],
        [ 8, 8, 8, 8 ]
      ],
      uid: 'f64c02218a945ca9',
      complexity: 2
    });
  })
})
