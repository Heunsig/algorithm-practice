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

function my_solution (n) {
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

function my_solution_2 (n, row = 0) {
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
  my_solution_2(n, row + 1)
}

function solution_1 (n) {
  for (let row = 0 ; row < n ; row++) {
    let stair = ''

    for (let column = 0 ; column < n ; column++) {
      if (column <= row) {
        stair += '#'
      } else {
        stair += ' '
      }
    }

    console.log(stair)
  }
}

function solution_2 (n, row = 0, stair = '') {
  if (n === row) {
    return
  }

  if (n === stair.length) {
    console.log(stair)
    return solution_2(n, row + 1)
  }

  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }

  solution_2(n, row, stair)
}

function steps(n) {
  // my_solution(n)
  // my_solution_2(n)
  // solution_1(n)
  solution_2(n)
}

module.exports = steps;
