// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function my_solution (n) {
  let reversed = ''
  let stringified_number = n.toString()
  let sign = ''
  for (let c of stringified_number) {
    if (c === '-') {
      sign = c
    } else {
      reversed = c + reversed
    }
  }

  return parseInt(sign + reversed)
}

function solution_1 (n) {
  let reversed = n.toString().split('').reverse().join('')

  if (n < 0) {
    return parseInt(reversed) * -1
  }

  return parseInt(reversed)
}

function solution_2 (n) {
  let reversed = n.toString().split('').reverse().join('')

  return parseInt(reversed) * Math.sign(n)
}

function reverseInt(n) {
  // return my_solution(n)  
  // return solution_1(n)
  return solution_2(n)
}

module.exports = reverseInt;
