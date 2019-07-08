// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const mySolution1 = require('./mySolution1')
// const mySolution2 = require('./mySolution2') 
// const solution1 = require('./solution1')
// const solution2 = require('./solution2')


function steps(n) {
  mySolution1(n)
}

module.exports = steps;
