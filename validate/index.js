// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent
// 
const Node = require('./node')

function validate(node, min=null, max=node.data) {
  if (!node.left && !node.right) {
    // console.log(node.data >= min && node.data <= max)
    return node.data >= min && node.data <= max
  }

  if (node.left && node.left.data < max) {
    if (validate(node.left, min=node.left.data, max=node.data)) {
      if (node.right) {
        return validate(node.right, min=node.data, max=node.right.data)
      } else {
        return true
      }
      
    }

    return false
  }


  if (node.right && node.right.data < max) {
    return validate(node.right, min=min, max=node.right.data)
  }


}

const n = new Node(10);
n.insert(5);
n.insert(15);
n.insert(0);
n.insert(20);

console.log(validate(n))

// const n = new Node(10);
// n.insert(5);
// n.insert(15);
// n.insert(0);
// n.insert(20);
// n.left.left.right = new Node(999);
// console.log(validate(n))

module.exports = validate;
