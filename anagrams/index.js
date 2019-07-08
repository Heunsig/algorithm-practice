// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//   

const MySolution = require('./my_solution')
// const Solution1 = require('./Solution1')
// const Solution2 = require('./Solution2')


function anagrams(stringA, stringB) {
  return new MySolution(stringA, stringB).execute()
}


module.exports = anagrams;
