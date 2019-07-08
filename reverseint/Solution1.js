function solution_1 (n) {
  let reversed = n.toString().split('').reverse().join('')

  if (n < 0) {
    return parseInt(reversed) * -1
  }

  return parseInt(reversed)
}

module.exports = solution_1