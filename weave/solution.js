function solution1 (sourceOne, sourceTwo, Queue) {
  const q = new Queue()
  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) {
      q.add(sourceOne.remove())
    }

    if (sourceTwo.peek()) {
      q.add(sourceTwo.remove())
    }
  }

  return q
}

module.exports = solution1