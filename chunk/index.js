// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
  let result_arr = []
  let chunk_arr = []

  for (let value of array) {
    if (chunk_arr.length < size) {
      chunk_arr.push(value)
    } else {
      result_arr.push(chunk_arr)
      chunk_arr = []
      chunk_arr.push(value)
    }
  }

  if (chunk_arr.length !== 0) {
    result_arr.push(chunk_arr)
  }

  return result_arr
}

module.exports = chunk;
