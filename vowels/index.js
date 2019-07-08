// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


function my_solution (str) {
  const vowels = str.toLowerCase().match(/[aeiou]/g)
  return vowels ? vowels.length : 0
}

function solution_1 (str) {
  let counter = 0
  const checker = ['a', 'e', 'i', 'o', 'u']

  for (let char of str.toLowerCase()) {
    if(checker.includes(char)) {
      counter++
    }
  }

  return counter
}

function solution_2 (str) {
  const matches = str.match(/[aeiou]/gi)
  return matches ? matches.length : 0
}

function vowels(str) {  
  // return my_solution(str)  
  return solution_2(str)
}

// console.log(vowels('qwrt'))

module.exports = vowels;
