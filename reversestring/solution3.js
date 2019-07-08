function solution3 (str) {
  return str.split('').reduce((reversed, c) => c + reversed, '')
}

module.exports = solution3