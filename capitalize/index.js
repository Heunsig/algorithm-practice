// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


function capitalize(str) {
  let result = ''
  let capitalized_words = []
  const words = str.split(' ')
  for (let word of words) {
    let chars = word.split('')
    capitalized_words.push(chars[0].toUpperCase() + chars.splice(1, chars.length).join(''))
  }

  return capitalized_words.join(' ')
}

module.exports = capitalize;
