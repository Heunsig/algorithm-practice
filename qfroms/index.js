// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor () {
    this.stack1 = new Stack()
    this.stack2 = new Stack()
  }

  add (record) {
    this.stack1.push(record)
  }

  peek () {
    let value = null
    let peek = null
    while (value = this.stack1.pop()) {
      this.stack2.push(value)
    }

    peek = this.stack2.peek()

    while (value = this.stack2.pop()) {
      this.stack1.push(value)
    }

    return peek
  }

  remove () {
    let value = null
    let pop = null
    while (value = this.stack1.pop()) {
      this.stack2.push(value)
    }

    pop = this.stack2.pop()

    while (value = this.stack2.pop()) {
      this.stack1.push(value)
    }

    return pop
  }
}

module.exports = Queue;
