function mySolution (str) {
  let result = ''
  for (let i = 1 ; i <= str.length ; i++) {
    result += str[str.length - i]
  }

  return result
}

module.exports = mySolution