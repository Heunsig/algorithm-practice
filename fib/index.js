// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


/////////////////////
// Normal iltering //
/////////////////////
function MySolution (n) {
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

///////////////
// Recursive //
///////////////
function MySolution2 (n) {
  if (n === 0) {
    return 0
  }

  if (n === 1) {
    return 1
  }

  return my_solution_2(n - 1) + my_solution_2(n - 2)
}

/////////////////
// Memoization //
/////////////////
function MySolution3 (n) {
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

function fib(n) {
  return new MySolution3(n).execute()
}

module.exports = fib;
