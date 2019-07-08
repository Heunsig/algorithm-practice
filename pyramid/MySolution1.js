/////////////////////
// Normal iltering //
/////////////////////
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

module.exports = my_solution