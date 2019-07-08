// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


const MySolution = require('./MySolution')
// const Solution1 = require('./Solution1')
// const Solution2 = require('./Solution2')

function capitalize(str) {
  return MySolution(str)
}

module.exports = capitalize;
