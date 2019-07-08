// Recursive
function MySolution (n) {
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  return my_solution_2(n - 1) + my_solution_2(n - 2)
}

module.exports = MySolution