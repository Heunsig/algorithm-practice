function mySolution (str) {
  const vowels = str.toLowerCase().match(/[aeiou]/g)
  return vowels ? vowels.length : 0
}

module.exports = mySolution