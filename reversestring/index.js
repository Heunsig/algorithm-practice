// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function my_solution (str) {
  let result = ''
  for (let i = 1 ; i <= str.length ; i++) {
    result += str[str.length - i]
  }

  return result
}

function solution_1 (str) {
  return str.split('').reverse().join('')
}

function solution_2 (str) {
  let reversed = ''
  for (let c of str) {
    reversed = c + reversed
  }

  return reversed
}

function solution_3 (str) {
  return str.split('').reduce((reversed, c) => c + reversed, '')
}

function reverse(str) {
  // return my_solution(str)
  // return solution_1(str)
  // return solution_2(str)
  return solution_3(str)
}


module.exports = reverse;
