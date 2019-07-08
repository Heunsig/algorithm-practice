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

module.exports = MySolution