function Solution (n) {
  if (n < 2) {
    return n
  }

  return solution_2(n - 1) + solution_2(n - 2)
}

module.exports = Solution