function mySolution2 (n, row = 0) {
  if (n <= row) {
    return
  }

  let result = ''

  for (let column = 0 ; column < n ; column++) {
    if (column < row + 1) {
      result += '#'
    } else {
      result += ' '
    }
  }

  console.log(result)
  my_solution_2(n, row + 1)
}

module.exports = mySolution2