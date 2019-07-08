// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function my_solution (str) {
  let result = ''
  let capitalized_words = []
  const words = str.split(' ')
  for (let word of words) {
    let chars = word.split('')
    capitalized_words.push(chars[0].toUpperCase() + chars.splice(1, chars.length).join(''))
  }

  return capitalized_words.join(' ')
}

function solution_1 (str) {
  const words = []
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1))
  }

  return words.join(' ')
}

function solution_2 (str) {
  let result = str[0].toUpperCase()

  for (let i = 1; i < str.length ; i++) {
    if (str[i -1] === ' ') {
      result += str[i].toUpperCase()
    } else {
      result += str[i]
    }
  }

  return result
}

function capitalize(str) {
  // return my_solution(str)
  return solution_1(str)
}

module.exports = capitalize;
