// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
//   

function MySolution (stringA, stringB) {

  __is_special_symbol = (char) => {
    const specialChars = "~`!#$%^&*+=-[]\\\';,/{}|\":<>?"

    for (let c of specialChars) {
      if (c === char) {
        return true
      }
    }

    return false
  }

  __generate_charmap = (str) => {
    const charMap = {}

    for (let char of str) {
      char = char.toLowerCase()
      if (!__is_special_symbol(char)) {
        if (charMap[char]) {
          charMap[char]++
        } else {
          charMap[char] = 1
        }  
      }
    }

    return charMap
  }

  __is_matched = (mapA, mapB) => {
    if (Object.keys(mapA).length !== Object.keys(mapB).length) {
      return false
    }

    for (let o in mapA) {
      if (mapA[o] !== mapB[o]) {
        return false
      }
    }

    return true
  } 

  
  this.execute = () => {
    const stringA_map = __generate_charmap(stringA)
    const stringB_map = __generate_charmap(stringB)

    return __is_matched(stringA_map, stringB_map)
  }

}

module.exports = MySolution


function anagrams(stringA, stringB) {
  return new MySolution(stringA, stringB).execute()
}


module.exports = anagrams;
