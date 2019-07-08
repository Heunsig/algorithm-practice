function MySolution (str) {
  let result = ''
  let capitalized_words = []
  const words = str.split(' ')
  for (let word of words) {
    let chars = word.split('')
    capitalized_words.push(chars[0].toUpperCase() + chars.splice(1, chars.length).join(''))
  }

  return capitalized_words.join(' ')
}

module.exports = MySolution

