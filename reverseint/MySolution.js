function my_solution (n) {
  let reversed = ''
  let stringified_number = n.toString()
  let sign = ''
  for (let c of stringified_number) {
    if (c === '-') {
      sign = c
    } else {
      reversed = c + reversed
    }
  }

  return parseInt(sign + reversed)
}

module.exports = my_solution