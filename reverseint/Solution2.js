function solution_2 (n) {
  let reversed = n.toString().split('').reverse().join('')

  return parseInt(reversed) * Math.sign(n)
}

module.exports = solution_2