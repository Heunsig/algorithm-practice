// --- Directions
// Return the 'middle' node of a linked list.
// If the list has an even number of elements, return
// the node at the end of the first half of the list.
// *Do not* use a counter variable, *do not* retrieve
// the size of the list, and only iterate
// through the list one time.
// --- Example
//   const l = new LinkedList();
//   l.insertLast('a')
//   l.insertLast('b')
//   l.insertLast('c')
//   midpoint(l); // returns { data: 'b' }
  

function midpoint(list) {
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

module.exports = midpoint;
