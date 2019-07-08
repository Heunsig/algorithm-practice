function Solution (array, size) {
  const chunked = []
  let index = 0

  while ( index < array.length ) {
    chunked.push(array.slice(index, index + size))
    index += size
  }

  return chunked
}

module.exports = Solution