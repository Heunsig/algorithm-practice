function MySolution (list, n) {
  let slow = list.getFirst()
  let fast = list.getFirst()

  while (n) {
    if (fast.next) {
      fast = fast.next  
    }
    n--
  }

  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}

module.exports = MySolution