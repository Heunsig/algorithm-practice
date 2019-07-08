// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'


const MySolution1 = require('./MySolution1')
// const MySolution2 = require('./MySolution2')
// const Solution1 = require('./Solution1')
// const Solution2 = require('./Solution2')


function pyramid(n) {
  MySolution1(n)
}

module.exports = pyramid;
