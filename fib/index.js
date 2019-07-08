// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// Normal iltering
function my_solution (n) {
  let previous_number = 0
  let sum = 1
  let temp = 0

  if (n < 1) {
    return 0
  }

  for (let i = 1 ; i < n ; i++) {
    temp = sum
    sum = sum + previous_number
    previous_number = temp
  }

  return sum
}

// Recursive
function my_solution_2 (n) {
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  return my_solution_2(n - 1) + my_solution_2(n - 2)
}

// Memoization
function my_solution_3 (n) {
  const fib_map = {}

  const fib =  (n) => {
    if (n < 2) {
      return n
    }

    if (fib_map[n]) {
      return fib_map[n]
    } else {
      fib_map[n] = fib(n - 1) + fib(n - 2)
      return fib_map[n]
    }  
  }

  this.execute = () => {
    return fib(n)
  }
}

function solution_1 (n) {
  const result = [0, 1]

  for (let i = 2 ; i <= n ; i++) {
    const a = result[i - 1]
    const b = result[i - 2]

    result.push(a + b)
  }

  return result[n]
}

function solution_2 (n) {
  if (n < 2) {
    return n
  }

  return solution_2(n - 1) + solution_2(n - 2)
}

// function solution_3 (fn) {
//   const cache = {}

//   return function (...args) {
//     if (cache[args]) {
//       return cache[args]
//     }

//     const result = fn.apply(this, args)
//     cache[args] = result

//     return result
//   }
// }

function fib(n) {
  // return my_solution(n)
  // return my_solution_2(n)
  return new my_solution_3(n).execute()
  // return solution_1(n)
}

module.exports = fib;
