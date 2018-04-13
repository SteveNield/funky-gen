# funky-gen
From some user data, generates a hash and an equation of consistent complexity in asciimath format

# installation

`npm install --save funky-gen`

# usage

## es5

`var FunkyGen = require('funky-gen')

const generatedEquation = FunkyGen({ seed: 'somerandominputdata' });`

## es6

`import FunkyGen from 'funky-gen'

const generatedEquation = FunkyGen({ seed: 'somerandominputdata' });`

