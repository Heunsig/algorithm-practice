function MySolution (str) {
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

module.exports = MySolution