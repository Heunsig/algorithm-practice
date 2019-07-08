// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// const MySolution1 = require('./MySolution1')
// const MySolution2 = require('./MySolution2')
const MySolution3 = require('./MySolution3')
// const Solution1 = require('./Solution1')
// const Solution2 = require('./Solution2')
// const Solution3 = require('./Solution3')


function fib(n) {
  return new MySolution3(n).execute()
}

module.exports = fib;
