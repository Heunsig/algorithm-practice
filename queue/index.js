// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

// class Queue {
//   constructor () {
//     this.queue = []
//   }

//   add (value) {
//     this.queue[this.queue.length] = value
//   }

//   remove () {
//     return this.queue.splice(0, 1)[0]
//   }
// }

class Queue {
  constructor () {
    this. data = []
  }

  add (record) {
    this.data.unshift(record)
  }

  remove () {
    return this.data.pop()
  }
}

module.exports = Queue;
