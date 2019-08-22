// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

//////////
// Loop //
//////////
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


///////////////
// Recursive //
///////////////
function mySolution2 (n, row = 0) {
  if (n <= row) {
    return
  }

  let result = ''

  for (let column = 0 ; column < n ; column++) {
    if (column < row + 1) {
      result += '#'
    } else {
      result += ' '
    }
  }

  console.log(result)
  mySolution2(n, row + 1)
}

function steps(n) {
  mySolution1(n)
  // mySolution2(n)
}

module.exports = steps;
