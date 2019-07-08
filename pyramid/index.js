// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function my_solution (n) {
  const total_columns = (2 * (n - 1)) + 1
  const center_index = Math.floor(total_columns / 2)

  for (let row = 0 ; row < n ; row++) {
    const total_hash_in_row = (2 * (row)) + 1
    const moving_index = (total_hash_in_row - 1) / 2
    const index_range = [center_index - moving_index, center_index + moving_index]

    let stair = ''

    for (let column = 0 ; column < total_columns ; column++) {
      if (column >= index_range[0] && column <= index_range[1]) {
        stair += '#' 
      } else {
        stair += ' '
      }
    }

    console.log(stair)
  }
}


function my_solution_2 (n, total_columns=0, center_index=0, row=0, column=0, stair='') {
  if (row === 0) {
    total_columns = (2 * n) - 1
    center_index = Math.floor(total_columns / 2)
  }

  if (n === row) {
    return
  }

  if (column === total_columns) {
    console.log(stair)
    return my_solution_2(n, total_columns, center_index, row + 1)
  }

  const total_hash_in_row = (2 * (row)) + 1
  const moving_index = (total_hash_in_row - 1) / 2
  const index_range = [center_index - moving_index, center_index + moving_index]

  if (column >= index_range[0] && column <= index_range[1]) {
    stair += '#'
  } else {
    stair += ' '
  }

  my_solution_2(n, total_columns, center_index, row, column + 1, stair)
}


function solution_1 (n) {
  const midpoint = Math.floor((2 * n - 1) / 2)

  for (let row = 0 ; row < n ; row++) {
    let level = ''

    for (let column = 0 ; column < 2 * n - 1 ; column++ ) {
      if (midpoint - row <= column && midpoint + row >= column) {
        level += '#'
      } else {
        level += ' '
      }
    }

    console.log(level)
  }
}


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

function pyramid(n) {
  // my_solution(n)
  // my_solution_2(n)
  // solution_1(n)
  solution_2(n)
}

pyramid(3)

module.exports = pyramid;
