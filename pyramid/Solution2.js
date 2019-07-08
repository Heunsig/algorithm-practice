function solution_2 (n, row = 0, level = '') {
  if (row === n) {
    return
  }

  if (level.length === 2 * n - 1) {
    console.log(level)
    return solution_2(n, row + 1)
  }

  const midpoint = Math.floor((2 * n - 1) / 2)
  let add

  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#'
  } else {
    add = ' '
  }

  solution_2(n, row, level + add)
}

module.exports = solution_2