function my_solution (list) {
  const head = list.head
  let slow = head
  let fast = head
  let midpoint = null

  function move_slowly () {
    if (slow.next) {
      slow = slow.next  
    } else {
      return slow = null
    }
  }

  function move_fast () {
    for (let i = 0 ; i < 2 ; i++) {
      if (fast.next) {
        fast = fast.next
      } else {
        return fast = null
      }  
    }
  }

  while (fast) {
    move_fast()
    if (!fast) {
      midpoint = slow
      break
    }
    move_slowly()
  }

  return midpoint
}

module.exports = my_solution