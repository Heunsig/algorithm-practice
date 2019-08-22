// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document


class Node {
  constructor (data, next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor () {
    this.head = null
    
  }

  insertFirst (data) {
    this.head = new Node(data, this.head)
  }

  size () {
    let count = 0
    let next = null

    if (this.head) {
      count++
      next = this.head.next
    }

    while (next) {
      count++
      next = next.next
    }

    return count
  }

  getFirst () {
    return this.head
  }

  getLast () {
    let node = null
    let lastNode = null

    if (!this.head) {
      return null
    }

    node = this.head
    while (node) {
      lastNode = node
      node = node.next
    }

    return lastNode
  }

  clear () {
    this.head = null
  }

  removeFirst () {
    if (!this.head) {
      return this.head
    }

    this.head = this.head.next
  }

  removeLast () {
    let node = null
    let lastNode = null
    const size = this.size()

    if (!this.head) {
      return null
    }

    if (size === 1) {
      return this.head = null
    }

    node = this.head
    for (let i = 0 ; i < size - 1 ; i++) {
      lastNode = node
      node = node.next
    }

    lastNode.next = null
  }

  insertLast (data) {
    let node = null
    const size = this.size()

    if (!this.head) {
      this.head = new Node(data)
    } else {
      node = this.head
      for (let i = 0 ; i < size - 1; i++) {
        node = node.next
      }

      node.next = new Node(data)  
    }
  }

  getAt (index) {
    let node = null
    const size = this.size()

    if ((index > size - 1) || (index < 0 )) {
      return null
    }

    node = this.head

    let i = 0 
    while(i < index) {
      node = node.next
      i++
    }

    return node
  }

  removeAt (index) {
    const size = this.size()

    if (index > size - 1) {
      return
    }


    let previosNode = this.getAt(index - 1)
    let currentNode = this.getAt(index)
    let nextNode = currentNode.next

    if (previosNode) {
      previosNode.next = nextNode  
    } else {
      this.head = nextNode
    }

  }

  insertAt (data, index) {
    const size = this.size()

    if (index > size) {
      index = size
    }

    let previosNode = this.getAt(index - 1)
    let currentNode = this.getAt(index)
    let newNode = new Node(data, currentNode)

    if (previosNode) {
      previosNode.next = newNode  
    } else {
      this.head = newNode
    }
    
  }

  forEach (callback) {
    const size = this.size()

    for (let i = 0 ; i < size ; i++) {
      callback(this.getAt(i), i)
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }

}


module.exports = { Node, LinkedList };
