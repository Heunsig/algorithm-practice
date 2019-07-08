/////////////////
// Memoization //
/////////////////
function MySolution (n) {
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

module.exports = MySolution