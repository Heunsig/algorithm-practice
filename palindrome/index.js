// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function my_solution (str) {
  let reversed = str.split('').reverse().join('')
  if (reversed === str) {
    return true
  } else {
    return false
  }
}

function solution_1 (str) {
  let reversed = str.split('').reverse().join('')
  return reversed === str
}

function solution_2 (str) {
  return str.split('').every((c, i) => {
    return c === str[str.length - i - 1]
  })
}

function palindrome(str) {
  // return my_solution(str)
  // return solution_1(str)
  return solution_2(str)
}

module.exports = palindrome;
