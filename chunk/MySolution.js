function MySolution (array, size) {
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

module.exports = MySolution