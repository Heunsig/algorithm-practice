function solution_1 (str) {
  let reversed = str.split('').reverse().join('')
  return reversed === str
}

module.exports = solution_1