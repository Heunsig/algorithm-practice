// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function my_solution (str) {
  let separated_str = str.split('')
  let str_arr = {}
  let biggest_char = ''

  for (let c of separated_str) {
    str_arr[c] = str_arr[c] + 1 || 1
  }

  for (let c in str_arr) {
    if (!biggest_char) {
      biggest_char = c
    }

    if (str_arr[c] > str_arr[biggest_char]) {
      biggest_char = c
    }
  }

  return biggest_char
}

function solution_1 (str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    if (charMap[char]) {
      charMap[char]++
    } else {
      charMap[char] = 1
    }
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }

  return maxChar 
}

function maxChar(str) {
  // return my_solution(str)
  return solution_1(str)
}

module.exports = maxChar;
