function MySolution (n) {
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

module.exports = MySolution