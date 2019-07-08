function solution2 (str) {
  let reversed = ''
  for (let c of str) {
    reversed = c + reversed
  }

  return reversed
}

module.exports = solution2