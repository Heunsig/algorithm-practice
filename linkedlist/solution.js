class Node {
  constructor (data, next) {
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
}