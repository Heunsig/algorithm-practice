///////////////
// Recursive //
///////////////
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

module.exports = my_solution_2