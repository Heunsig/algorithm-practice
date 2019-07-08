// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


const MySolution = require('./MySolution')
// const Solution = require('./Solution')


function maxChar(str) {
  return MySolution(str)
}

module.exports = maxChar;
