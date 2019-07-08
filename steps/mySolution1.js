function mySolution1 (n) {
  let a = ''
  for (let i = 1 ; i <= n ; i++) {
    a = ''

    for (let j = 0 ; j < i ; j++) {
      a = '#' + a
    }

    for (let k = 0 ; k < n - i ; k++) {
      a = a + ' '
    }

    console.log(a)
  }
}

module.exports = mySolution1