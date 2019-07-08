function mySolution (sourceOne, sourceTwo, Queue) {
  const q = new Queue()
  while (sourceOne.peek() || sourceTwo.peek()) {
    q.add(sourceOne.remove())
    q.add(sourceTwo.remove())
  }

  return q
}

module.exports = mySolution