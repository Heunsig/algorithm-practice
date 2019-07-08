// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false


const MySolution = require('./MySolution')
// const Solution1 = require('./Solution1')
// const Solution2 = require('./Solution2')


function palindrome(str) {
  return MySolution(str)
}

module.exports = palindrome;
