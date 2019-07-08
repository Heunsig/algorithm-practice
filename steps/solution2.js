function solution2 (n, row = 0, stair = '') {
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return solution_2(n, row + 1)
  }

  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }

  solution_2(n, row, stair)
}

module.exports = solution2