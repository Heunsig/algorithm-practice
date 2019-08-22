// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
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

module.exports = reverseInt;
