// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]
// 
const Node = require('./node')

function levelWidth(root) {
  let result = []
  let arr = [root]

  result.push(arr.length)

  while (arr.length) {
    let counter = 0
    let counterOfPreviousLevel = result[result.length - 1]

    while (counterOfPreviousLevel) {
      let node = arr.shift()
      
      counter = counter + node.children.length
      arr.push(...node.children)

      counterOfPreviousLevel--

    }

    if (counter) {
      result.push(counter)
    }
    
  }

  return result
}

module.exports = levelWidth;
