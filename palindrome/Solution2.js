function solution_2 (str) {
  return str.split('').every((c, i) => {
    return c === str[str.length - i - 1]
  })
}

module.exports = solution_2