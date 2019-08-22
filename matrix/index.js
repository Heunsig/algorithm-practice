// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let matrix = []
  let index = 1
  let total_loop = Math.ceil(n / 2)

  // Create an empty matrix
  for (let i = 0 ; i < n ; i++) {
    matrix.push([])
  }

  // Create a spiral matrix
  for (let loop = 0 ; loop < total_loop ; loop++) {

    // Left to right
    for (let i = 0 ; i < n - (loop * 2)  ; i++) {
      matrix[loop][i + loop] = index
      index++
    }

    // Top to bottom
    for (let i = 1 + loop ; i < n - loop ; i++) {
      matrix[i][n - 1 - loop] = index
      index++ 
    }

    // Right to left
    for (let i = 1 + loop ; i < n - loop ; i++) {
      matrix[n - 1 - loop][n - 1 - i] = index
      index++
    }

    // Bottom to top
    for (let i = 1 + loop ; i < n - (loop + 1) ; i++) {
      matrix[n - 1 - i][loop] = index
      index++
    }

  }

  return matrix
}

module.exports = matrix;
