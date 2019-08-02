function MySolution (list) {
  let slow = list.getFirst()
  let fast = list.getFirst()

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    
    if (fast === slow) {
      return true
    }
  }

  return false
}

module.exports = MySolution
