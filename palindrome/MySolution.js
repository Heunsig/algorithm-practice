function MySolution (str) {
  let reversed = str.split('').reverse().join('')
  if (reversed === str) {
    return true
  } else {
    return false
  }
}

module.exports = MySolution